function createFileFromPath(path) {
  const fileName = path.split("/").pop();
  const name = fileName.replace(/\.[^.]+$/, "");

  return { name, path };
}

function createDocumentFromPaths(id, title, paths) {
  return {
    id,
    title,
    icon: "📦",
    files: paths.map(createFileFromPath)
  };
}

const documents = [
  {
    id: 1,
    title: "Triết học Mác - Lênin",
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
  },
  {
    id: 4,
    title: "LỊCH SỬ ĐẢNG",
    icon: "📦",
    files: [
      { name: "81 CÂU LỊCH SỬ ĐẢNG", path: "files1/lsd.pdf" },
      { name: "83 CÂU LỊCH SỬ ĐẢNG", path: "files1/lsd1.pdf" },
    ]
  },
  {
    id: 5,
    title: "KINH TẾ VĨ MÔ",
    icon: "📦",
    files: [
      { name: "CÂU HỎI LÍ THUYẾT-VĨ MÔ", path: "files2/CÂU HỎI LÝ THUYẾT - VĨ MÔ.pdf" },
      { name: "ÔN KINH KẾ VĨ MÔ full_2024", path: "files2/ÔN KINH TẾ VĨ MÔ full _ 2024.pdf" },
    ]
  },
  {
    id: 6,
    title: "PLDC",
    icon: "📦",
    files: [
      { name: "CÂU HỎI TN PLĐC", path: "files2/CÂU HỎI TN PLĐC.docx" }
    ]
  },
  {
    id: 7,
    title: "THỐNG KÊ UD",
    icon: "📦",
    files: [
      { name: "IMG_0723", path: "files3/THỐNG KÊ UD/IMG_0723.JPG" },
      { name: "IMG_0724", path: "files3/THỐNG KÊ UD/IMG_0724.JPG" },
      { name: "TKUD", path: "files3/THỐNG KÊ UD/TKUD (1).docx" },
      { name: "ĐỀ TKUD THAM KHẢO", path: "files3/THỐNG KÊ UD/ĐỀ TKUD THAM KHẢO (1).pdf" },
      { name: "Đề thi tham khảo", path: "files3/THỐNG KÊ UD/Đề thi tham khảo.png" },
      { name: "Slide bài giảng TKUD chương 6", path: "files3/THỐNG KÊ UD/BÀI GIẢNG/VHU - Slide bài giảng - TKUD - Chương 6.zip" },
      { name: "Slide bài giảng TKUD chương 7", path: "files3/THỐNG KÊ UD/BÀI GIẢNG/VHU - Slide bài giảng - TKUD - Chương 7.zip" },
      { name: "Slide bài giảng TKUD chương 4", path: "files3/THỐNG KÊ UD/BÀI GIẢNG/VHU_Slide-bai-giang TKUD  - Chương 4.pdf" },
      { name: "Slide bài giảng TKUD chương 1", path: "files3/THỐNG KÊ UD/BÀI GIẢNG/VHU_Slide-bai-giang TKUD - Chương 1 .pdf" },
      { name: "Slide bài giảng TKUD chương 2", path: "files3/THỐNG KÊ UD/BÀI GIẢNG/VHU_Slide-bai-giang TKUD - Chương 2.pdf" },
      { name: "Slide bài giảng TKUD chương 3", path: "files3/THỐNG KÊ UD/BÀI GIẢNG/VHU_Slide-bai-giang TKUD - Chương 3.pdf" },
      { name: "Slide bài giảng TKUD chương 5", path: "files3/THỐNG KÊ UD/BÀI GIẢNG/VHU_Slide-bai-giang TKUD - Chương 5.pdf" }
    ]
  },
  {
    id: 8,
    title: "TƯ TƯỞNG HCM",
    icon: "📦",
    files: [
      { name: "Trắc Nghiệm Ôn Tập Tư Tưởng Hồ Chí Minh", path: "files4/TƯ TƯỞNG HCM/Trắc Nghiệm Ôn Tập Tư Tưởng Hồ Chí Minh.docx" },
      { name: "TƯ TƯỞNG HCM 1", path: "files4/TƯ TƯỞNG HCM/TƯ TƯỞNG HCM 1.docx" },
      { name: "TƯ TƯỞNG HCM - TÀI LIỆU", path: "files4/TƯ TƯỞNG HCM/TƯ TƯỞNG HCM- TÀI LIỆU.pdf" },
      { name: "TƯ TƯỞNG HCM", path: "files4/TƯ TƯỞNG HCM/TƯ TƯỞNG HCM.docx" },
      { name: "TƯƠNG TƯỞNG HCM", path: "files4/TƯ TƯỞNG HCM/TƯƠNG TƯỞNG HCM.docx" },
      { name: "HCM tự soạn", path: "files4/TƯ TƯỞNG HCM/TỰ SOẠN/HCM.docx" },
      { name: "ÔN TTHCM", path: "files4/TƯ TƯỞNG HCM/TỰ SOẠN/ÔNTTHCM.pdf" },
      { name: "TTHCM - TN", path: "files4/TƯ TƯỞNG HCM/TỰ SOẠN/TTHCM - TN.docx" },
      { name: "Đáp án trắc nghiệm TTHCM", path: "files4/TƯ TƯỞNG HCM/TỰ SOẠN/Đáp án trắc nghiệm TTHCM.docx" }
    ]
  },
  {
    id: 9,
    title: "KINH TẾ CHÍNH TRỊ",
    icon: "📦",
    files: [
      { name: "CÂU HỎI", path: "files5/KINH TẾ CHÍNH TRỊ/CÂU HỎI.pdf" },
      { name: "Mục lục KTCT", path: "files5/KINH TẾ CHÍNH TRỊ/Mục lục KTCT.docx" },
      { name: "ÔN TẬP KTCT", path: "files5/KINH TẾ CHÍNH TRỊ/ÔN TẬP KTCT.docx" },
      { name: "ÔN TẬP MÔN KINH TẾ CHÍNH TRỊ", path: "files5/KINH TẾ CHÍNH TRỊ/ÔN TẬP MÔN KINH TẾ CHÍNH TRỊ.docx" },
      { name: "Hình chép bài 1", path: "files5/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816553236_d4b9426475d7ba9967279cdb96950cd2.jpg" },
      { name: "Hình chép bài 2", path: "files5/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816556616_a2b593d769c3da5ec6b0a51f38cccc96.jpg" },
      { name: "Hình chép bài 3", path: "files5/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816557691_8446e211aa8bf05da04e329b733dba24.jpg" },
      { name: "Hình chép bài 4", path: "files5/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816559620_be94b63443039792e4ba437158583853.jpg" },
      { name: "Hình chép bài 5", path: "files5/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816561418_5b142fb27c1d83f48110f998656b246d.jpg" },
      { name: "Hình chép bài 6", path: "files5/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816563197_f90265fe129743a231c0ad7005985b38.jpg" },
      { name: "Hình chép bài 7", path: "files5/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816565915_4df1ae467045152edb3c0702bd491591.jpg" },
      { name: "Hình chép bài 8", path: "files5/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816568442_deebd4498984629cb9aa58d878b62ca7.jpg" },
      { name: "Hình chép bài 9", path: "files5/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816571245_24f86d67283af97065748b658101fe4b.jpg" },
      { name: "Hình chép bài 10", path: "files5/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816572229_8a2c8785cd98793898d2e3f6358deeea.jpg" }
    ]
  },
  {
    id: 29,
    title: "KỸ NĂNG MỀM",
    icon: "📦",
    files: [
      "files7/KỸ NĂNG MỀM/201 Cách Cư Xử Với Người Trái Tính.pdf",
      "files7/KỸ NĂNG MỀM/64 câu hỏi phỏng vấn và trả lời.docx",
      "files7/KỸ NĂNG MỀM/7 thói quen của bạn trẻ thành công.pdf",
      "files7/KỸ NĂNG MỀM/Bí mật cảm hứng và say mê.pdf",
      "files7/KỸ NĂNG MỀM/Bí quyết học đâu nhớ đó.pdf",
      "files7/KỸ NĂNG MỀM/CEO khởi sự doanh nghiệp cần chuẩn bị những gì.pdf",
      "files7/KỸ NĂNG MỀM/Con Đường Phía Trước - Bill Gates.pdf",
      "files7/KỸ NĂNG MỀM/CẨM NANG CHO NGƯỜI MỚI ĐI LÀM ( Sổ tay bỏ túi cho sinh viên năm cuối).pdf",
      "files7/KỸ NĂNG MỀM/Giá như tôi biết trước những điều này....trước khi thi đại học.pdf",
      "files7/KỸ NĂNG MỀM/Không bao giờ là thất bại - Tất cả là thử thách.pdf",
      "files7/KỸ NĂNG MỀM/Làm gì khi giao tiếp có những bất đồng về quan điểm.pdf",
      "files7/KỸ NĂNG MỀM/myweb.pro.vn - Slide Kỹ năng đặt câu hỏi.pdf",
      "files7/KỸ NĂNG MỀM/Nghệ thuật sử dụng màu sắc trong cuộc sống.pdf",
      "files7/KỸ NĂNG MỀM/Phương pháp khởi tạo ý tưởng.pdf",
      "files7/KỸ NĂNG MỀM/Quản lý vừa là nghệ thuật vừa là khoa học.pdf",
      "files7/KỸ NĂNG MỀM/Slide Kỹ năng đặt câu hỏi.ppt",
      "files7/KỸ NĂNG MỀM/Sống 24 giờ một ngày.pdf",
      "files7/KỸ NĂNG MỀM/Thuật ứng xử tình huống trong quản lý giáo dục và đào tạo.pdf",
      "files7/KỸ NĂNG MỀM/Tài liệu môn Kỹ năng làm việc nhóm.pdf",
      "files7/KỸ NĂNG MỀM/[kỹ năng mềm] Các yếu tố tham gia vào quá trình giao tiếp.pdf",
      "files7/KỸ NĂNG MỀM/[kỹ năng mềm] giáo trình kỹ năng giao tiếp.pdf",
      "files7/KỸ NĂNG MỀM/[Kỹ năng mềm] Nhà lãnh đạo 360 độ.pdf",
      "files7/KỸ NĂNG MỀM/[Kỹ năng mềm] Triết lý về quản lý theo phong cách nhân hòa.pdf",
      "files7/KỸ NĂNG MỀM/[Sách] Xử thế trí tuệ toàn thư - thuật nói chuyện.pdf",
      "files7/KỸ NĂNG MỀM/[SÁCH] Đọc sách như một nghệ thuật.pdf",
      "files7/KỸ NĂNG MỀM/Đề thi trắc nghiệm IQ có đáp án.pdf",
      "files7/KỸ NĂNG MỀM/Đắc Nhân Tâm.pdf",
      "files7/KỸ NĂNG MỀM/Đột phá trong học tập - Tự tin thể hiện trong cuộc sống.pdf"
    ].map(createFileFromPath)
  }
];

