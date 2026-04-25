const documents = [
  {
    id: 1,
    title: "Triết học Mác - Lênin",
    description: "Đề cương, câu hỏi ôn tập và trắc nghiệm cuối kỳ.",
    types: ["pdf", "word"],
    category: "Khác",
    date: "2026-04-20",
    icon: "📘",
    files: [
      { name: "Triết học Mác - Lênin", path: "files/triet.pdf" },
      { name: "300 câu hỏi ôn tập", path: "files/300 CÂU HỎI.pdf" },
      { name: "Câu hỏi ôn tập", path: "files/CÂU HỎI ÔN TẬP.pdf" },
      { name: "Trắc nghiệm", path: "files/TRẮC NGHIỆM (1).pdf" },
      { name: "Trắc nghiệm KTCT 14 chủ đề", path: "files/TRAC NGHIEM KTCT (14 CHỦ ĐỀ - 206C).docx" },
      { name: "Ôn tập TN", path: "files/ÔN TẬP TN.pdf" }
    ]
  },
  {
    id: 2,
    title: "Kinh tế vi mô",
    description: "Tổng hợp tài liệu kinh tế vi mô theo từng chương.",
    types: ["pdf"],
    category: "Kinh tế",
    date: "2026-04-18",
    icon: "📗",
    files: [
      { name: "Micro chương 1", path: "files/MICRO_CHUONG 1.pdf" },
      { name: "Micro chương 2", path: "files/MICRO_CHUONG 2.pdf" },
      { name: "Micro chương 3", path: "files/MICRO_CHUONG 3.pdf" },
      { name: "Micro chương 4", path: "files/MICRO_CHUONG 4.pdf" },
      { name: "Micro chương 5", path: "files/MICRO_CHUONG 5.pdf" },
      { name: "Micro chương 6", path: "files/MICRO_CHUONG 6.pdf" },
      { name: "Micro chương 7", path: "files/MICRO_CHUONG 7.pdf" },
      { name: "Micro chương 8", path: "files/MICRO_CHUONG 8.pdf" }
    ]
  },
  {
    id: 3,
    title: "ASEAN",
    description: "Tổng hợp bài học, trắc nghiệm và đáp án ASEAN.",
    types: ["pdf", "word"],
    category: "Logistics",
    date: "2026-04-17",
    icon: "📦",
    files: [
      { name: "ASEAN câu 1-10", path: "files/ASEAN 1-10.docx" },
      { name: "ASEAN câu 11-20", path: "files/ASEAN 11-20.docx" },
      { name: "ASEAN câu 21-30", path: "files/ASEAN 21-30.docx" },
      { name: "ASEAN câu 31-40", path: "files/ASEAN 31-40.docx" },
      { name: "ASEAN trắc nghiệm", path: "files/ASEAN TRẮC NGHIỆM.pdf" },
      { name: "ASEAN trắc nghiệm bổ sung", path: "files/ASEAN TRẮC NGHIỆM(1).pdf" },
      { name: "ASEAN tổng hợp", path: "files/ASEAN.docx" },
      { name: "Đáp án ASEAN chuẩn", path: "files/Đáp án ASEAN Chuẩn.docx" },
      { name: "Ôn tập cuối kỳ và đáp án ASEAN", path: "files/ÔN-TẬP-CUỐI-KỲ-và-Đáp-án-ASEAN-14072022-Chuẩn.pdf" },
      { name: "Trả lời ASEAN", path: "files/TRẢ LỜI.docx" }
    ]
  }
];

const typeLabels = {
  pdf: "PDF",
  word: "Word"
};

const visitorApiUrl = "api/file-clicks.php";
const itemsPerPage = 6;
let currentPage = 1;
let currentType = "all";
let currentCategory = "all";
let currentKeyword = "";
let siteVisitorTotal = 0;
let fileVisitorCounts = {};
let useSharedVisitorCounts = false;

const documentGrid = document.getElementById("documentGrid");
const pagination = document.getElementById("pagination");
const resultCount = document.getElementById("resultCount");
const searchInput = document.getElementById("searchInput");
const siteVisitorCount = document.getElementById("siteVisitorCount");

