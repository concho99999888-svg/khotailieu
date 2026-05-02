const crypto = require("crypto");
const path = require("path");

require("dotenv").config();

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const rootDir = path.resolve(__dirname, "..");
const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT || 3000);
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const mongoDbName = process.env.MONGODB_DB || "kho_tai_lieu";
const visitorHashSalt = process.env.VISITOR_HASH_SALT || "kho-tai-lieu-visitor-counter";

let mongoClient;
let mongoDb;
let indexesReady = false;

app.set("trust proxy", true);
app.use(express.json({ limit: "64kb" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CORS_ORIGIN || "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }

  next();
});

async function getDb() {
  if (!mongoClient) {
    mongoClient = new MongoClient(mongoUri, {
      serverSelectionTimeoutMS: 5000
    });
    await mongoClient.connect();
    mongoDb = mongoClient.db(mongoDbName);
  }

  if (!indexesReady) {
    await Promise.all([
      mongoDb.collection("site_visitors").createIndex({ visitorHash: 1 }, { unique: true }),
      mongoDb.collection("site_visits").createIndex({ createdAt: -1 }),
      mongoDb.collection("file_visitors").createIndex({ filePath: 1, visitorHash: 1 }, { unique: true }),
      mongoDb.collection("file_visitors").createIndex({ filePath: 1 }),
      mongoDb.collection("file_visits").createIndex({ filePath: 1, createdAt: -1 }),
      mongoDb.collection("file_visits").createIndex({ fileName: 1, createdAt: -1 }),
      mongoDb.collection("file_visits").createIndex({ createdAt: -1 }),
      mongoDb.collection("device_sessions").createIndex({ id: 1 }, { unique: true }),
      mongoDb.collection("device_sessions").createIndex({ lastSeenAt: -1 }),
      mongoDb.collection("device_events").createIndex({ deviceId: 1, createdAt: -1 }),
      mongoDb.collection("device_events").createIndex({ createdAt: -1 })
    ]);
    await migrateUniqueCounters(mongoDb);
    indexesReady = true;
  }

  return mongoDb;
}

async function migrateUniqueCounters(db) {
  const meta = db.collection("app_meta");
  const migrationId = "counter_unique_migration_v1";
  const migrated = await meta.findOne({ _id: migrationId });

  if (migrated) {
    return;
  }

  const now = new Date();
  const [siteVisitors, fileVisitors] = await Promise.all([
    db.collection("site_visitors").find({}).toArray(),
    db.collection("file_visitors").find({}).toArray()
  ]);

  if (siteVisitors.length > 0) {
    await db.collection("site_visits").insertMany(siteVisitors.map(visitor => {
      const createdAt = visitor.firstSeen || now;
      const createdAtMs = createdAt instanceof Date ? createdAt.getTime() : new Date(createdAt).getTime();

      return {
        visitorHash: visitor.visitorHash,
        ip: "legacy",
        userAgent: "",
        createdAt,
        ...timeFields(createdAtMs),
        migratedFromUnique: true
      };
    }), { ordered: false });
  }

  if (fileVisitors.length > 0) {
    await db.collection("file_visits").insertMany(fileVisitors.map(visitor => {
      const createdAt = visitor.firstSeen || now;
      const createdAtMs = createdAt instanceof Date ? createdAt.getTime() : new Date(createdAt).getTime();

      return {
        filePath: visitor.filePath,
        visitorHash: visitor.visitorHash,
        ip: "legacy",
        userAgent: "",
        createdAt,
        ...timeFields(createdAtMs),
        migratedFromUnique: true
      };
    }), { ordered: false });
  }

  await meta.updateOne(
    { _id: migrationId },
    { $set: { _id: migrationId, migratedAt: now } },
    { upsert: true }
  );
}

function sendError(res, status, message, details) {
  res.status(status).json({
    error: message,
    ...(details ? { message: details } : {})
  });
}

function getClientIp(req) {
  const forwarded = String(req.headers["x-forwarded-for"] || "")
    .split(",")
    .map(value => value.trim())
    .filter(Boolean);
  const candidates = [
    req.headers["cf-connecting-ip"],
    ...forwarded,
    req.headers["x-real-ip"],
    req.ip,
    req.socket?.remoteAddress
  ];

  for (const candidate of candidates) {
    const value = String(candidate || "").trim();
    if (value) return value.replace(/^::ffff:/, "");
  }

  return "unknown";
}

function getVisitorHash(req) {
  return crypto
    .createHash("sha256")
    .update(`${getClientIp(req)}|${visitorHashSalt}`)
    .digest("hex");
}

function cleanText(value, maxLength = 120) {
  return String(value || "")
    .trim()
    .replace(/\s+/gu, " ")
    .slice(0, maxLength);
}

function cleanNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function validFilePath(filePath) {
  return filePath !== ""
    && !filePath.includes("..")
    && !filePath.includes("\\")
    && /^files\d*\/.+/u.test(filePath);
}

function isPrivateIp(ip) {
  if (ip === "unknown") return false;
  if (ip === "127.0.0.1" || ip === "::1") return true;
  if (/^10\./.test(ip)) return true;
  if (/^192\.168\./.test(ip)) return true;
  if (/^172\.(1[6-9]|2\d|3[0-1])\./.test(ip)) return true;
  if (/^169\.254\./.test(ip)) return true;
  if (/^(fc|fd)[0-9a-f]{2}:/i.test(ip)) return true;

  return false;
}

function cleanGeoPayload(payload) {
  const latitude = cleanNumber(payload.latitude);
  const longitude = cleanNumber(payload.longitude);

  if (
    latitude === null ||
    longitude === null ||
    latitude < -90 ||
    latitude > 90 ||
    longitude < -180 ||
    longitude > 180
  ) {
    return null;
  }

  const accuracy = cleanNumber(payload.accuracy);
  const address = cleanText(payload.address || payload.addressText || payload.locationAddress, 300);
  const coordinateText = `${latitude}, ${longitude}`;

  return {
    address: address || coordinateText,
    addressText: address || coordinateText,
    latitude,
    longitude,
    accuracy: accuracy === null ? "" : accuracy,
    mapUrl: cleanText(payload.mapUrl, 300) || `https://www.google.com/maps?q=${latitude},${longitude}`,
    locationSource: "browser_geolocation"
  };
}

function applyGeoFields(target, geoLocation) {
  if (!geoLocation) {
    return target;
  }

  return {
    ...target,
    ...geoLocation
  };
}

function estimateLocation(ip, payload) {
  const geoLocation = cleanGeoPayload(payload);
  if (geoLocation) return geoLocation.addressText;

  if (ip === "127.0.0.1" || ip === "::1") return "Localhost";
  if (isPrivateIp(ip)) return "Mang noi bo";

  const timezone = cleanText(payload.timezone, 80);
  if (timezone) return `${timezone} (uoc luong theo mui gio)`;

  return "Khong xac dinh";
}

function relativeTime(timestampMs) {
  const seconds = Math.max(0, Math.floor((Date.now() - timestampMs) / 1000));

  if (seconds < 60) return "Vua xong";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} phut truoc`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} gio truoc`;

  return `${Math.floor(seconds / 86400)} ngay truoc`;
}

