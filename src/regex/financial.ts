/** Generic credit card: 13–19 digits, optional spaces/hyphens. */
export const CREDIT_CARD_NUMBER_PATTERN =
  /^(?:\d{4}[-\s]?){3}\d{1,4}\d{0,3}$/;

/** Visa: starts with 4, 13 or 16 digits. */
export const VISA_CARD_PATTERN = /^4\d{12}(?:\d{3})?$/;

/** Mastercard: 51–55 or 2221–2720 range. */
export const MASTERCARD_PATTERN =
  /^(?:5[1-5]\d{14}|2(?:2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12}))$/;

/** American Express: starts with 34 or 37, 15 digits. */
export const AMERICAN_EXPRESS_PATTERN = /^3[47]\d{13}$/;

/** CVV: 3 or 4 digits. */
export const CVV_PATTERN = /^\d{3,4}$/;

/** IBAN: country code + check digits + alphanumeric (15–34 total). */
export const IBAN_PATTERN =
  /^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/;

/** SWIFT/BIC: 8 or 11 alphanumeric characters. */
export const SWIFT_BIC_PATTERN = /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}(?:[A-Z0-9]{3})?$/;

/** Bank account number: 6–18 digits. */
export const BANK_ACCOUNT_NUMBER_PATTERN = /^\d{6,18}$/;
