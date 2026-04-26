# Kho Tai Lieu

Website kho tai lieu HTML/CSS/JS. Bo dem truy cap cong khai dung API JSON cua visitor-badge, khong can PHP/MySQL.

## Chay local

Mo truc tiep file:

```text
index.html
```

Hoac chay server tinh bat ky.

Neu dung trang admin thiet bi that, can chay qua PHP:

```bash
php -S 127.0.0.1:8000 -t .
```

Mo:

```text
http://127.0.0.1:8000/index.html
http://127.0.0.1:8000/admin.html
```

## Dua len GitHub Pages

Vi project nay khong con dung PHP/MySQL, co the deploy len GitHub Pages.

1. Day code len GitHub:

```bash
git init
git add .
git commit -m "Use visitor badge counter"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

2. Vao repository tren GitHub:

```text
Settings -> Pages
```

3. Chon:

```text
Deploy from a branch
Branch: main
Folder: /root
```

4. Mo link GitHub Pages GitHub cap.

## Bo dem truy cap

Bo dem dung endpoint count cua visitor-badge.one9x.com:

```text
https://visitor-badge.one9x.com/count
```

- Vao web: tang counter `site`.
- Xem/mo file: tang counter rieng cua file.
- So dem la cong khai va moi nguoi cung thay.
- Bo dem duoc hien bang chu truc tiep, khong dung anh SVG/badge.

Luu y: tuy chon `unique=true` cua dich vu nay co chan trung theo mot khoang thoi gian, nhung neu can chinh xac tuyet doi "cung IP khong cong don", can dung backend rieng nhu PHP/MySQL.

## Them tai lieu

1. Cho file vao thu muc:

```text
files/
```

2. Them entry vao mang `documents` trong:

```text
script.js
```