const modal = document.getElementById("previewModal");
const closeModal = document.getElementById("closeModal");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalType = document.getElementById("modalType");
const modalCategory = document.getElementById("modalCategory");
const modalSize = document.getElementById("modalSize");

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function getTypeLabel(doc) {
  return doc.types.map(type => typeLabels[type] || type.toUpperCase()).join(" / ");
}

function getFileExtension(path) {
  return path.split(".").pop().toLowerCase();
}

function getFileIcon(path) {
  const extension = getFileExtension(path);

  if (extension === "pdf") return "📄";
  if (["doc", "docx"].includes(extension)) return "📝";
  if (["ppt", "pptx"].includes(extension)) return "📊";

  return "📁";
}

function applyVisitorStats(stats) {
  siteVisitorTotal = Number(stats.siteVisitors) || 0;
  fileVisitorCounts = stats.fileVisitors || stats.clicks || {};
  updateSiteVisitorCount();
}

function updateSiteVisitorCount() {
  if (siteVisitorCount) {
    siteVisitorCount.textContent = `${siteVisitorTotal} người truy cập`;
  }
}

function getFileVisitorCount(file) {
  const count = Number(fileVisitorCounts[file.path]);

  return Number.isFinite(count) && count > 0 ? Math.floor(count) : 0;
}

async function loadVisitorCounts() {
  if (window.location.protocol === "file:") {
    return false;
  }

  try {
    const response = await fetch(visitorApiUrl, {
      cache: "no-store",
      headers: {
        "Accept": "application/json"
      }
    });

    if (!response.ok) throw new Error("Không tải được lượt truy cập");

    const data = await response.json();
    applyVisitorStats(data);

    return true;
  } catch {
    return false;
  }
}

async function recordSiteVisit() {
  if (!useSharedVisitorCounts) {
    return siteVisitorTotal;
  }

  try {
    const response = await fetch(visitorApiUrl, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ type: "site" })
    });

    if (!response.ok) throw new Error("Không cập nhật được lượt truy cập web");

    const data = await response.json();
    applyVisitorStats(data);

    return siteVisitorTotal;
  } catch {
    useSharedVisitorCounts = false;
    return siteVisitorTotal;
  }
}

async function recordFileVisit(file) {
  if (!useSharedVisitorCounts) {
    return getFileVisitorCount(file);
  }

  try {
    const response = await fetch(visitorApiUrl, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ type: "file", file: file.path })
    });

    if (!response.ok) throw new Error("Không cập nhật được lượt truy cập file");

    const data = await response.json();
    applyVisitorStats(data);

    return getFileVisitorCount(file);
  } catch {
    useSharedVisitorCounts = false;
    return getFileVisitorCount(file);
  }
}

function getFilteredDocuments() {
  const keyword = normalizeText(currentKeyword.trim());

  return documents.filter(doc => {
    const matchType = currentType === "all" || doc.types.includes(currentType);
    const matchCategory = currentCategory === "all" || doc.category === currentCategory;
    const searchableText = [
      doc.title,
      doc.description,
      doc.category,
      getTypeLabel(doc),
      ...doc.files.flatMap(file => [file.name, file.path])
    ].join(" ");
    const matchKeyword = !keyword || normalizeText(searchableText).includes(keyword);

    return matchType && matchCategory && matchKeyword;
  });
}

