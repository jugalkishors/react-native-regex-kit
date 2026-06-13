/** Latitude: -90 to 90. */
export const LATITUDE_PATTERN =
  /^-?(?:[0-8]?\d(?:\.\d+)?|90(?:\.0+)?)$/;

/** Longitude: -180 to 180. */
export const LONGITUDE_PATTERN =
  /^-?(?:1[0-7]\d(?:\.\d+)?|[0-9]?\d(?:\.\d+)?|180(?:\.0+)?)$/;

/** Coordinates: lat, long (comma or space separated). */
export const COORDINATES_PATTERN =
  /^-?(?:[0-8]?\d(?:\.\d+)?|90(?:\.0+)?)\s*,\s*-?(?:1[0-7]\d(?:\.\d+)?|[0-9]?\d(?:\.\d+)?|180(?:\.0+)?)$/;

/** ISO 3166-1 alpha-2 country code. */
export const COUNTRY_CODE_PATTERN = /^[A-Z]{2}$/;

/** ISO 4217 currency code. */
export const CURRENCY_CODE_PATTERN = /^[A-Z]{3}$/;
