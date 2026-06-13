/** Hex color: #RGB or #RRGGBB or #RRGGBBAA. */
export const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

/** RGB color: rgb(r, g, b). */
export const RGB_COLOR_PATTERN =
  /^rgb\(\s*(?:25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*(?:25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*(?:25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/i;

/** RGBA color: rgba(r, g, b, a). */
export const RGBA_COLOR_PATTERN =
  /^rgba\(\s*(?:25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*(?:25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*(?:25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*(?:0|1|0?\.\d+|1\.0+)\s*\)$/i;

/** HSL color: hsl(h, s%, l%). */
export const HSL_COLOR_PATTERN =
  /^hsl\(\s*(?:360|3[0-5]\d|[12]?\d{1,2})\s*,\s*(?:100|\d{1,2})%\s*,\s*(?:100|\d{1,2})%\s*\)$/i;

/** HSLA color: hsla(h, s%, l%, a). */
export const HSLA_COLOR_PATTERN =
  /^hsla\(\s*(?:360|3[0-5]\d|[12]?\d{1,2})\s*,\s*(?:100|\d{1,2})%\s*,\s*(?:100|\d{1,2})%\s*,\s*(?:0|1|0?\.\d+|1\.0+)\s*\)$/i;