function renderDocuments() {
  const filtered = getFilteredDocuments();
  resultCount.textContent = `${filtered.length} nhóm tài liệu`;

  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  if (currentPage > totalPages) currentPage = 1;

  const start = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  if (paginated.length === 0) {
    documentGrid.innerHTML = `
      <div class="empty-box">
        <h3>Không tìm thấy nhóm tài liệu</h3>
        <p>Hãy thử từ khóa hoặc bộ lọc khác.</p>
      </div>
    `;
  } else {
    documentGrid.innerHTML = paginated.map(doc => `
      <div class="doc-card">
        <div class="doc-thumb" aria-hidden="true">${doc.icon}</div>
        <div class="doc-body">
          <div class="doc-title">${escapeHtml(doc.title)}</div>
          <div class="doc-desc">${escapeHtml(doc.description)}</div>

          <div class="doc-meta">
            <span>${escapeHtml(getTypeLabel(doc))}</span>
            <span>${escapeHtml(doc.category)}</span>
            <span>${doc.files.length} file</span>
          </div>

          <div class="doc-actions">
            <button class="doc-btn" type="button" onclick="openPreview(${doc.id})">Xem danh sách</button>
          </div>
        </div>
      </div>
    `).join("");
  }

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  pagination.innerHTML = "";

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <button class="page-btn ${i === currentPage ? "active" : ""}" type="button" onclick="goToPage(${i})">${i}</button>
    `;
  }
}

function goToPage(page) {
  currentPage = page;
  renderDocuments();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openPreview(id, selectedIndex) {
  const doc = documents.find(item => item.id === id);
  if (!doc) return;
  const firstPreviewIndex = doc.files.findIndex(file => getFileExtension(file.path) === "pdf");
  const defaultIndex = firstPreviewIndex >= 0 ? firstPreviewIndex : 0;
  const activeIndex = Number.isInteger(selectedIndex) && doc.files[selectedIndex] ? selectedIndex : defaultIndex;

  modalIcon.textContent = doc.icon;
  modalTitle.textContent = doc.title;
  modalType.textContent = getTypeLabel(doc);
  modalCategory.textContent = doc.category;
  modalSize.textContent = `${doc.files.length} file`;

  modalDesc.innerHTML = `
    <div class="preview-layout">
      <section class="file-preview-panel" aria-live="polite">
        ${renderFilePreview(doc.files[activeIndex])}
      </section>

      <div class="file-list-wrap">
        <div class="file-list-head">
          <strong>Danh sách file</strong>
        </div>
        <div class="file-list">
          ${doc.files.map((file, index) => `
            <div class="file-item ${index === activeIndex ? "active" : ""}" data-preview-item="${index}" onclick="selectPreviewFile(${doc.id}, ${index})">
              <div class="file-item-left">
                <div class="file-item-icon" aria-hidden="true">${getFileIcon(file.path)}</div>
                <div class="file-item-info">
                  <div class="file-item-name">${index + 1}. ${escapeHtml(file.name)}</div>
                  <div class="file-item-clicks" data-click-count="${index}">${getFileVisitorCount(file)} người truy cập</div>
                </div>
              </div>
              <div class="file-item-actions">
                <button class="mini-btn primary" type="button" onclick="selectPreviewFile(${doc.id}, ${index}, event)">Xem trước</button>
                <button class="mini-btn secondary" type="button" onclick="openFileFromList(${doc.id}, ${index}, event)">Mở file</button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;

  modal.classList.add("show");
  recordInitialPreviewFile(doc.id, activeIndex);
}

function renderFilePreview(file) {
  const extension = getFileExtension(file.path);
  const encodedPath = escapeHtml(encodeURI(file.path));
  const safeName = escapeHtml(file.name);
  const visitorCount = getFileVisitorCount(file);

  if (extension === "pdf") {
    return `
      <div class="file-preview-head">
        <span>${getFileIcon(file.path)}</span>
        <strong>${safeName}</strong>
        <span class="file-preview-count">${visitorCount} người truy cập</span>
      </div>
      <iframe class="file-preview-frame" src="${encodedPath}#toolbar=0" title="Xem trước ${safeName}"></iframe>
    `;
  }

  return `
    <div class="file-preview-empty">
      <div class="file-preview-empty-icon">${getFileIcon(file.path)}</div>
      <h4>${safeName}</h4>
      <span class="file-preview-count">${visitorCount} người truy cập</span>
      <p>File Word chưa hỗ trợ xem trước trực tiếp trên trình duyệt nên đã chặn mở link để tránh tự động tải về.</p>
    </div>
  `;
}

function renderFileOpenBlocked(file) {
  const safeName = escapeHtml(file.name);
  const visitorCount = getFileVisitorCount(file);

  return `
    <div class="file-preview-empty">
      <div class="file-preview-empty-icon">${getFileIcon(file.path)}</div>
      <h4>${safeName}</h4>
      <span class="file-preview-count">${visitorCount} người truy cập</span>
      <p>File Word không mở trực tiếp trong trình duyệt. Mình đã chặn thao tác này để tránh tự động tải về.</p>
    </div>
  `;
}

async function selectPreviewFile(docId, fileIndex, event) {
  if (event) {
    event.stopPropagation();
  }

  const doc = documents.find(item => item.id === docId);
  const file = doc?.files[fileIndex];
  const previewPanel = modalDesc.querySelector(".file-preview-panel");

  if (!file || !previewPanel) return;

  const visitorCount = await recordFileVisit(file);

  previewPanel.innerHTML = renderFilePreview(file);
  modalDesc.querySelectorAll(".file-item").forEach(item => item.classList.remove("active"));
  modalDesc.querySelector(`[data-preview-item="${fileIndex}"]`)?.classList.add("active");
  const clickCountEl = modalDesc.querySelector(`[data-click-count="${fileIndex}"]`);
  if (clickCountEl) {
    clickCountEl.textContent = `${visitorCount} người truy cập`;
  }
}

async function recordInitialPreviewFile(docId, fileIndex) {
  const doc = documents.find(item => item.id === docId);
  const file = doc?.files[fileIndex];
  const previewPanel = modalDesc.querySelector(".file-preview-panel");

  if (!file || !previewPanel) return;

  const visitorCount = await recordFileVisit(file);
  const activeItem = modalDesc.querySelector(".file-item.active");

  if (activeItem?.dataset.previewItem !== String(fileIndex)) return;

  previewPanel.innerHTML = renderFilePreview(file);

  const visitorCountEl = modalDesc.querySelector(`[data-click-count="${fileIndex}"]`);
  if (visitorCountEl) {
    visitorCountEl.textContent = `${visitorCount} người truy cập`;
  }
}

async function openFileFromList(docId, fileIndex, event) {
  if (event) {
    event.stopPropagation();
  }

  const doc = documents.find(item => item.id === docId);
  const file = doc?.files[fileIndex];
  const previewPanel = modalDesc.querySelector(".file-preview-panel");

  if (!file || !previewPanel) return;

  const extension = getFileExtension(file.path);
  const popup = extension === "pdf" ? window.open(encodeURI(file.path), "_blank") : null;
  const visitorCount = await recordFileVisit(file);

  modalDesc.querySelectorAll(".file-item").forEach(item => item.classList.remove("active"));
  modalDesc.querySelector(`[data-preview-item="${fileIndex}"]`)?.classList.add("active");

  const clickCountEl = modalDesc.querySelector(`[data-click-count="${fileIndex}"]`);
  if (clickCountEl) {
    clickCountEl.textContent = `${visitorCount} người truy cập`;
  }

  if (extension === "pdf") {
    previewPanel.innerHTML = renderFilePreview(file);
    if (!popup) {
      window.open(encodeURI(file.path), "_blank");
    }
    return;
  }

  previewPanel.innerHTML = renderFileOpenBlocked(file);
}

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(item => item.classList.remove("active"));
    btn.classList.add("active");
    currentType = btn.dataset.type;
    currentPage = 1;
    renderDocuments();
  });
});

document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".category-btn").forEach(item => item.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    currentPage = 1;
    renderDocuments();
  });
});

searchInput.addEventListener("input", event => {
  currentKeyword = event.target.value;
  currentPage = 1;
  renderDocuments();
});

async function initApp() {
  renderDocuments();

  useSharedVisitorCounts = await loadVisitorCounts();
  if (useSharedVisitorCounts) {
    await recordSiteVisit();
  } else if (siteVisitorCount) {
    siteVisitorCount.textContent = "Bộ đếm chưa kết nối";
  }

  renderDocuments();
}

initApp();
