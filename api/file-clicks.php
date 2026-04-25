<?php
declare(strict_types=1);

require_once __DIR__ . '/db.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function get_client_ip(): string
{
    if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
        return (string)$_SERVER['HTTP_CF_CONNECTING_IP'];
    }

    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $parts = explode(',', (string)$_SERVER['HTTP_X_FORWARDED_FOR']);
        return trim($parts[0]);
    }

    return (string)($_SERVER['REMOTE_ADDR'] ?? 'unknown');
}

function valid_file_path(string $file): bool
{
    return $file !== ''
        && strpos($file, '..') === false
        && preg_match('/^files\/.+/u', $file) === 1;
}

function get_visitor_hash(): string
{
    return hash('sha256', get_client_ip() . '|' . VISITOR_HASH_SALT);
}

function fetch_counts(PDO $pdo): array
{
    $siteVisitors = (int)$pdo->query('SELECT COUNT(*) FROM site_visitors')->fetchColumn();
    $fileVisitors = [];
    $stmt = $pdo->query(
        'SELECT file_path, COUNT(*) AS total
         FROM file_visitors
         GROUP BY file_path'
    );

    foreach ($stmt as $row) {
        $fileVisitors[(string)$row['file_path']] = (int)$row['total'];
    }

    return [
        'siteVisitors' => $siteVisitors,
        'fileVisitors' => $fileVisitors,
        'clicks' => $fileVisitors,
    ];
}

try {
    $pdo = db_connect();
} catch (Throwable $error) {
    respond([
        'error' => 'Database connection failed',
        'message' => $error->getMessage(),
    ], 500);
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    respond(fetch_counts($pdo));
}

if ($method !== 'POST') {
    respond(['error' => 'Method not allowed'], 405);
}

$payload = json_decode(file_get_contents('php://input') ?: '{}', true);
$payload = is_array($payload) ? $payload : [];
$type = (string)($payload['type'] ?? '');
$file = trim((string)($payload['file'] ?? ''));
$visitorHash = get_visitor_hash();

if ($type !== 'site' && $type !== 'file') {
    respond(['error' => 'Invalid type'], 400);
}

if ($type === 'file' && !valid_file_path($file)) {
    respond(['error' => 'Invalid file'], 400);
}

try {
    if ($type === 'site') {
        $stmt = $pdo->prepare(
            'INSERT IGNORE INTO site_visitors (visitor_hash) VALUES (:visitor_hash)'
        );
        $stmt->execute(['visitor_hash' => $visitorHash]);
    }

    if ($type === 'file') {
        $stmt = $pdo->prepare(
            'INSERT IGNORE INTO file_visitors (file_path, visitor_hash)
             VALUES (:file_path, :visitor_hash)'
        );
        $stmt->execute([
            'file_path' => $file,
            'visitor_hash' => $visitorHash,
        ]);
    }

    $counts = fetch_counts($pdo);
    $counts['file'] = $file;
    $counts['count'] = $type === 'site'
        ? $counts['siteVisitors']
        : ($counts['fileVisitors'][$file] ?? 0);

    respond($counts);
} catch (Throwable $error) {
    respond([
        'error' => 'Database write failed',
        'message' => $error->getMessage(),
    ], 500);
}
