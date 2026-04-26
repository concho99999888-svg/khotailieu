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
    id: 10,
    title: "AN TOÀN MẠNG MÁY TÍNH",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/AN TOÀN MẠNG MÁY TÍNH/BT MẠNG.pdf",
      "files6/CHUYÊN NGÀNH/AN TOÀN MẠNG MÁY TÍNH/Kiểm tra - 20.02.2024 - 3 (2).pdf",
      "files6/CHUYÊN NGÀNH/AN TOÀN MẠNG MÁY TÍNH/SÁCH- BEING A FIREWALL ENGINEER.pdf",
      "files6/CHUYÊN NGÀNH/AN TOÀN MẠNG MÁY TÍNH/SÁCH- COMPUTER NETWORKING.pdf",
      "files6/CHUYÊN NGÀNH/AN TOÀN MẠNG MÁY TÍNH/SÁCH= GIUDE TO COMPUTER NETWORK SECURITY.pdf",
      "files6/CHUYÊN NGÀNH/AN TOÀN MẠNG MÁY TÍNH/ĐỀ CƯƠNG THI.pdf",
      "files6/CHUYÊN NGÀNH/AN TOÀN MẠNG MÁY TÍNH/TÀI LIỆU ÔN TỰ SOẠN/giaotrinhattt_v1_2717.pdf",
      "files6/CHUYÊN NGÀNH/AN TOÀN MẠNG MÁY TÍNH/TÀI LIỆU ÔN TỰ SOẠN/TAI LIEU AN TOÀN MMTdocx.docx",
      "files6/CHUYÊN NGÀNH/AN TOÀN MẠNG MÁY TÍNH/TÀI LIỆU ÔN TỰ SOẠN/trác nghiem.pdf",
      "files6/CHUYÊN NGÀNH/AN TOÀN MẠNG MÁY TÍNH/TÀI LIỆU ÔN TỰ SOẠN/trắc nghiệm.pdf"
    ].map(createFileFromPath)
  },
  {
    id: 11,
    title: "AN TOÀN THÔNG TIN",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/AN TOÀN THÔNG TIN/An toàn mạng máy tính.zip",
      "files6/CHUYÊN NGÀNH/AN TOÀN THÔNG TIN/Configure Snort IDS or IPS.pdf",
      "files6/CHUYÊN NGÀNH/AN TOÀN THÔNG TIN/Hacking.rar",
      "files6/CHUYÊN NGÀNH/AN TOÀN THÔNG TIN/How to configure 2FA for GUI access in pfSense.pdf",
      "files6/CHUYÊN NGÀNH/AN TOÀN THÔNG TIN/Mật mã học.zip",
      "files6/CHUYÊN NGÀNH/AN TOÀN THÔNG TIN/Tool Hacking Webservers.zip",
      "files6/CHUYÊN NGÀNH/AN TOÀN THÔNG TIN/AN TOÀN MẠNG/AN TOÀN MẠNG TN.zip",
      "files6/CHUYÊN NGÀNH/AN TOÀN THÔNG TIN/AN TOÀN MẠNG/BT B4-ATMMT (1).pdf"
    ].map(createFileFromPath)
  },
  {
    id: 12,
    title: "C++",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/C++/1000 BT C++ .pdf",
      "files6/CHUYÊN NGÀNH/C++/2-Bộ câu hỏi.docx",
      "files6/CHUYÊN NGÀNH/C++/Bản sao của lap-trinh-c++__c++-buu-chinh-vien-thong - [cuuduongthancong.com].pdf",
      "files6/CHUYÊN NGÀNH/C++/C++.pdf",
      "files6/CHUYÊN NGÀNH/C++/code c++.docx",
      "files6/CHUYÊN NGÀNH/C++/Giao_Trinh_C_Can_Ban.pdf",
      "files6/CHUYÊN NGÀNH/C++/Ôn thi C++ nâng cao.docx",
      "files6/CHUYÊN NGÀNH/C++/ÔN TẬP C++.zip",
      "files6/CHUYÊN NGÀNH/C++/LAB- BT THỰC HÀNH/LAP 02_ LỆNH ĐIỀU KIỆN IF - CASE.pdf",
      "files6/CHUYÊN NGÀNH/C++/LAB- BT THỰC HÀNH/LAP 1 - THỰC HÀNH C++.pdf",
      "files6/CHUYÊN NGÀNH/C++/LAB- BT THỰC HÀNH/LAP 3 - THỰC HÀNH C++.pdf",
      "files6/CHUYÊN NGÀNH/C++/LAB- BT THỰC HÀNH/LAP 4 - THỰC HÀNH C++ - HÀM.pdf",
      "files6/CHUYÊN NGÀNH/C++/LAB- BT THỰC HÀNH/LAP 5 - THỰC HÀNH C++ - MẢNG.pdf",
      "files6/CHUYÊN NGÀNH/C++/LAB- BT THỰC HÀNH/LAP 6 - THỰC HÀNH C++ - MẢNG 2 CHIỀU.pdf"
    ].map(createFileFromPath)
  },
  {
    id: 13,
    title: "CSDL",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/CSDL/Tap Bai Giang Co So Du Lieu (Luong_Thai _Hien).pdf",
      "files6/CHUYÊN NGÀNH/CSDL/ÔN TÂP CSDL.pdf",
      "files6/CHUYÊN NGÀNH/CSDL/Ôn tập CSDL giải đề 1 và 2.docx",
      "files6/CHUYÊN NGÀNH/CSDL/TÀI LIỆU THI/DeOn01_CSDL.pdf",
      "files6/CHUYÊN NGÀNH/CSDL/TÀI LIỆU THI/DeOn02_CSDL.pdf",
      "files6/CHUYÊN NGÀNH/CSDL/TÀI LIỆU THI/DeThiMau_CSDL_VHU.pdf",
      "files6/CHUYÊN NGÀNH/CSDL/TÀI LIỆU THI/KIEMTRAGIUAKY.pdf",
      "files6/CHUYÊN NGÀNH/CSDL/TÀI LIỆU THI/Ôn tập CSDL giải đề 1 và 2.docx",
      "files6/CHUYÊN NGÀNH/CSDL/TÀI LIỆU THI/ĐỀ 1- CSDL.jpg",
      "files6/CHUYÊN NGÀNH/CSDL/TÀI LIỆU THI/ĐỀ 2- CSDL.jpg",
      "files6/CHUYÊN NGÀNH/CSDL/TÀI LIỆU THI/ĐỀ 3- CSDL.jpg",
      "files6/CHUYÊN NGÀNH/CSDL/TÀI LIỆU THI/ĐỀ 4- CSDL.jpg"
    ].map(createFileFromPath)
  },
  {
    id: 14,
    title: "CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT/NỘI DUNG ÔN TẬP MÔN CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT.pdf",
      "files6/CHUYÊN NGÀNH/CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT/Đáp Án.pdf",
      "files6/CHUYÊN NGÀNH/CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT/BÀI GIẢNG  (1)/Chuong1_TongQuanCTDL&GT.pptx",
      "files6/CHUYÊN NGÀNH/CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT/BÀI GIẢNG  (1)/Chuong2_SapXep.pptx",
      "files6/CHUYÊN NGÀNH/CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT/BÀI GIẢNG  (1)/Chuong3_TimKiem.pptx",
      "files6/CHUYÊN NGÀNH/CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT/BÀI GIẢNG  (1)/Chuong4._DanhSachLienKet.pptx",
      "files6/CHUYÊN NGÀNH/CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT/BÀI GIẢNG  (1)/Chuong5_Stack&Queue.pptx"
    ].map(createFileFromPath)
  },
  {
    id: 15,
    title: "HỆ ĐIỀU HÀNH",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/HỆ ĐIỀU HÀNH/CÂU HỎI ĐỀ 1.pdf",
      "files6/CHUYÊN NGÀNH/HỆ ĐIỀU HÀNH/SÁCH.pdf",
      "files6/CHUYÊN NGÀNH/HỆ ĐIỀU HÀNH/ÔN TẬP .docx",
      "files6/CHUYÊN NGÀNH/HỆ ĐIỀU HÀNH/ĐÁP ÁN ĐỀ 1.pdf",
      "files6/CHUYÊN NGÀNH/HỆ ĐIỀU HÀNH/ĐỀ CƯƠNG ÔN.pdf",
      "files6/CHUYÊN NGÀNH/HỆ ĐIỀU HÀNH/BÀI GIẢNG/BÀI GIẢNG HỆ ĐIỀU HÀNH.pdf",
      "files6/CHUYÊN NGÀNH/HỆ ĐIỀU HÀNH/BÀI GIẢNG/Chuong 1 Tong Quan Ve He Dieu Hanh.pptx.pdf",
      "files6/CHUYÊN NGÀNH/HỆ ĐIỀU HÀNH/BÀI GIẢNG/Chuong 2 Tien Trinh Va Luong.pptx.pdf",
      "files6/CHUYÊN NGÀNH/HỆ ĐIỀU HÀNH/BÀI GIẢNG/Chuong 3 Lap Lich CPU.pptx.pdf",
      "files6/CHUYÊN NGÀNH/HỆ ĐIỀU HÀNH/BÀI GIẢNG/Chuong 4 deadlock.pptx.pdf"
    ].map(createFileFromPath)
  },
  {
    id: 16,
    title: "JAVA",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/JAVA/JAVA.pdf",
      "files6/CHUYÊN NGÀNH/JAVA/Java.zip",
      "files6/CHUYÊN NGÀNH/JAVA/ÔN THI LẬP TRÌNH JAVA.docx",
      "files6/CHUYÊN NGÀNH/JAVA/ĐỀ CƯƠNG JAVA.docx",
      "files6/CHUYÊN NGÀNH/JAVA/ĐỀ THI.JPG",
      "files6/CHUYÊN NGÀNH/JAVA/JAVA NÂNG CAO/33.VHU.CNTT.ĐCCT_LẬP TRÌNH JAVA NÂNG CAO_NGOCHV.pdf",
      "files6/CHUYÊN NGÀNH/JAVA/JAVA NÂNG CAO/BAI TAP JAVA NANG CAO.pdf",
      "files6/CHUYÊN NGÀNH/JAVA/JAVA NÂNG CAO/SQL + JDBC + JavaSwing _ NhanVien.mp4",
      "files6/CHUYÊN NGÀNH/JAVA/JAVA NÂNG CAO/Tai lieu hoc tap.docx",
      "files6/CHUYÊN NGÀNH/JAVA/JAVA NÂNG CAO/BÀI GIẢNG/CHUONG 1-  APPLET.pdf",
      "files6/CHUYÊN NGÀNH/JAVA/JAVA NÂNG CAO/BÀI GIẢNG/CHUONG 2-GUI SWING.pdf",
      "files6/CHUYÊN NGÀNH/JAVA/JAVA NÂNG CAO/BÀI GIẢNG/CHUONG 3-INPUT OUTPUT.pdf",
      "files6/CHUYÊN NGÀNH/JAVA/JAVA NÂNG CAO/BÀI GIẢNG/CHUONG 4-KET NOI CSDL.pdf",
      "files6/CHUYÊN NGÀNH/JAVA/TÀI LIỆU BÀI GIẢNG/C1-Gioi thieu tong quan-p.pdf",
      "files6/CHUYÊN NGÀNH/JAVA/TÀI LIỆU BÀI GIẢNG/chuong-2-Cấu trúc rẽ nhánh.pptx",
      "files6/CHUYÊN NGÀNH/JAVA/TÀI LIỆU BÀI GIẢNG/chuong-3-Cấu trúc lặp.pptx",
      "files6/CHUYÊN NGÀNH/JAVA/TÀI LIỆU BÀI GIẢNG/chuong-4-mang.pptx",
      "files6/CHUYÊN NGÀNH/JAVA/TÀI LIỆU BÀI GIẢNG/chuong-5-ham (1).pptx",
      "files6/CHUYÊN NGÀNH/JAVA/TÀI LIỆU BÀI GIẢNG/chuong-5-ham.pptx"
    ].map(createFileFromPath)
  },
  {
    id: 17,
    title: "KHO PHẦN MỀM HỌC NGÀNH IT CỦA TRƯỜNG",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/KHO PHẦN MỀM HỌC NGÀNH IT CỦA TRƯỜNG/LINK PHẦN MỀM.docx"
    ].map(createFileFromPath)
  },
  {
    id: 18,
    title: "KIẾN TRÚC MÁY TÍNH",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/KIẾN TRÚC MÁY TÍNH/150 C-U H-I -N T-P KI-N TR-C M-Y T-NH.doc.pdf",
      "files6/CHUYÊN NGÀNH/KIẾN TRÚC MÁY TÍNH/300-trac-nghiem-kien-truc-may-tinh.pdf",
      "files6/CHUYÊN NGÀNH/KIẾN TRÚC MÁY TÍNH/500-trac-nghiem-kien-truc-may-tinh.pdf",
      "files6/CHUYÊN NGÀNH/KIẾN TRÚC MÁY TÍNH/B- c-u h-i cu-i k- KTMT.docx (1).pdf",
      "files6/CHUYÊN NGÀNH/KIẾN TRÚC MÁY TÍNH/Bộ câu hỏi cuối kỳ KTMT.pdf"
    ].map(createFileFromPath)
  },
  {
    id: 19,
    title: "LINUX",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/LINUX/Bản sao của ON TAP LINUX (1)(1).pdf",
      "files6/CHUYÊN NGÀNH/LINUX/Bản sao của ON TAP LINUX (1).pdf",
      "files6/CHUYÊN NGÀNH/LINUX/Bản sao của Đề linuxtnd.pdf",
      "files6/CHUYÊN NGÀNH/LINUX/BÀI GIẢNG/Bản sao của C1-Introduction & Installation-p.pdf",
      "files6/CHUYÊN NGÀNH/LINUX/BÀI GIẢNG/Bản sao của C2-Command-Line & Tools-p.pdf",
      "files6/CHUYÊN NGÀNH/LINUX/BÀI GIẢNG/Bản sao của C3-Files, Folders & Links-p.pdf",
      "files6/CHUYÊN NGÀNH/LINUX/BÀI GIẢNG/Bản sao của C4-File System-p.pdf",
      "files6/CHUYÊN NGÀNH/LINUX/BÀI GIẢNG/Bản sao của C5-Processes Management-p.pdf",
      "files6/CHUYÊN NGÀNH/LINUX/BÀI GIẢNG/Bản sao của C6-Users & Groups Management-p.pdf",
      "files6/CHUYÊN NGÀNH/LINUX/BÀI GIẢNG/Bản sao của C7-Shell Programming-p.pdf"
    ].map(createFileFromPath)
  },
  {
    id: 20,
    title: "MẠNG MÁY TÍNH",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/MẠNG MÁY TÍNH/Câu hỏi.docx",
      "files6/CHUYÊN NGÀNH/MẠNG MÁY TÍNH/Ôn thi.pdf",
      "files6/CHUYÊN NGÀNH/MẠNG MÁY TÍNH/Đề cương ôn tập MMT.docx",
      "files6/CHUYÊN NGÀNH/MẠNG MÁY TÍNH/ĐỀ THI & TỔNG ÔN/BT_Mạng máy tính.docx",
      "files6/CHUYÊN NGÀNH/MẠNG MÁY TÍNH/ĐỀ THI & TỔNG ÔN/De Thi Thu (final)(1).docx",
      "files6/CHUYÊN NGÀNH/MẠNG MÁY TÍNH/ĐỀ THI & TỔNG ÔN/De Thi Thu (final).docx",
      "files6/CHUYÊN NGÀNH/MẠNG MÁY TÍNH/ĐỀ THI & TỔNG ÔN/Mạng máy tính.docx",
      "files6/CHUYÊN NGÀNH/MẠNG MÁY TÍNH/ĐỀ THI & TỔNG ÔN/Đề cương ôn tập MMT(1).docx",
      "files6/CHUYÊN NGÀNH/MẠNG MÁY TÍNH/ĐỀ THI & TỔNG ÔN/Đề cương ôn tập MMT.docx"
    ].map(createFileFromPath)
  },
  {
    id: 21,
    title: "MẬT MÃ HỌC",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/MẬT MÃ HỌC/Lý thuyết thông tin trong các hệ mật.pdf",
      "files6/CHUYÊN NGÀNH/MẬT MÃ HỌC/ĐỀ THI.jpg",
      "files6/CHUYÊN NGÀNH/MẬT MÃ HỌC/BÀI GIẢNG/Chuong 1 - Gioi thieu ve mat ma hoc.pdf",
      "files6/CHUYÊN NGÀNH/MẬT MÃ HỌC/BÀI GIẢNG/Chuong 2 - Ma hoa hien dai.pdf",
      "files6/CHUYÊN NGÀNH/MẬT MÃ HỌC/BÀI GIẢNG/Chuong 3 - Ma hoa cong khai va quan ly khoa.pdf",
      "files6/CHUYÊN NGÀNH/MẬT MÃ HỌC/BÀI GIẢNG/Chuong 4 - Chung thuc du lieu.pdf",
      "files6/CHUYÊN NGÀNH/MẬT MÃ HỌC/BÀI GIẢNG/Chuong 5-6 - Chu ky so.pdf"
    ].map(createFileFromPath)
  },
  {
    id: 22,
    title: "QUẢN TRỊ HỆ THỐNG",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/QUẢN TRỊ HỆ THỐNG/ĐỀ.pdf"
    ].map(createFileFromPath)
  },
  {
    id: 23,
    title: "SÁCH",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/SÁCH/Cracking the Coding Interview - 150 Programming Interview Questions and Solutions 4e Small.pdf",
      "files6/CHUYÊN NGÀNH/SÁCH/Tom Butler Bowdon - 50 Psychology Classics_ Who We Are, How We Think, What We Do_ Insight and Inspiration from 50 Key Books (2006, Nicholas Brealey Publishing) - libgen.li.pdf"
    ].map(createFileFromPath)
  },
  {
    id: 24,
    title: "THIẾT KẾ ĐỒ HỌA",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/THIẾT KẾ ĐỒ HỌA/Photoshop vs Ai.docx",
      "files6/CHUYÊN NGÀNH/THIẾT KẾ ĐỒ HỌA/THIẾT KẾ ĐỒ HỌA CƠ BẢN.docx"
    ].map(createFileFromPath)
  },
  {
    id: 25,
    title: "TIẾNG ANH",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/TIẾNG ANH/Tôi đang chia sẻ _CÔ MAI PHƯƠNG_ với bạn.pdf",
      "files6/CHUYÊN NGÀNH/TIẾNG ANH/TA1/TA1.zip",
      "files6/CHUYÊN NGÀNH/TIẾNG ANH/TA2/TA2.zip"
    ].map(createFileFromPath)
  },
  {
    id: 26,
    title: "TIẾNG ANH CNTT",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/TIẾNG ANH CNTT/Tiếng Anh Chuyên Ngành.pdf"
    ].map(createFileFromPath)
  },
  {
    id: 27,
    title: "TOÁN RỜI RẠC VÀ LÝ THUYẾT ĐỒ THỊ",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/TOÁN RỜI RẠC VÀ LÝ THUYẾT ĐỒ THỊ/2022.VHU K.CNTT_Toan roi rac va ly thuyet do thi_Luong Thai Hien.pdf",
      "files6/CHUYÊN NGÀNH/TOÁN RỜI RẠC VÀ LÝ THUYẾT ĐỒ THỊ/BÀI GIẢNG.zip",
      "files6/CHUYÊN NGÀNH/TOÁN RỜI RẠC VÀ LÝ THUYẾT ĐỒ THỊ/NỘI DUNG ÔN TẬP TRR.pdf",
      "files6/CHUYÊN NGÀNH/TOÁN RỜI RẠC VÀ LÝ THUYẾT ĐỒ THỊ/TOÁN RỜI RẠC .docx",
      "files6/CHUYÊN NGÀNH/TOÁN RỜI RẠC VÀ LÝ THUYẾT ĐỒ THỊ/BÀI TẬP+ ĐỀ THI CŨ/NỘI DUNG ÔN TẬP-Đáp án tham khảo.pdf",
      "files6/CHUYÊN NGÀNH/TOÁN RỜI RẠC VÀ LÝ THUYẾT ĐỒ THỊ/BÀI TẬP+ ĐỀ THI CŨ/ĐỀ 1- TOÁN RR.jpg",
      "files6/CHUYÊN NGÀNH/TOÁN RỜI RẠC VÀ LÝ THUYẾT ĐỒ THỊ/BÀI TẬP+ ĐỀ THI CŨ/ĐỀ 2- TOÁN RR.jpg",
      "files6/CHUYÊN NGÀNH/TOÁN RỜI RẠC VÀ LÝ THUYẾT ĐỒ THỊ/BÀI TẬP+ ĐỀ THI CŨ/ĐỀ 3- TOÁN RR.jpg",
      "files6/CHUYÊN NGÀNH/TOÁN RỜI RẠC VÀ LÝ THUYẾT ĐỒ THỊ/BÀI TẬP+ ĐỀ THI CŨ/ĐỀ 4- TOÁN RR.jpg"
    ].map(createFileFromPath)
  },
  {
    id: 28,
    title: "ĐỒ HOẠ MATLAB",
    icon: "📦",
    files: [
      "files6/CHUYÊN NGÀNH/ĐỒ HOẠ MATLAB/1-Matlab_ly_thuyet_1-2_KN_Matran_.pdf",
      "files6/CHUYÊN NGÀNH/ĐỒ HOẠ MATLAB/2-Matlab_ly_thuyet_Laptrinh_Hamtoanhoc_.pdf",
      "files6/CHUYÊN NGÀNH/ĐỒ HOẠ MATLAB/3-Matlab_ly_thuyet_Symbolic_GUI_.pdf",
      "files6/CHUYÊN NGÀNH/ĐỒ HOẠ MATLAB/4-Matlab_ly_thuyet_Dohoa_.pdf",
      "files6/CHUYÊN NGÀNH/ĐỒ HOẠ MATLAB/5-Matlab_ly_thuyet_Simulink.pdf",
      "files6/CHUYÊN NGÀNH/ĐỒ HOẠ MATLAB/Giáo trình MATLAB.pdf",
      "files6/CHUYÊN NGÀNH/ĐỒ HOẠ MATLAB/Matlab Cơ bản.pdf",
      "files6/CHUYÊN NGÀNH/ĐỒ HOẠ MATLAB/MATLAB.pdf",
      "files6/CHUYÊN NGÀNH/ĐỒ HOẠ MATLAB/Một số lệnh cơ bản trong Matlab Giải tích.pdf",
      "files6/CHUYÊN NGÀNH/ĐỒ HOẠ MATLAB/MỞ ĐẦU VỀ MATLAB.pdf",
      "files6/CHUYÊN NGÀNH/ĐỒ HOẠ MATLAB/Nhóm lệnh chuyển đổi mô hình.pdf"
    ].map(createFileFromPath)
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
}