function formatDate(timestampMs) {
  return new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(new Date(timestampMs));
}

function formatDateOnly(timestampMs) {
  return new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(timestampMs));
}

function formatTimeOnly(timestampMs) {
  return new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(new Date(timestampMs));
}

function timeFields(timestampMs) {
  return {
    createdAtMs: timestampMs,
    date: formatDateOnly(timestampMs),
    time: formatTimeOnly(timestampMs),
    dateTime: formatDate(timestampMs)
  };
}

function publicDevice(device) {
  const lastSeenAt = Number(device.lastSeenAt || Date.now());
  const loginTimeAt = Number(device.loginTimeAt || lastSeenAt);

  return {
    id: String(device.id || ""),
    user: String(device.user || "guest"),
    device: String(device.device || "Thiet bi khong ro"),
    deviceName: String(device.deviceName || device.device || "Thiet bi khong ro"),
    deviceLabel: String(device.deviceLabel || device.device || "Thiet bi khong ro"),
    os: String(device.os || "Khong ro"),
    browser: String(device.browser || "Khong ro"),
    platform: String(device.platform || ""),
    screen: String(device.screen || ""),
    viewport: String(device.viewport || ""),
    deviceMemory: device.deviceMemory || "",
    cpuCores: device.cpuCores || "",
    ip: String(device.ip || "unknown"),
    address: String(device.address || ""),
    addressText: String(device.addressText || device.address || ""),
    latitude: device.latitude ?? "",
    longitude: device.longitude ?? "",
    accuracy: device.accuracy ?? "",
    mapUrl: String(device.mapUrl || ""),
    locationSource: String(device.locationSource || ""),
    lastSeen: relativeTime(lastSeenAt),
    lastSeenDate: device.lastSeenDate || formatDateOnly(lastSeenAt),
    lastSeenTime: device.lastSeenTime || formatTimeOnly(lastSeenAt),
    lastSeenDateTime: device.lastSeenDateTime || formatDate(lastSeenAt),
    location: String(device.location || "Khong xac dinh"),
    loginTime: formatDate(loginTimeAt),
    loginDate: device.loginDate || formatDateOnly(loginTimeAt),
    loginTimeText: device.loginTimeText || formatTimeOnly(loginTimeAt),
    loginDateTime: device.loginDateTime || formatDate(loginTimeAt),
    token: String(device.token || ""),
    hits: Number(device.hits || 1),
    lastEvent: device.lastEvent || null,
    lastEventTime: device.lastEventAt ? formatDate(Number(device.lastEventAt)) : "",
    lastEventDate: device.lastEventDate || (device.lastEventAt ? formatDateOnly(Number(device.lastEventAt)) : ""),
    lastEventTimeText: device.lastEventTimeText || (device.lastEventAt ? formatTimeOnly(Number(device.lastEventAt)) : ""),
    lastEventDateTime: device.lastEventDateTime || (device.lastEventAt ? formatDate(Number(device.lastEventAt)) : "")
  };
}

