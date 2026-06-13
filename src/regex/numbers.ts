/** Integer (optional sign). */
export const INTEGER_PATTERN = /^-?\d+$/;

/** Positive integer (> 0). */
export const POSITIVE_INTEGER_PATTERN = /^[1-9]\d*$/;

/** Negative integer (< 0). */
export const NEGATIVE_INTEGER_PATTERN = /^-[1-9]\d*$/;

/** Decimal number (optional sign). */
export const DECIMAL_NUMBER_PATTERN = /^-?\d+(?:\.\d+)?$/;

/** Positive decimal (> 0). */
export const POSITIVE_DECIMAL_PATTERN = /^(?:0\.\d*[1-9]\d*|[1-9]\d*(?:\.\d+)?)$/;

/** Currency amount: optional symbol, commas, 2 decimal places. */
export const CURRENCY_AMOUNT_PATTERN =
  /^(?:[$€£¥₹]?\s?)?\d{1,3}(?:,\d{3})*(?:\.\d{2})?$/;

/** Percentage: 0–100 with optional decimals and % sign. */
export const PERCENTAGE_PATTERN =
  /^(?:100(?:\.0+)?|\d{1,2}(?:\.\d+)?)\s?%?$/;

/** Scientific notation. */
export const SCIENTIFIC_NOTATION_PATTERN =
  /^-?(?:\d+(?:\.\d+)?|\.\d+)[eE][+-]?\d+$/;
