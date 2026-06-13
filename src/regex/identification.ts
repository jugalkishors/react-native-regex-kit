/** UUID version 4. */
export const UUID_V4_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/** UUID any version (1–5). */
export const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/** Passport number: 6–9 alphanumeric characters. */
export const PASSPORT_NUMBER_PATTERN = /^[A-Z0-9]{6,9}$/i;

/** National ID: 8–12 alphanumeric characters. */
export const NATIONAL_ID_PATTERN = /^[A-Z0-9]{8,12}$/i;

/** Driver license: 5–15 alphanumeric characters. */
export const DRIVER_LICENSE_NUMBER_PATTERN = /^[A-Z0-9]{5,15}$/i;

/** Tax ID / EIN (US style): XX-XXXXXXX. */
export const TAX_ID_PATTERN = /^\d{2}-\d{7}$/;
