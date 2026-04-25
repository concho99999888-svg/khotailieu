<?php
declare(strict_types=1);

const DB_HOST = '127.0.0.1';
const DB_NAME = 'kho_tai_lieu';
const DB_USER = 'root';
const DB_PASS = '';
const DB_CHARSET = 'utf8mb4';
const VISITOR_HASH_SALT = 'kho-tai-lieu-visitor-counter';

function db_connect(): PDO
{
    $serverDsn = 'mysql:host=' . DB_HOST . ';charset=' . DB_CHARSET;
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];

    $serverPdo = new PDO($serverDsn, DB_USER, DB_PASS, $options);
    $serverPdo->exec(
        'CREATE DATABASE IF NOT EXISTS `' . DB_NAME . '` ' .
        'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci'
    );

    $dbDsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET;
    $pdo = new PDO($dbDsn, DB_USER, DB_PASS, $options);
    db_ensure_schema($pdo);

    return $pdo;
}

function db_ensure_schema(PDO $pdo): void
{
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS site_visitors (
            visitor_hash CHAR(64) NOT NULL PRIMARY KEY,
            first_seen DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
    );

    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS file_visitors (
            file_path VARCHAR(512) NOT NULL,
            visitor_hash CHAR(64) NOT NULL,
            first_seen DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (file_path, visitor_hash),
            INDEX idx_file_path (file_path)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
    );
}