documents.push(
  createDocumentFromPaths(30, "MÔN ĐẠI CƯƠNG", [
    "files8/MÔN ĐẠI CƯƠNG/ĐẠI CƯƠNG.zip",
  ]),
  createDocumentFromPaths(31, "ASEAN", [
    "files8/MÔN ĐẠI CƯƠNG/ASEAN/ASEAN 1-10.docx",
    "files8/MÔN ĐẠI CƯƠNG/ASEAN/ASEAN 11-20.docx",
    "files8/MÔN ĐẠI CƯƠNG/ASEAN/ASEAN 21-30.docx",
    "files8/MÔN ĐẠI CƯƠNG/ASEAN/ASEAN 31-40.docx",
    "files8/MÔN ĐẠI CƯƠNG/ASEAN/ASEAN TRẮC NGHIỆM(1).pdf",
    "files8/MÔN ĐẠI CƯƠNG/ASEAN/ASEAN TRẮC NGHIỆM.pdf",
    "files8/MÔN ĐẠI CƯƠNG/ASEAN/ASEAN.docx",
    "files8/MÔN ĐẠI CƯƠNG/ASEAN/TRẢ LỜI.docx",
    "files8/MÔN ĐẠI CƯƠNG/ASEAN/TRẮC NGHIỆM.zip",
    "files8/MÔN ĐẠI CƯƠNG/ASEAN/ÔN-TẬP-CUỐI-KỲ-và-Đáp-án-ASEAN-14072022-Chuẩn.pdf",
    "files8/MÔN ĐẠI CƯƠNG/ASEAN/Đáp án ASEAN Chuẩn.docx",
  ]),
  createDocumentFromPaths(32, "CHỦ NGHĨA XH", [
    "files8/MÔN ĐẠI CƯƠNG/CHỦ NGHĨA XH/TRAC NGHIEM CNXH 300 CÂU.docx",
    "files8/MÔN ĐẠI CƯƠNG/CHỦ NGHĨA XH/ÔN TẬP MÔN CHỦ NGHĨA XÃ HỘI KHOA HỌC.docx",
    "files8/MÔN ĐẠI CƯƠNG/CHỦ NGHĨA XH/CNXH/CNXH.pdf",
    "files8/MÔN ĐẠI CƯƠNG/CHỦ NGHĨA XH/CNXH/file-lý-thuyết-và-nhận-định.docx",
    "files8/MÔN ĐẠI CƯƠNG/CHỦ NGHĨA XH/CNXH/file-ôn-thi-cnxhkh.docx",
    "files8/MÔN ĐẠI CƯƠNG/CHỦ NGHĨA XH/CNXH/LÝ THUYẾT VÀ NHẬN ĐỊNH CNXH.docx",
    "files8/MÔN ĐẠI CƯƠNG/CHỦ NGHĨA XH/CNXH/TN CNXH (1).pdf",
    "files8/MÔN ĐẠI CƯƠNG/CHỦ NGHĨA XH/CNXH/TN CNXH.pdf",
    "files8/MÔN ĐẠI CƯƠNG/CHỦ NGHĨA XH/CNXH/ĐỀ-CƯƠNG-CNXH.docx",
  ]),
  createDocumentFromPaths(33, "GIAO TIẾP ĐVH", [
    "files8/MÔN ĐẠI CƯƠNG/GIAO TIẾP ĐVH/gtdvh.docx",
    "files8/MÔN ĐẠI CƯƠNG/GIAO TIẾP ĐVH/Thi GTDDVH (1).docx",
    "files8/MÔN ĐẠI CƯƠNG/GIAO TIẾP ĐVH/ÔN TẬP GIAO TIẾP ĐA VĂN HÓA.docx",
    "files8/MÔN ĐẠI CƯƠNG/GIAO TIẾP ĐVH/ÔN TẬP GTĐVH.pdf",
  ]),
  createDocumentFromPaths(34, "KINH TẾ CHÍNH TRỊ", [
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/CÂU HỎI.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/Mục lục KTCT.docx",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/ÔN TẬP KTCT.docx",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/ÔN TẬP MÔN KINH TẾ CHÍNH TRỊ.docx",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816553236_d4b9426475d7ba9967279cdb96950cd2.jpg",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816556616_a2b593d769c3da5ec6b0a51f38cccc96.jpg",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816557691_8446e211aa8bf05da04e329b733dba24.jpg",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816559620_be94b63443039792e4ba437158583853.jpg",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816561418_5b142fb27c1d83f48110f998656b246d.jpg",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816563197_f90265fe129743a231c0ad7005985b38.jpg",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816565915_4df1ae467045152edb3c0702bd491591.jpg",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816568442_deebd4498984629cb9aa58d878b62ca7.jpg",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816571245_24f86d67283af97065748b658101fe4b.jpg",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ CHÍNH TRỊ/HÌNH CHÉP BÀI/z6083816572229_8a2c8785cd98793898d2e3f6358deeea.jpg",
  ]),
  createDocumentFromPaths(35, "KINH TẾ VĨ MÔ", [
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ VĨ MÔ/CÂU HỎI LÝ THUYẾT - VĨ MÔ.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KINH TẾ VĨ MÔ/ÔN KINH TẾ VĨ MÔ full _ 2024.pdf",
  ]),
  createDocumentFromPaths(36, "KẾ TOÁN", [
    "files8/MÔN ĐẠI CƯƠNG/KẾ TOÁN/BÀI GIẢNG.7z",
    "files8/MÔN ĐẠI CƯƠNG/KẾ TOÁN/BÀI TẬP CHƯƠNG 5.docx",
    "files8/MÔN ĐẠI CƯƠNG/KẾ TOÁN/C2 -  BCTC .xlsx",
  ]),
  createDocumentFromPaths(37, "KỸ NĂNG MỀM", [
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/201 Cách Cư Xử Với Người Trái Tính.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/64 câu hỏi phỏng vấn và trả lời.docx",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/7 thói quen của bạn trẻ thành công.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Bí mật cảm hứng và say mê.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Bí quyết học đâu nhớ đó.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/CEO khởi sự doanh nghiệp cần chuẩn bị những gì.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Con Đường Phía Trước - Bill Gates.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/CẨM NANG CHO NGƯỜI MỚI ĐI LÀM ( Sổ tay bỏ túi cho sinh viên năm cuối).pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Giá như tôi biết trước những điều này....trước khi thi đại học.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Không bao giờ là thất bại - Tất cả là thử thách.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Làm gì khi giao tiếp có những bất đồng về quan điểm.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/myweb.pro.vn - Slide Kỹ năng đặt câu hỏi.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Nghệ thuật sử dụng màu sắc trong cuộc sống.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Phương pháp khởi tạo ý tưởng.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Quản lý vừa là nghệ thuật vừa là khoa học.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Slide Kỹ năng đặt câu hỏi.ppt",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Sống 24 giờ một ngày.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Thuật ứng xử tình huống trong quản lý giáo dục và đào tạo.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Trọn bộ ebook kỹ năng mềm-20250620T173643Z-1-001.zip",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Tài liệu môn Kỹ năng làm việc nhóm.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/[kỹ năng mềm] Các yếu tố tham gia vào quá trình giao tiếp.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/[kỹ năng mềm] giáo trình kỹ năng giao tiếp.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/[Kỹ năng mềm] Nhà lãnh đạo 360 độ.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/[Kỹ năng mềm] Triết lý về quản lý theo phong cách nhân hòa.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/[Sách] Xử thế trí tuệ toàn thư - thuật nói chuyện.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/[SÁCH] Đọc sách như một nghệ thuật.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Đề thi trắc nghiệm IQ có đáp án.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Đắc Nhân Tâm.pdf",
    "files8/MÔN ĐẠI CƯƠNG/KỸ NĂNG MỀM/Đột phá trong học tập - Tự tin thể hiện trong cuộc sống.pdf",
  ]),
  createDocumentFromPaths(38, "LINH KIỆN ĐIỆN TỪ", [
    "files8/MÔN ĐẠI CƯƠNG/LINH KIỆN ĐIỆN TỪ/ChuongBT_OnTapLKĐT_v1-1.pdf",
    "files8/MÔN ĐẠI CƯƠNG/LINH KIỆN ĐIỆN TỪ/Linh kiện điện tử.docx",
  ]),
  createDocumentFromPaths(39, "LỊCH SỬ ĐẢNG", [
    "files8/MÔN ĐẠI CƯƠNG/LỊCH SỬ ĐẢNG/Bản sao của ON TAP LINUX (1)(1).pdf",
    "files8/MÔN ĐẠI CƯƠNG/LỊCH SỬ ĐẢNG/Bản sao của ON TAP LINUX (1).pdf",
    "files8/MÔN ĐẠI CƯƠNG/LỊCH SỬ ĐẢNG/Bản sao của Đề linuxtnd.pdf",
    "files8/MÔN ĐẠI CƯƠNG/LỊCH SỬ ĐẢNG/Câu-hỏi-LSĐ-20202.pdf",
    "files8/MÔN ĐẠI CƯƠNG/LỊCH SỬ ĐẢNG/Trắc Nghiệm Ôn Tập Lịch Sử Đảng 260 Câu.docx",
    "files8/MÔN ĐẠI CƯƠNG/LỊCH SỬ ĐẢNG/Trắc Nghiệm Ôn Tập Lịch Sử Đảng 35 Câu.docx",
    "files8/MÔN ĐẠI CƯƠNG/LỊCH SỬ ĐẢNG/ÔN TẬP MÔN LỊCH SỬ ĐẢNG.docx",
  ]),
  createDocumentFromPaths(40, "MARKETING", [
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_10___Chien_Luoc_Gia.pdf",
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_11___Chien_Luoc_Phan_Phoi.pdf",
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_12___Chien_Luoc_Xuc_Tien_Hon_Hop.pdf",
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_13___Thiet_Ke_Mot_Chien_Luoc_Marketing_Dien_Hinh.pdf",
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_1___Nhung_Van_De_Co_Ban_Marketing.pdf",
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_2___He_Thong_Thong_Tin_Marketing.pdf",
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_3___Phan_Tich_Moi_Truong_Marketing.pdf",
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_4___Phan_Tich_Thi_Truong_va_Nguoi_Tieu_Dung.pdf",
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_5___Phan_Tich_Thi_Truong_B_2_B.pdf",
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_6___Phan_Tich_Nganh_va_Moi_Truong_Canh_Tranh.pdf",
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_7___Nghien_Cuu_Lua_Chon_Thi_Truong_Muc_Tieu.pdf",
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_8___Dinh_Vi_San_Pham.pdf",
    "files8/MÔN ĐẠI CƯƠNG/MARKETING/Chapter_9___Chien_Luoc_San_Pham_va_Dich_Vu.pdf",
  ]),
  createDocumentFromPaths(41, "PHÁP LUẬT ĐẠI CƯƠNG", [
    "files8/MÔN ĐẠI CƯƠNG/PHÁP LUẬT ĐẠI CƯƠNG/CÂU HỎI TN PLĐC.docx",
  ]),
  createDocumentFromPaths(42, "THỐNG KÊ UD", [
    "files8/MÔN ĐẠI CƯƠNG/THỐNG KÊ UD/IMG_0723.JPG",
    "files8/MÔN ĐẠI CƯƠNG/THỐNG KÊ UD/IMG_0724.JPG",
    "files8/MÔN ĐẠI CƯƠNG/THỐNG KÊ UD/TKUD (1).docx",
    "files8/MÔN ĐẠI CƯƠNG/THỐNG KÊ UD/ĐỀ TKUD THAM KHẢO (1).pdf",
    "files8/MÔN ĐẠI CƯƠNG/THỐNG KÊ UD/Đề thi tham khảo.png",
    "files8/MÔN ĐẠI CƯƠNG/THỐNG KÊ UD/BÀI GIẢNG/VHU - Slide bài giảng - TKUD - Chương 6.zip",
    "files8/MÔN ĐẠI CƯƠNG/THỐNG KÊ UD/BÀI GIẢNG/VHU - Slide bài giảng - TKUD - Chương 7.zip",
    "files8/MÔN ĐẠI CƯƠNG/THỐNG KÊ UD/BÀI GIẢNG/VHU_Slide-bai-giang TKUD  - Chương 4.pdf",
    "files8/MÔN ĐẠI CƯƠNG/THỐNG KÊ UD/BÀI GIẢNG/VHU_Slide-bai-giang TKUD - Chương 1 .pdf",
    "files8/MÔN ĐẠI CƯƠNG/THỐNG KÊ UD/BÀI GIẢNG/VHU_Slide-bai-giang TKUD - Chương 2.pdf",
    "files8/MÔN ĐẠI CƯƠNG/THỐNG KÊ UD/BÀI GIẢNG/VHU_Slide-bai-giang TKUD - Chương 3.pdf",
    "files8/MÔN ĐẠI CƯƠNG/THỐNG KÊ UD/BÀI GIẢNG/VHU_Slide-bai-giang TKUD - Chương 5.pdf",
  ]),
  createDocumentFromPaths(43, "TRIẾT HỌC", [
    "files8/MÔN ĐẠI CƯƠNG/TRIẾT HỌC/300 CÂU HỎI.pdf",
    "files8/MÔN ĐẠI CƯƠNG/TRIẾT HỌC/CÂU HỎI ÔN TẬP.pdf",
    "files8/MÔN ĐẠI CƯƠNG/TRIẾT HỌC/TRAC NGHIEM KTCT (14 CHỦ ĐỀ - 206C).docx",
    "files8/MÔN ĐẠI CƯƠNG/TRIẾT HỌC/TRẮC NGHIỆM.pdf",
    "files8/MÔN ĐẠI CƯƠNG/TRIẾT HỌC/ÔN TẬP TN.pdf",
  ]),
  createDocumentFromPaths(44, "TƯ TƯỞNG HCM", [
    "files8/MÔN ĐẠI CƯƠNG/TƯ TƯỞNG HCM/Trắc Nghiệm Ôn Tập Tư Tưởng Hồ Chí Minh.docx",
    "files8/MÔN ĐẠI CƯƠNG/TƯ TƯỞNG HCM/TƯ TƯỞNG HCM 1.docx",
    "files8/MÔN ĐẠI CƯƠNG/TƯ TƯỞNG HCM/TƯ TƯỞNG HCM- TÀI LIỆU.pdf",
    "files8/MÔN ĐẠI CƯƠNG/TƯ TƯỞNG HCM/TƯ TƯỞNG HCM.docx",
    "files8/MÔN ĐẠI CƯƠNG/TƯ TƯỞNG HCM/TƯƠNG TƯỞNG HCM.docx",
    "files8/MÔN ĐẠI CƯƠNG/TƯ TƯỞNG HCM/TỰ SOẠN/HCM.docx",
    "files8/MÔN ĐẠI CƯƠNG/TƯ TƯỞNG HCM/TỰ SOẠN/ÔNTTHCM.pdf",
    "files8/MÔN ĐẠI CƯƠNG/TƯ TƯỞNG HCM/TỰ SOẠN/TTHCM - TN.docx",
    "files8/MÔN ĐẠI CƯƠNG/TƯ TƯỞNG HCM/TỰ SOẠN/Đáp án trắc nghiệm TTHCM.docx",
  ]),
  createDocumentFromPaths(45, "VĂN HIẾN VIỆT NAM", [
    "files8/MÔN ĐẠI CƯƠNG/VĂN HIẾN VIỆT NAM/Bài-trắc-nghiệm-VHVN314.docx",
    "files8/MÔN ĐẠI CƯƠNG/VĂN HIẾN VIỆT NAM/Bản sao vhvnghh(1).docx",
    "files8/MÔN ĐẠI CƯƠNG/VĂN HIẾN VIỆT NAM/Bản sao vhvnghh.docx",
    "files8/MÔN ĐẠI CƯƠNG/VĂN HIẾN VIỆT NAM/BỘ-CÂU-HỎI-VÀ-ĐÁP-AN-MÔN-VHVN15.06(1).docx",
    "files8/MÔN ĐẠI CƯƠNG/VĂN HIẾN VIỆT NAM/BỘ-CÂU-HỎI-VÀ-ĐÁP-AN-MÔN-VHVN15.06(2).docx",
    "files8/MÔN ĐẠI CƯƠNG/VĂN HIẾN VIỆT NAM/BỘ-CÂU-HỎI-VÀ-ĐÁP-AN-MÔN-VHVN15.06(3).docx",
    "files8/MÔN ĐẠI CƯƠNG/VĂN HIẾN VIỆT NAM/BỘ-CÂU-HỎI-VÀ-ĐÁP-AN-MÔN-VHVN15.06.docx",
    "files8/MÔN ĐẠI CƯƠNG/VĂN HIẾN VIỆT NAM/VĂN HIẾN VIỆT NAM .docx",
    "files8/MÔN ĐẠI CƯƠNG/VĂN HIẾN VIỆT NAM/VĂN HIẾN VIỆT NAM ÔN TẬP.docx",
    "files8/MÔN ĐẠI CƯƠNG/VĂN HIẾN VIỆT NAM/VHVN (1).docx",
    "files8/MÔN ĐẠI CƯƠNG/VĂN HIẾN VIỆT NAM/VHVN.pdf",
  ]),
  createDocumentFromPaths(46, "VẬT LÝ ĐẠI CƯƠNG", [
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/1-Động học chất điểm1.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/2-Động lực học chất điểm.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/3-Trường tĩnh điện.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/4-Dòng điện không đổi.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/5-Từ trường.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/6-Giao thoa ánh sáng - Nhiễu xạ và phân cực ánh sáng.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/7-Quang lượng tử.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/Bai tap Phan Hieu ung Quang dien.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/De So 1.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/De So 2.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/De So 9.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/Tổng hợp các công thức Vật lý đại cương.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/VLDC.zip",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/z6720286523285_91cac0f27aa01dbc30e82441a6eb0a65.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/hình ảnh chép bài tổng hợp.pdf",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647200982_310ff623dc9aafcf30a069db16b3d23f.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647219604_b18f395bfa20636748035c8ca7b489f2.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647219633_abdb149906476177aa493fff9dcdd394.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647219653_6261f4be70d5b5c72cb3734e55b4f5c6.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647274561_b8fa364e8b97ee65f7835dde2d69ab6c.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647314197_271b2315b7f6695487971fc2efb1c1fc.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647314233_1c0892e12b0d7c1904ae6d146d826d74.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647349724_ba29dcceff3e66db4c3211b4476c531d.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647405510_192f5c2cbaa731cb861d871b5844457c.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647439148_965c6b00b68391f25c2f093c7ff63abd.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647475821_a4aed21b9c51af2aa3542f30a2cda4b3.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647530955_a40e78e1f0403f789e52eff6981f1c33.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647659885_fac770a6257762029e3ab4a967e6221e.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647659995_f0edd4d7360f718d160e263b710f0870.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647764860_234dfaca7fa4febc5424d03f4097bef9.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647764861_8a5ed3289191b814444a3d5e5d86dc76.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647782214_99fd8f75b08918615d81cd9e6791824f.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647800618_977356e660dfdbda1c5eac43e41e71e1.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647885635_c31636301aa077d9fddb723e8419e1a7.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647903177_8f43d197bd1ae762ff1354ddcade4a29.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007647975563_6785320755125b8d4a2434e77b47defb.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648045387_12e74e56ffcd9c73655fed7dd23f1024.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648094733_0e4cdef8b980fe8c0aacab07c63f5953.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648094734_b563ff332202a25039ab0a19817267af.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648114559_072774ecb35e0c75296b70d1b6c15fb7.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648171721_d8425eded8418afc97717db0863db05c.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648188366_22fd57c7a8b8a61f9cdbc80ae0979a63.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648188508_ba7cb7e485381fcfffe0667b727856e6.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648188509_7ed60a6b766834de38560574b4eba631.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648188534_dd0d6a17aeff75d553f1e5685fbef0d8.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648205678_54d34d639d85e959f08d2fa791c26098.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648240673_88b539f53d456c05dd4768df59511b74.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648274526_92ebf3e6fedff40dc9e04476b905e2e4.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648311397_980fca93482fc9b64ba7e096ebc928b4.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648311398_1bb6ca5f448cd2bf437ad83b7c8ea2f4.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648366904_06d02461c89546367fd3c834c3ea05f5.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648385650_d586ea91c4e6f80be53de9f1ac2973fe.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648421934_e665dcedda66cb743b8963a3851a4983.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648478215_d1bd863a21066fa5d0b2e05643db2e29.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648478231_dd2ba04be7b540ffd541cfeea506adc0.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648513758_8d29ec59850ddc17816f0525aa639945.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648531857_a3b1523bd482b54f3216be916dbbca38.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648568988_7f5eda0bea8ec470e2b7f6919c2d86c7.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648623919_d7d145d08742aca1cad9bf0d8da44f5d.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648640475_b923dacdbad3c861e61409b63d236f91.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648678203_10289396abe8945664cbbd137b3b0398.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648733973_abe9d3a034107dd26cd55c6a243130cd.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648752949_a4e238c3ef238b08d518297b7843c548.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648809677_2fd4cef11c63872cb2fead59b89e882a.jpg",
    "files8/MÔN ĐẠI CƯƠNG/VẬT LÝ ĐẠI CƯƠNG/HÌNH ẢNH CHÉP BÀI/z6007648863002_b17ddf80007c7a135ec1998d775967dd.jpg",
  ])
);