function cleanEventPayload(payload) {
  const eventType = cleanText(payload.eventType || payload.action, 60);
  const targetUrl = cleanText(payload.targetUrl || payload.url || payload.href, 800);
  const targetText = cleanText(payload.targetText || payload.text, 200);
  const filePath = cleanText(payload.filePath || payload.file, 512);
  const fileName = cleanText(payload.fileName || payload.name || targetText, 260);

  if (!eventType && !targetUrl && !filePath) {
    return null;
  }

  return {
    eventType: eventType || "click",
    targetUrl,
    targetText,
    filePath,
    fileName,
    pageUrl: cleanText(payload.pageUrl, 800),
    referrer: cleanText(payload.referrer, 800)
  };
}

async function fetchCounts(db) {
  const [siteVisits, uniqueSiteVisitors, fileRows, uniqueFileRows, recentFileVisits] = await Promise.all([
    db.collection("site_visits").countDocuments(),
    db.collection("site_visitors").countDocuments(),
    db.collection("file_visits").aggregate([
      {
        $group: {
          _id: "$filePath",
          total: { $sum: 1 }
        }
      }
    ]).toArray(),
    db.collection("file_visitors").aggregate([
      {
        $group: {
          _id: "$filePath",
          total: { $sum: 1 }
        }
      }
    ]).toArray(),
    db.collection("file_visits")
      .find({}, {
        projection: {
          _id: 0,
          visitorHash: 0,
          userAgent: 0
        }
      })
      .sort({ createdAt: -1 })
      .limit(50)
      .toArray()
  ]);

  const fileVisitors = {};
  for (const row of fileRows) {
    fileVisitors[String(row._id)] = Number(row.total || 0);
  }

  const uniqueFileVisitors = {};
  for (const row of uniqueFileRows) {
    uniqueFileVisitors[String(row._id)] = Number(row.total || 0);
  }

  return {
    siteVisitors: siteVisits,
    siteVisits,
    uniqueSiteVisitors,
    fileVisitors,
    fileVisits: fileVisitors,
    uniqueFileVisitors,
    recentFileVisits: recentFileVisits.map(visit => ({
      fileName: String(visit.fileName || ""),
      filePath: String(visit.filePath || ""),
      date: String(visit.date || ""),
      time: String(visit.time || ""),
      dateTime: String(visit.dateTime || ""),
      ip: String(visit.ip || ""),
      address: String(visit.address || ""),
      mapUrl: String(visit.mapUrl || "")
    })),
    clicks: fileVisitors
  };
}

app.get("/api/health", async (req, res) => {
  try {
    const db = await getDb();
    await db.command({ ping: 1 });
    res.json({ ok: true, database: mongoDbName });
  } catch (error) {
    sendError(res, 500, "Database connection failed", error.message);
  }
});

async function getFileClicks(req, res) {
  try {
    const db = await getDb();
    res.json(await fetchCounts(db));
  } catch (error) {
    sendError(res, 500, "Database connection failed", error.message);
  }
}

