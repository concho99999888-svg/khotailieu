# Kho Tai Lieu

Website kho tai lieu HTML/CSS/JS co backend Node.js + MongoDB de luu:

- Luot truy cap website theo visitor duy nhat.
- Luot xem tung file theo visitor duy nhat.
- Phien thiet bi truy cap website.

## Chuan bi

Can cai san:

- Node.js 20 tro len.
- MongoDB local, hoac MongoDB Atlas URI.

Tao file `.env` tu `.env.example`:

```bash
copy .env.example .env
```

Sua `MONGODB_URI` neu ban dung MongoDB Atlas.

## Cai dependency

```bash
npm install
```

## Chay local

```bash
npm run dev
```

Mo:

```text
http://127.0.0.1:3000
```

Mo bang dien thoai cung Wi-Fi:

1. Xem IPv4 tren laptop:

```bash
ipconfig
```

2. Mo tren dien thoai bang IP laptop, vi du:

```text
http://192.168.1.25:3000
```

Neu khong vao duoc, cho phep Node.js qua Windows Firewall hoac doi Wi-Fi sang cung mang.

Kiem tra backend:

```text
http://127.0.0.1:3000/api/health
http://127.0.0.1:3000/api/file-clicks
http://127.0.0.1:3000/api/device-sessions
```

## Cau hinh MongoDB

Mac dinh app dung:

```text
mongodb://127.0.0.1:27017
database: kho_tai_lieu
```

Neu deploy len Render/Railway/VPS, dat bien moi truong:

```text
MONGODB_URI=<mongo-uri-cua-ban>
MONGODB_DB=kho_tai_lieu
VISITOR_HASH_SALT=<chuoi-bi-mat>
```

## API

`GET /api/file-clicks`

Tra ve tong luot truy cap va luot xem file.

Trong do:

```text
siteVisitors / siteVisits: tong so lan vao web
fileVisitors / fileVisits: tong so lan mo tung file
uniqueSiteVisitors: so visitor web khong trung theo IP
uniqueFileVisitors: so visitor tung file khong trung theo IP
recentFileVisits: 50 luot mo file gan nhat, gom ten file va thoi gian cu the
```

Moi ban ghi trong `site_visits`, `file_visits`, `device_sessions`, `device_events` deu co them ngay gio:

```text
date
time
dateTime
createdAt / createdAtMs
```

Voi luot mo file, ban ghi trong `file_visits` co them:

```text
fileName
filePath
date
time
dateTime
```

Neu trinh duyet cho phep chia se vi tri, backend se luu them dia chi/ban do:

```text
address
addressText
latitude
longitude
accuracy
mapUrl
locationSource
```

Luu y: vi tri trinh duyet chi hoat dong khi nguoi dung bam cho phep va trang chay tren HTTPS hoac localhost. Khi mo bang IP LAN `http://192.168.x.x:3000`, nhieu trinh duyet se chan lay vi tri.

`POST /api/file-clicks`

Body:

```json
{ "type": "site" }
```

Hoac:

```json
{ "type": "file", "file": "files/triet.pdf" }
```

`GET /api/device-sessions`

Tra ve danh sach thiet bi.

`POST /api/device-sessions`

Frontend tu dong goi API nay khi nguoi dung vao web va khi nguoi dung bam link/file.

`GET /api/device-events`

Tra ve log cac link/file da duoc bam gan nhat. Co the gioi han:

```text
/api/device-events?limit=50
```

## Dua len GitHub

```bash
git add .gitignore .env.example README.md index.html package.json package-lock.json server/index.js script.js
git commit -m "Add MongoDB backend"
git push origin master
```

Khong commit file `.env` vi co thong tin rieng.
