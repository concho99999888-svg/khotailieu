CREATE DATABASE IF NOT EXISTS kho_tai_lieu
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE kho_tai_lieu;

CREATE TABLE IF NOT EXISTS site_visitors (
  visitor_hash CHAR(64) NOT NULL PRIMARY KEY,
  first_seen DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS file_visitors (
  file_path VARCHAR(512) NOT NULL,
  visitor_hash CHAR(64) NOT NULL,
  first_seen DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (file_path, visitor_hash),
  INDEX idx_file_path (file_path)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