const visitorCountBaseUrl = "https://visitor-badge.one9x.com/count";
const visitorBadgeBaseUrl = "https://visitor-badge.one9x.com/badge";
const visitorBadgeNamespace = "ktlvinh";
const visitorBadgeTimeframe = 86400;
const itemsPerPage = 6;
let currentPage = 1;
let currentKeyword = "";

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

function getFileExtension(path) {
  return path.split(".").pop().toLowerCase();
}

function getFileIcon(path) {
  const extension = getFileExtension(path);

  if (extension === "pdf") return "📄";
  if (["doc", "docx"].includes(extension)) return "📝";
  if (["xls", "xlsx", "csv"].includes(extension)) return "📈";
  if (["ppt", "pptx"].includes(extension)) return "📊";
  if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension)) return "🖼️";
  if (["mp4", "webm", "mov"].includes(extension)) return "🎬";
  if (["zip", "rar", "7z"].includes(extension)) return "🗜️";

  return "📁";
}

function isImageFile(extension) {
  return ["jpg", "jpeg", "png", "gif", "webp"].includes(extension);
}

function isVideoFile(extension) {
  return ["mp4", "webm", "mov"].includes(extension);
}

function isDocxFile(extension) {
  return extension === "docx";
}

function isWordFile(extension) {
  return ["doc", "docx"].includes(extension);
}