async function syncPreviewCounts(doc) {
  if (modalDesc.dataset.docId !== String(doc.id)) return;

  updateVisibleFileCounts(doc);
}

function renderFilePreview(file) {
  const extension = getFileExtension(file.path);
  const encodedPath = escapeHtml(encodeURI(file.path));
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

  return `
    <div class="file-preview-empty">
      <div class="file-preview-empty-icon">${getFileIcon(file.path)}</div>
      <h4>${safeName}</h4>
      <span class="file-preview-count">${visitorCount}</span>
      <p>File này chưa hỗ trợ xem trước trực tiếp trên trình duyệt nên đã chặn mở link để tránh tự động tải về.</p>
    </div>
  `;
}

function renderFileOpenBlocked(file) {
  const safeName = escapeHtml(file.name);
  const visitorCount = renderVisitorLoadingText();

  return `
    <div class="file-preview-empty">
      <div class="file-preview-empty-icon">${getFileIcon(file.path)}</div>
      <h4>${safeName}</h4>
      <span class="file-preview-count">${visitorCount}</span>
      <p>File này không mở trực tiếp trong trình duyệt. Mình đã chặn thao tác này để tránh tự động tải về.</p>
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
  const canOpenInline = extension === "pdf" || isImageFile(extension) || isVideoFile(extension);
  const popup = canOpenInline ? window.open(encodeURI(file.path), "_blank") : null;

  modalDesc.querySelectorAll(".file-item").forEach(item => item.classList.remove("active"));
  modalDesc.querySelector(`[data-preview-item="${fileIndex}"]`)?.classList.add("active");

  if (canOpenInline) {
    previewPanel.innerHTML = renderFilePreview(file);
    recordFileVisit(file, fileIndex);
    if (!popup) {
      window.open(encodeURI(file.path), "_blank");
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
