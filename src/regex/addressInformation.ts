/** Generic postal / ZIP code: 3–10 alphanumeric, spaces, hyphens. */
export const POSTAL_CODE_PATTERN = /^[A-Za-z0-9\s-]{3,10}$/;

/** UAE postal code (when used): 5 digits. */
export const UAE_POSTAL_CODE_PATTERN = /^\d{5}$/;

/** US ZIP: 12345 or 12345-6789. */
export const US_ZIP_CODE_PATTERN = /^\d{5}(-\d{4})?$/;

/** Street address: number, letters, common punctuation. */
export const STREET_ADDRESS_PATTERN =
  /^[\dA-Za-z\u00C0-\u024F\s.,#'/-]{3,100}$/;

/** City name: letters, spaces, hyphens, apostrophes. */
export const CITY_PATTERN = /^[a-zA-Z\u00C0-\u024F\s'.-]{2,60}$/;

/** State / province: 2–50 letters or abbreviation. */
export const STATE_PATTERN = /^[a-zA-Z\u00C0-\u024F\s'.-]{2,50}$/;

/** Country name: letters, spaces, hyphens, apostrophes. */
export const COUNTRY_PATTERN = /^[a-zA-Z\u00C0-\u024F\s'.-]{2,56}$/;