function isUnsupportedOfficeFile(extension) {
  return ["doc", "xls", "xlsx", "ppt", "pptx"].includes(extension);
}

function getEncodedFilePath(path) {
  return encodeURI(path);
}

function getCountKey(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90) || "unknown";
}

function getFileCounterKey(file) {
  return `file-${getCountKey(file.path)}`;
}

function getVisitorCountUrl(key, options = {}) {
  const params = new URLSearchParams({
    page_id: key,
    namespace: visitorBadgeNamespace,
    _: String(Date.now())
  });

  if (options.readOnly) {
    params.set("read", "true");
  }

  if (options.unique) {
    params.set("unique", "true");
    params.set("timeframe", String(visitorBadgeTimeframe));
  }

  return `${visitorCountBaseUrl}?${params.toString()}`;
}

function getVisitorBadgeUrl(key, options = {}) {
  const params = new URLSearchParams({
    page_id: key,
    namespace: visitorBadgeNamespace,
    left_text: options.label || "luot",
    left_color: "#e8edf5",
    right_color: "#1565c0",
    _: String(Date.now())
  });

  if (options.readOnly) {
    params.set("read", "true");
  }

  if (options.unique) {
    params.set("unique", "true");
    params.set("timeframe", String(visitorBadgeTimeframe));
  }

  return `${visitorBadgeBaseUrl}?${params.toString()}`;
}

