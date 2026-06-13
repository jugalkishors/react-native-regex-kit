/** JWT token: header.payload.signature. */
export const JWT_TOKEN_PATTERN =
  /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;

/** API key format: 16–64 alphanumeric, underscore, hyphen. */
export const API_KEY_FORMAT_PATTERN = /^[A-Za-z0-9_-]{16,64}$/;

/** Base64 string (standard, with optional padding). */
export const BASE64_STRING_PATTERN =
  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

/** SHA-256 hash (64 hex chars). */
export const SHA256_HASH_PATTERN = /^[a-fA-F0-9]{64}$/;

/** MD5 hash (32 hex chars). */
export const MD5_HASH_PATTERN = /^[a-fA-F0-9]{32}$/;

/** BCrypt hash. */
export const BCRYPT_HASH_PATTERN =
  /^\$2[aby]?\$\d{2}\$[./A-Za-z0-9]{53}$/;