async function postFileClicks(req, res) {
  const payload = req.body && typeof req.body === "object" ? req.body : {};
  const type = cleanText(payload.type, 20);
  const file = cleanText(payload.file, 512);
  const fileName = cleanText(payload.fileName || payload.name || file.split("/").pop(), 260);

  if (type !== "site" && type !== "file") {
    sendError(res, 400, "Invalid type");
    return;
  }

  if (type === "file" && !validFilePath(file)) {
    sendError(res, 400, "Invalid file");
    return;
  }

  try {
    const db = await getDb();
    const visitorHash = getVisitorHash(req);
    const now = new Date();
    const nowMs = now.getTime();
    const geoLocation = cleanGeoPayload(payload);
    const visit = applyGeoFields({
      visitorHash,
      ip: getClientIp(req),
      userAgent: cleanText(req.headers["user-agent"], 300),
      createdAt: now,
      ...timeFields(nowMs)
    }, geoLocation);

    if (type === "site") {
      await Promise.all([
        db.collection("site_visits").insertOne(visit),
        db.collection("site_visitors").updateOne(
          { visitorHash },
          { $setOnInsert: { visitorHash, firstSeen: now } },
          { upsert: true }
        )
      ]);
    }

    if (type === "file") {
      const uniqueFileUpdate = {
        $setOnInsert: { filePath: file, visitorHash, firstSeen: now }
      };

      if (fileName) {
        uniqueFileUpdate.$set = { fileName };
      }

      await Promise.all([
        db.collection("file_visits").insertOne({
          ...visit,
          filePath: file,
          fileName
        }),
        db.collection("file_visitors").updateOne(
          { filePath: file, visitorHash },
          uniqueFileUpdate,
          { upsert: true }
        )
      ]);
    }

    const counts = await fetchCounts(db);
    res.json({
      ...counts,
      file,
      fileName,
      count: type === "site" ? counts.siteVisitors : (counts.fileVisitors[file] || 0)
    });
  } catch (error) {
    sendError(res, 500, "Database write failed", error.message);
  }
}

app.get(["/api/file-clicks", "/api/file-clicks.php"], getFileClicks);
app.post(["/api/file-clicks", "/api/file-clicks.php"], postFileClicks);

async function getDeviceSessions(req, res) {
  try {
    const db = await getDb();
    const devices = await db.collection("device_sessions")
      .find({})
      .sort({ lastSeenAt: -1 })
      .toArray();

    res.json({
      devices: devices.map(publicDevice),
      total: devices.length
    });
  } catch (error) {
    sendError(res, 500, "Cannot load devices", error.message);
  }
}

async function postDeviceSessions(req, res) {
  const payload = req.body && typeof req.body === "object" ? req.body : {};
  let sessionId = cleanText(payload.sessionId, 180);

  if (!sessionId) {
    sessionId = `sess_${crypto.randomBytes(16).toString("hex")}`;
  }

  const id = crypto.createHash("sha256").update(sessionId).digest("hex");
  const now = Date.now();
  const ip = getClientIp(req);
  const userAgent = cleanText(req.headers["user-agent"] || payload.userAgent, 300);

  try {
    const db = await getDb();
    const existing = await db.collection("device_sessions").findOne({ id });
    const eventPayload = cleanEventPayload(payload);
    const deviceName = cleanText(payload.deviceName, 120) || "Thiet bi khong ro";
    const deviceLabel = cleanText(payload.deviceLabel, 240) || deviceName;
    const loginTimeAt = Number(existing?.loginTimeAt || now);
    const geoLocation = cleanGeoPayload(payload);
    const device = applyGeoFields({
      id,
      user: cleanText(payload.user, 80) || "guest",
      device: deviceLabel,
      deviceName,
      deviceLabel,
      os: cleanText(payload.os, 80) || "Khong ro",
      browser: cleanText(payload.browser, 80) || "Khong ro",
      platform: cleanText(payload.platform, 120),
      screen: cleanText(payload.screen, 80),
      viewport: cleanText(payload.viewport, 80),
      deviceMemory: cleanText(payload.deviceMemory, 30),
      cpuCores: cleanText(payload.cpuCores, 30),
      ip,
      location: estimateLocation(ip, payload),
      loginTimeAt,
      loginDate: formatDateOnly(loginTimeAt),
      loginTimeText: formatTimeOnly(loginTimeAt),
      loginDateTime: formatDate(loginTimeAt),
      lastSeenAt: now,
      lastSeenDate: formatDateOnly(now),
      lastSeenTime: formatTimeOnly(now),
      lastSeenDateTime: formatDate(now),
      token: sessionId,
      userAgent,
      language: cleanText(payload.language, 30),
      timezone: cleanText(payload.timezone, 80),
      hits: Number(existing?.hits || 0) + 1
    }, geoLocation);

    if (eventPayload) {
      device.lastEvent = eventPayload;
      device.lastEventAt = now;
      device.lastEventDate = formatDateOnly(now);
      device.lastEventTimeText = formatTimeOnly(now);
      device.lastEventDateTime = formatDate(now);
    }

    await db.collection("device_sessions").updateOne(
      { id },
      { $set: device, $setOnInsert: { createdAt: new Date(now) } },
      { upsert: true }
    );

    if (eventPayload) {
      await db.collection("device_events").insertOne({
        ...eventPayload,
        deviceId: id,
        ip,
        ...(geoLocation || {}),
        user: device.user,
        device: device.device,
        deviceName: device.deviceName,
        deviceLabel: device.deviceLabel,
        os: device.os,
        browser: device.browser,
        platform: device.platform,
        screen: device.screen,
        viewport: device.viewport,
        deviceMemory: device.deviceMemory,
        cpuCores: device.cpuCores,
        userAgent,
        language: device.language,
        timezone: device.timezone,
        createdAt: new Date(now),
        ...timeFields(now)
      });
    }

    res.json({
      ok: true,
      device: publicDevice(device),
      eventSaved: Boolean(eventPayload)
    });
  } catch (error) {
    sendError(res, 500, "Cannot save device", error.message);
  }
}