function formatVisitorCount(value, unit = "lượt") {
  const count = Number(value);
  const safeCount = Number.isFinite(count) && count >= 0 ? Math.floor(count) : 0;

  return `${safeCount.toLocaleString("vi-VN")} ${unit}`;
}

function renderVisitorCount(value, options = {}) {
  return `<span class="visitor-count">${escapeHtml(formatVisitorCount(value, options.unit))}</span>`;
}

function renderVisitorLoadingText(options = {}) {
  return `<span class="visitor-count is-loading">${escapeHtml(options.text || "Đang tải lượt...")}</span>`;
}

function renderVisitorBadge(key, options = {}) {
  const label = options.label || "luot";
  const src = getVisitorBadgeUrl(key, options);

  return `<img class="visitor-badge" src="${escapeHtml(src)}" alt="${escapeHtml(label)}" loading="lazy" referrerpolicy="no-referrer">`;
}

async function fetchVisitorCount(key, options = {}) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 3000);
  let response;

  try {
    response = await fetch(getVisitorCountUrl(key, options), {
      cache: "no-store",
      signal: controller.signal
    });
  } finally {
    window.clearTimeout(timeoutId);
  }

  if (!response.ok) {
    throw new Error("Cannot load visitor count");
  }

  const data = await response.json();
  const count = Number(data.value);

  if (!Number.isFinite(count)) {
    throw new Error("Invalid visitor count");
  }

  return count;
}

