import {
  API_KEY_FORMAT_PATTERN,
  BASE64_STRING_PATTERN,
  BCRYPT_HASH_PATTERN,
  JWT_TOKEN_PATTERN,
  MD5_HASH_PATTERN,
  SHA256_HASH_PATTERN,
} from '../regex/security';
import { createValidator } from './utils';

export const isJwtToken = createValidator(JWT_TOKEN_PATTERN);
export const isApiKeyFormat = createValidator(API_KEY_FORMAT_PATTERN);
export const isBase64String = createValidator(BASE64_STRING_PATTERN);
export const isSha256Hash = createValidator(SHA256_HASH_PATTERN);
export const isMd5Hash = createValidator(MD5_HASH_PATTERN);
export const isBcryptHash = createValidator(BCRYPT_HASH_PATTERN);