app.get(["/api/device-sessions", "/api/device-sessions.php"], getDeviceSessions);
app.post(["/api/device-sessions", "/api/device-sessions.php"], postDeviceSessions);

async function getDeviceEvents(req, res) {
  const requestedLimit = Number.parseInt(String(req.query.limit || "100"), 10);
  const limit = Number.isFinite(requestedLimit)
    ? Math.min(Math.max(requestedLimit, 1), 200)
    : 100;

  try {
    const db = await getDb();
    const events = await db.collection("device_events")
      .find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();

    res.json({
      events: events.map(event => ({
        id: String(event._id),
        deviceId: String(event.deviceId || ""),
        user: String(event.user || "guest"),
        device: String(event.device || "Thiet bi khong ro"),
        deviceName: String(event.deviceName || event.device || "Thiet bi khong ro"),
        deviceLabel: String(event.deviceLabel || event.device || "Thiet bi khong ro"),
        os: String(event.os || "Khong ro"),
        browser: String(event.browser || "Khong ro"),
        platform: String(event.platform || ""),
        screen: String(event.screen || ""),
        viewport: String(event.viewport || ""),
        deviceMemory: event.deviceMemory || "",
        cpuCores: event.cpuCores || "",
        ip: String(event.ip || "unknown"),
        address: String(event.address || ""),
        addressText: String(event.addressText || event.address || ""),
        latitude: event.latitude ?? "",
        longitude: event.longitude ?? "",
        accuracy: event.accuracy ?? "",
        mapUrl: String(event.mapUrl || ""),
        locationSource: String(event.locationSource || ""),
        eventType: String(event.eventType || "click"),
        targetUrl: String(event.targetUrl || ""),
        targetText: String(event.targetText || ""),
        filePath: String(event.filePath || ""),
        fileName: String(event.fileName || event.targetText || ""),
        pageUrl: String(event.pageUrl || ""),
        date: event.date || (event.createdAtMs ? formatDateOnly(Number(event.createdAtMs)) : ""),
        time: event.time || (event.createdAtMs ? formatTimeOnly(Number(event.createdAtMs)) : ""),
        dateTime: event.dateTime || (event.createdAtMs ? formatDate(Number(event.createdAtMs)) : "")
      })),
      total: events.length
    });
  } catch (error) {
    sendError(res, 500, "Cannot load device events", error.message);
  }
}

app.get("/api/device-events", getDeviceEvents);

app.use((req, res, next) => {
  const blockedPaths = [
    "/package.json",
    "/package-lock.json",
    "/database.sql"
  ];

  if (
    blockedPaths.includes(req.path) ||
    req.path.startsWith("/server/") ||
    req.path.startsWith("/node_modules/") ||
    req.path === "/api/db.php"
  ) {
    sendError(res, 404, "Not found");
    return;
  }

  next();
});

app.use(express.static(rootDir, {
  dotfiles: "ignore"
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    next(error);
    return;
  }

  sendError(res, 400, "Invalid request", error.message);
});

app.use((req, res) => {
  sendError(res, 404, "Not found");
});

process.on("SIGINT", async () => {
  if (mongoClient) {
    await mongoClient.close();
  }
  process.exit(0);
});

app.listen(port, host, () => {
  console.log(`Kho Tai Lieu backend running at http://${host}:${port}`);
});