async function updateSiteVisitorCount() {
  if (!siteVisitorCount) return;

  siteVisitorCount.innerHTML = renderVisitorLoadingText({
    text: "Đang tải lượt truy cập..."
  });

  try {
    const count = await fetchVisitorCount("site", {
      unique: true
    });
    siteVisitorCount.innerHTML = renderVisitorCount(count, {
      unit: "lượt truy cập"
    });
  } catch (error) {
    siteVisitorCount.innerHTML = renderVisitorBadge("site", {
      label: "tổng lượt truy cập ",
      unique: true
    });
  }
}

function recordSiteVisit() {
  updateSiteVisitorCount();
}

function getStoredValue(key) {
  try {
    return localStorage.getItem(key) || "";
  } catch (error) {
    return "";
  }
}

function setStoredValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Local storage can be blocked in private browsing.
  }
}

function createDeviceSessionId() {
  if (window.crypto?.randomUUID) {
    return `sess_${window.crypto.randomUUID()}`;
  }

  return `sess_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function getDeviceSessionId() {
  const storageKey = "ktlDeviceSessionId";
  const existingSessionId = getStoredValue(storageKey);

  if (existingSessionId) {
    return existingSessionId;
  }

  const sessionId = createDeviceSessionId();
  setStoredValue(storageKey, sessionId);

  return sessionId;
}

function detectOperatingSystem(userAgent, platform) {
  if (/android/i.test(userAgent)) return "Android";
  if (/iphone|ipad|ipod/i.test(userAgent)) return "iOS";
  if (/win/i.test(platform) || /windows/i.test(userAgent)) return "Windows";
  if (/mac/i.test(platform) || /mac os/i.test(userAgent)) return "macOS";
  if (/linux/i.test(platform) || /linux/i.test(userAgent)) return "Linux";

  return "Không rõ";
}

function detectBrowser(userAgent) {
  if (/edg\//i.test(userAgent)) return "Microsoft Edge";
  if (/opr\//i.test(userAgent) || /opera/i.test(userAgent)) return "Opera";
  if (/firefox\//i.test(userAgent)) return "Firefox";
  if (/chrome\//i.test(userAgent) && !/edg\//i.test(userAgent)) return "Chrome";
  if (/safari\//i.test(userAgent) && !/chrome\//i.test(userAgent)) return "Safari";

  return "Không rõ";
}

function detectDeviceName(userAgent, platform) {
  if (/iphone/i.test(userAgent)) return "iPhone";
  if (/ipad/i.test(userAgent) || (platform === "MacIntel" && navigator.maxTouchPoints > 1)) return "iPad";
  if (/android/i.test(userAgent) && /mobile/i.test(userAgent)) return "Android Phone";
  if (/android/i.test(userAgent)) return "Android Tablet";
  if (/win/i.test(platform) || /windows/i.test(userAgent)) return "Windows PC";
  if (/mac/i.test(platform) || /mac os/i.test(userAgent)) return "Mac";

  return "Thiết bị không rõ";
}

async function registerDeviceSession() {
  if (window.location.protocol === "file:") {
    return;
  }

  const userAgent = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const payload = {
    sessionId: getDeviceSessionId(),
    user: getStoredValue("ktlUser") || "guest",
    deviceName: detectDeviceName(userAgent, platform),
    os: detectOperatingSystem(userAgent, platform),
    browser: detectBrowser(userAgent),
    userAgent,
    language: navigator.language || "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || ""
  };

  try {
    await fetch("api/device-sessions.php", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    // The site may be opened as static files; device tracking needs PHP.
  }
}

function getFileCountElements(fileIndex) {
  const clickCountEl = modalDesc.querySelector(`[data-click-count="${fileIndex}"]`);
  const activeItem = modalDesc.querySelector(".file-item.active");
  const previewCountEl = modalDesc.querySelector(".file-preview-count");
  const elements = [];

  if (clickCountEl) {
    elements.push(clickCountEl);
  }

  if (activeItem?.dataset.previewItem === String(fileIndex) && previewCountEl) {
    elements.push(previewCountEl);
  }

  return elements;
}

function updateFileCountElements(fileIndex, html) {
  getFileCountElements(fileIndex).forEach(element => {
    element.innerHTML = html;
  });
}

async function refreshVisibleFileCount(file, fileIndex, options = {}) {
  updateFileCountElements(fileIndex, renderVisitorLoadingText());

  try {
    const count = await fetchVisitorCount(getFileCounterKey(file), options);
    updateFileCountElements(fileIndex, renderVisitorCount(count));
  } catch (error) {
    updateFileCountElements(fileIndex, renderVisitorBadge(getFileCounterKey(file), {
      ...options,
      label: "tổng lượt xem file "
    }));
  }
}

function recordFileVisit(file, fileIndex) {
  refreshVisibleFileCount(file, fileIndex, {
    unique: true
  });
}

function updateVisibleFileCounts(doc) {
  doc.files.forEach((file, index) => {
    refreshVisibleFileCount(file, index, {
      readOnly: true
    });
  });
}

function getFilteredDocuments() {
  const keyword = normalizeText(currentKeyword.trim());

  return documents.filter(doc => {
    const searchableText = [
      doc.title,
      ...doc.files.flatMap(file => [file.name, file.path])
    ].join(" ");
    const matchKeyword = !keyword || normalizeText(searchableText).includes(keyword);

    return matchKeyword;
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
                  <div class="file-item-clicks" data-click-count="${index}">
                    ${renderVisitorLoadingText()}
                  </div>
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

  modalDesc.dataset.docId = String(doc.id);
  modal.classList.add("show");
  syncPreviewCounts(doc);
  hydrateDocxPreview(doc.files[activeIndex]);
}

async function syncPreviewCounts(doc) {
  if (modalDesc.dataset.docId !== String(doc.id)) return;

  updateVisibleFileCounts(doc);
}

function renderFilePreview(file) {
  const extension = getFileExtension(file.path);
  const encodedPath = escapeHtml(getEncodedFilePath(file.path));
  const safeName = escapeHtml(file.name);
  const visitorCount = renderVisitorLoadingText();

  if (extension === "pdf") {
    return `
      <div class="file-preview-head">
        <span>${getFileIcon(file.path)}</span>
        <strong>${safeName}</strong>
        <span class="file-preview-count">${visitorCount}</span>
      </div>
      <iframe class="file-preview-frame" src="${encodedPath}#toolbar=0" title="Xem trước ${safeName}"></iframe>
    `;
  }

  if (isImageFile(extension)) {
    return `
      <div class="file-preview-head">
        <span>${getFileIcon(file.path)}</span>
        <strong>${safeName}</strong>
        <span class="file-preview-count">${visitorCount}</span>
      </div>
      <div class="file-preview-image-wrap">
        <img class="file-preview-image" src="${encodedPath}" alt="${safeName}">
      </div>
    `;
  }

  if (isVideoFile(extension)) {
    return `
      <div class="file-preview-head">
        <span>${getFileIcon(file.path)}</span>
        <strong>${safeName}</strong>
        <span class="file-preview-count">${visitorCount}</span>
      </div>
      <div class="file-preview-video-wrap">
        <video class="file-preview-video" src="${encodedPath}" controls preload="metadata"></video>
      </div>
    `;
  }

  if (isDocxFile(extension)) {
    return `
      <div class="file-preview-head">
        <span>${getFileIcon(file.path)}</span>
        <strong>${safeName}</strong>
        <span class="file-preview-count">${visitorCount}</span>
      </div>
      <div class="word-preview" data-docx-src="${encodedPath}">
        <div class="word-preview-loading">Đang mở file Word...</div>
      </div>
    `;
  }

  if (isUnsupportedOfficeFile(extension)) {
    return `
      <div class="file-preview-empty">
        <div class="file-preview-empty-icon">${getFileIcon(file.path)}</div>
        <h4>${safeName}</h4>
        <span class="file-preview-count">${visitorCount}</span>
        <p>Định dạng này không xem trước trực tiếp được trên trình duyệt.</p>
      </div>
    `;
  }

  return `
    <div class="file-preview-empty">
      <div class="file-preview-empty-icon">${getFileIcon(file.path)}</div>
      <h4>${safeName}</h4>
      <span class="file-preview-count">${visitorCount}</span>
      <p>Không xem trước được định dạng này trên trình duyệt.</p>
    </div>
  `;
}

async function hydrateDocxPreview(file) {
  const extension = getFileExtension(file.path);

  if (!isDocxFile(extension)) return;

  const previewPanel = modalDesc.querySelector(".file-preview-panel");
  const previewBody = previewPanel?.querySelector(".word-preview");

  if (!previewBody) return;

  if (!window.mammoth) {
    previewBody.innerHTML = "<div class=\"word-preview-error\">Không tải được bộ đọc file Word.</div>";
    return;
  }

  try {
    const response = await fetch(getEncodedFilePath(file.path));

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const result = await window.mammoth.convertToHtml({ arrayBuffer });
    previewBody.innerHTML = result.value || "<div class=\"word-preview-error\">File Word không có nội dung xem trước.</div>";
  } catch (error) {
    previewBody.innerHTML = "<div class=\"word-preview-error\">Không đọc được file Word này.</div>";
  }
}

function renderFileOpenBlocked(file) {
  const safeName = escapeHtml(file.name);
  const visitorCount = renderVisitorLoadingText();

  return `
    <div class="file-preview-empty">
      <div class="file-preview-empty-icon">${getFileIcon(file.path)}</div>
      <h4>${safeName}</h4>
      <span class="file-preview-count">${visitorCount}</span>
      <p>Định dạng này không mở trực tiếp trên trình duyệt nên đã chặn tự động tải về.</p>
    </div>
  `;
}

function renderWordOpenStarted(file) {
  const safeName = escapeHtml(file.name);
  const encodedPath = escapeHtml(getEncodedFilePath(file.path));
  const visitorCount = renderVisitorLoadingText();

  return `
    <div class="file-preview-empty">
      <div class="file-preview-empty-icon">${getFileIcon(file.path)}</div>
      <h4>${safeName}</h4>
      <span class="file-preview-count">${visitorCount}</span>
      <p>File Word đang được mở hoặc tải về để xem trên máy.</p>
      <a class="mini-btn primary" href="${encodedPath}" target="_blank" rel="noopener">Mở lại file</a>
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

  previewPanel.innerHTML = renderFilePreview(file);
  modalDesc.querySelectorAll(".file-item").forEach(item => item.classList.remove("active"));
  modalDesc.querySelector(`[data-preview-item="${fileIndex}"]`)?.classList.add("active");
  refreshVisibleFileCount(file, fileIndex, {
    readOnly: true
  });
  hydrateDocxPreview(file);
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
  const canPreviewInline = extension === "pdf" || isImageFile(extension) || isVideoFile(extension);
  const targetUrl = getEncodedFilePath(file.path);

  modalDesc.querySelectorAll(".file-item").forEach(item => item.classList.remove("active"));
  modalDesc.querySelector(`[data-preview-item="${fileIndex}"]`)?.classList.add("active");

  if (canPreviewInline) {
    const popup = window.open(targetUrl, "_blank");

    previewPanel.innerHTML = renderFilePreview(file);
    recordFileVisit(file, fileIndex);
    if (!popup) {
      window.open(targetUrl, "_blank");
    }
    return;
  }

  if (isWordFile(extension)) {
    const popup = window.open(targetUrl, "_blank");

    previewPanel.innerHTML = renderWordOpenStarted(file);
    recordFileVisit(file, fileIndex);
    if (!popup) {
      window.open(targetUrl, "_blank");
    }
    return;
  }

  previewPanel.innerHTML = renderFileOpenBlocked(file);
  recordFileVisit(file, fileIndex);
}

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    modal.classList.remove("show");
  }
});

searchInput.addEventListener("input", event => {
  currentKeyword = event.target.value;
  currentPage = 1;
  renderDocuments();
});

async function initApp() {
  renderDocuments();
  recordSiteVisit();
  registerDeviceSession();
}

initApp();
