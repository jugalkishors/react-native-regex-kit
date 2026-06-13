/** Letters only (Unicode letters supported). */
export const ALPHABET_ONLY_PATTERN = /^[\p{L}]+$/u;

/** Digits only. */
export const NUMBERS_ONLY_PATTERN = /^\d+$/;

/** Alphanumeric only. */
export const ALPHANUMERIC_PATTERN = /^[a-zA-Z0-9]+$/;

/** Alphanumeric with spaces. */
export const ALPHANUMERIC_WITH_SPACES_PATTERN = /^[a-zA-Z0-9\s]+$/;

/** Uppercase letters only. */
export const UPPERCASE_ONLY_PATTERN = /^[A-Z]+$/;

/** Lowercase letters only. */
export const LOWERCASE_ONLY_PATTERN = /^[a-z]+$/;

/** No spaces allowed. */
export const NO_SPACES_PATTERN = /^\S+$/;

/** Must start with a letter. */
export const STARTS_WITH_LETTER_PATTERN = /^[a-zA-Z].*$/;

/** Must end with a digit. */
export const ENDS_WITH_NUMBER_PATTERN = /^.*\d$/;

/** Contains at least one special character. */
export const CONTAINS_SPECIAL_CHARACTER_PATTERN =
  /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/;
