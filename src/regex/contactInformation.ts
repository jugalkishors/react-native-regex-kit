/** International phone (E.164 style): optional +, 7–15 digits. */
export const PHONE_INTERNATIONAL_PATTERN = /^\+?[1-9]\d{6,14}$/;

/** UAE mobile: +971 / 00971 / 0 prefix, then 5x + 7 digits. */
export const UAE_PHONE_PATTERN =
  /^(?:\+971|00971|0)?5[024568]\d{7}$/;

/** US phone: optional +1, area code 2–9, exchange 2–9, 4 digits. */
export const US_PHONE_PATTERN =
  /^(?:\+1[-.\s]?)?(?:\([2-9]\d{2}\)|[2-9]\d{2})[-.\s]?[2-9]\d{2}[-.\s]?\d{4}$/;

/** WhatsApp number: international format with optional +. */
export const WHATSAPP_NUMBER_PATTERN = /^\+?[1-9]\d{6,14}$/;

/** Fax number: digits with optional +, spaces, hyphens, parens. */
export const FAX_NUMBER_PATTERN =
  /^\+?[\d\s().-]{7,20}$/;

/** Phone extension: 1–6 digits. */
export const EXTENSION_NUMBER_PATTERN = /^\d{1,6}$/;
