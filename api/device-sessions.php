<?php
declare(strict_types=1);

date_default_timezone_set('Asia/Ho_Chi_Minh');

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$storageDir = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'data';
$storageFile = $storageDir . DIRECTORY_SEPARATOR . 'device-sessions.json';

function sendJson(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function cleanText($value, int $maxLength = 120): string
{
    $text = trim((string) $value);
    $text = preg_replace('/\s+/u', ' ', $text) ?? '';

    if (function_exists('mb_substr')) {
        return mb_substr($text, 0, $maxLength, 'UTF-8');
    }

    return substr($text, 0, $maxLength);
}

function ensureStorage(string $dir, string $file): void
{
    if (!is_dir($dir) && !mkdir($dir, 0775, true) && !is_dir($dir)) {
        sendJson(['error' => 'Cannot create data directory'], 500);
    }

    if (!file_exists($file) && file_put_contents($file, "[]\n", LOCK_EX) === false) {
        sendJson(['error' => 'Cannot create device storage'], 500);
    }
}

function readDevices(string $file): array
{
    $content = file_get_contents($file);
    if ($content === false || trim($content) === '') {
        return [];
    }

    $devices = json_decode($content, true);

    return is_array($devices) ? $devices : [];
}

function saveDevices(string $file, array $devices): void
{
    $json = json_encode(array_values($devices), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    if ($json === false || file_put_contents($file, $json . "\n", LOCK_EX) === false) {
        sendJson(['error' => 'Cannot save device storage'], 500);
    }
}

function getClientIp(): string
{
    $candidates = [
        $_SERVER['HTTP_CF_CONNECTING_IP'] ?? '',
        $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '',
        $_SERVER['HTTP_CLIENT_IP'] ?? '',
        $_SERVER['REMOTE_ADDR'] ?? ''
    ];

    foreach ($candidates as $candidate) {
        $ip = trim(explode(',', (string) $candidate)[0]);
        if (filter_var($ip, FILTER_VALIDATE_IP)) {
            return $ip;
        }
    }

    return 'unknown';
}

function isPrivateIp(string $ip): bool
{
    if ($ip === 'unknown') {
        return false;
    }

    return filter_var(
        $ip,
        FILTER_VALIDATE_IP,
        FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE
    ) === false;
}

function estimateLocation(string $ip, array $payload): string
{
    if ($ip === '127.0.0.1' || $ip === '::1') {
        return 'Localhost';
    }

    if (isPrivateIp($ip)) {
        return 'Mạng nội bộ';
    }

    $timezone = cleanText($payload['timezone'] ?? '', 80);
    if ($timezone !== '') {
        return $timezone . ' (ước lượng theo múi giờ)';
    }

    return 'Không xác định';
}

function relativeTime(int $timestamp): string
{
    $seconds = max(0, time() - $timestamp);

    if ($seconds < 60) {
        return 'Vừa xong';
    }

    if ($seconds < 3600) {
        return floor($seconds / 60) . ' phút trước';
    }

    if ($seconds < 86400) {
        return floor($seconds / 3600) . ' giờ trước';
    }

    return floor($seconds / 86400) . ' ngày trước';
}

function publicDevice(array $device): array
{
    $lastSeenAt = (int) ($device['lastSeenAt'] ?? time());
    $loginTimeAt = (int) ($device['loginTimeAt'] ?? $lastSeenAt);

    return [
        'id' => (string) ($device['id'] ?? ''),
        'user' => (string) ($device['user'] ?? 'guest'),
        'device' => (string) ($device['device'] ?? 'Thiết bị không rõ'),
        'os' => (string) ($device['os'] ?? 'Không rõ'),
        'browser' => (string) ($device['browser'] ?? 'Không rõ'),
        'ip' => (string) ($device['ip'] ?? 'unknown'),
        'lastSeen' => relativeTime($lastSeenAt),
        'location' => (string) ($device['location'] ?? 'Không xác định'),
        'loginTime' => date('d/m/Y H:i:s', $loginTimeAt),
        'token' => (string) ($device['token'] ?? ''),
        'hits' => (int) ($device['hits'] ?? 1)
    ];
}

ensureStorage($storageDir, $storageFile);

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    $devices = readDevices($storageFile);
    usort($devices, static fn(array $a, array $b): int => ((int) ($b['lastSeenAt'] ?? 0)) <=> ((int) ($a['lastSeenAt'] ?? 0)));

    sendJson([
        'devices' => array_map('publicDevice', $devices),
        'total' => count($devices)
    ]);
}

if ($method !== 'POST') {
    sendJson(['error' => 'Method not allowed'], 405);
}

$payload = json_decode(file_get_contents('php://input') ?: '{}', true);
if (!is_array($payload)) {
    sendJson(['error' => 'Invalid JSON body'], 400);
}

$sessionId = cleanText($payload['sessionId'] ?? '', 180);
if ($sessionId === '') {
    $sessionId = 'sess_' . bin2hex(random_bytes(16));
}

$id = hash('sha256', $sessionId);
$now = time();
$ip = getClientIp();
$devices = readDevices($storageFile);
$existingIndex = null;

foreach ($devices as $index => $device) {
    if (($device['id'] ?? '') === $id) {
        $existingIndex = $index;
        break;
    }
}

$existing = $existingIndex === null ? [] : $devices[$existingIndex];
$loginTimeAt = (int) ($existing['loginTimeAt'] ?? $now);
$hits = (int) ($existing['hits'] ?? 0) + 1;
$userAgent = cleanText($_SERVER['HTTP_USER_AGENT'] ?? ($payload['userAgent'] ?? ''), 300);

$device = [
    'id' => $id,
    'user' => cleanText($payload['user'] ?? 'guest', 80) ?: 'guest',
    'device' => cleanText($payload['deviceName'] ?? 'Thiết bị không rõ', 120) ?: 'Thiết bị không rõ',
    'os' => cleanText($payload['os'] ?? 'Không rõ', 80) ?: 'Không rõ',
    'browser' => cleanText($payload['browser'] ?? 'Không rõ', 80) ?: 'Không rõ',
    'ip' => $ip,
    'location' => estimateLocation($ip, $payload),
    'loginTimeAt' => $loginTimeAt,
    'lastSeenAt' => $now,
    'token' => $sessionId,
    'userAgent' => $userAgent,
    'language' => cleanText($payload['language'] ?? '', 30),
    'timezone' => cleanText($payload['timezone'] ?? '', 80),
    'hits' => $hits
];

if ($existingIndex === null) {
    $devices[] = $device;
} else {
    $devices[$existingIndex] = $device;
}

saveDevices($storageFile, $devices);

sendJson([
    'ok' => true,
    'device' => publicDevice($device)
]);
