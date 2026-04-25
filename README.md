# Kho Tai Lieu

Website kho tai lieu HTML/CSS/JS co API PHP va MySQL de dem nguoi truy cap cong khai.

## Luu y quan trong

GitHub Pages khong chay PHP/MySQL. Neu can tinh nang dem nguoi truy cap web/file cong khai, hay chay bang XAMPP hoac deploy len hosting co PHP + MySQL.

GitHub chi nen dung de luu source code va quan ly phien ban.

## Chay tren XAMPP

1. Copy project vao:

```text
C:\xampp\htdocs\shope
```

2. Mo XAMPP Control Panel va bat:

```text
Apache
MySQL
```

3. Tao database bang mot trong hai cach:

Cach nhanh: API se tu tao database va bang neu user MySQL co quyen tao database.

Hoac import thu cong:

```text
http://localhost/phpmyadmin
```

Import file:

```text
database.sql
```

4. Mo web:

```text
http://localhost/shope/index.html
```

5. Test API:

```text
http://localhost/shope/api/file-clicks.php
```

Neu dung, API se tra JSON tuong tu:

```json
{
  "siteVisitors": 0,
  "fileVisitors": {},
  "clicks": {}
}
```

## Cau hinh database

File cau hinh:

```text
api/db.php
```

Mac dinh cho XAMPP:

```php
const DB_HOST = '127.0.0.1';
const DB_NAME = 'kho_tai_lieu';
const DB_USER = 'root';
const DB_PASS = '';
```

Neu len hosting, doi `DB_NAME`, `DB_USER`, `DB_PASS` theo thong tin hosting cung cap.

## Cach dem truy cap

- Moi IP vao web chi duoc tinh 1 lan trong bang `site_visitors`.
- Moi IP truy cap mot file chi duoc tinh 1 lan cho file do trong bang `file_visitors`.
- IP duoc bam hash truoc khi luu, khong luu IP tho.
- So truy cap web/file duoc lay tu MySQL va hien cong khai tren giao dien.

## Dua source len GitHub

Chay trong thu muc project:

```bash
git init
git add .
git commit -m "Use MySQL visitor counter"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```
