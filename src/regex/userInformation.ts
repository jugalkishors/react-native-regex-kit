/** Standard email format. */
export const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/** 3–30 chars: letters, numbers, underscore, dot (no leading/trailing dot). */
export const USERNAME_PATTERN = /^(?!\.)(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9._]{3,30}$/;

/** Full name: 2–100 letters, spaces, hyphens, apostrophes. */
export const FULL_NAME_PATTERN = /^[a-zA-Z\u00C0-\u024F\s'-]{2,100}$/;

/** First name: 1–50 letters, hyphens, apostrophes. */
export const FIRST_NAME_PATTERN = /^[a-zA-Z\u00C0-\u024F'-]{1,50}$/;

/** Last name: 1–50 letters, hyphens, apostrophes. */
export const LAST_NAME_PATTERN = /^[a-zA-Z\u00C0-\u024F'-]{1,50}$/;

/** Nickname: 2–30 alphanumeric, underscore, or spaces. */
export const NICKNAME_PATTERN = /^[a-zA-Z0-9_\s]{2,30}$/;

/** Display name: 2–50 word chars, spaces, hyphens, apostrophes. */
export const DISPLAY_NAME_PATTERN = /^[\w\s'-]{2,50}$/;

/** Password: 6+ characters. */
export const PASSWORD_PATTERN = /^.{6,}$/;

/** Strong password: 8+ with upper, lower, digit, special char. */
export const STRONG_PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]).{8,}$/;

/** 4-digit PIN. */
export const PIN_4_DIGIT_PATTERN = /^\d{4}$/;

/** 6-digit PIN. */
export const PIN_6_DIGIT_PATTERN = /^\d{6}$/;
