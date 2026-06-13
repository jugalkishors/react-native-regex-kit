/** Date DD/MM/YYYY with valid day/month ranges. */
export const DATE_DD_MM_YYYY_PATTERN =
  /^(?:(?:31\/(?:0[13578]|1[02]))\/\d{4}|(?:29|30)\/(?:0[13-9]|1[0-2])\/\d{4}|(?:0[1-9]|1\d|2[0-8])\/(?:0[1-9]|1[0-2])\/\d{4}|29\/02\/(?:(?:\d{2}(?:0[48]|[2468][048]|[13579][26]))|(?:[02468][048]00|[13579][26]00)))$/;

/** Date MM/DD/YYYY with valid day/month ranges. */
export const DATE_MM_DD_YYYY_PATTERN =
  /^(?:(?:0[13578]|1[02])\/31\/\d{4}|(?:0[13-9]|1[0-2])\/(?:29|30)\/\d{4}|(?:0[1-9]|1[0-2])\/(?:0[1-9]|1\d|2[0-8])\/\d{4}|02\/29\/(?:(?:\d{2}(?:0[48]|[2468][048]|[13579][26]))|(?:[02468][048]00|[13579][26]00)))$/;

/** Date YYYY-MM-DD (ISO 8601 date). */
export const DATE_YYYY_MM_DD_PATTERN =
  /^(?:\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])|\d{4}-02-29)$/;

/** Time HH:mm (24-hour). */
export const TIME_HH_MM_PATTERN = /^(?:[01]\d|2[0-3]):[0-5]\d$/;

/** Time HH:mm:ss (24-hour). */
export const TIME_HH_MM_SS_PATTERN = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

/** 12-hour time with AM/PM. */
export const TIME_12_HOUR_PATTERN =
  /^(?:0?[1-9]|1[0-2]):[0-5]\d(?::[0-5]\d)?\s?(?:[AaPp][Mm])$/;

/** 24-hour time HH:mm or HH:mm:ss. */
export const TIME_24_HOUR_PATTERN =
  /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/;

/** ISO 8601 date YYYY-MM-DD. */
export const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/** ISO 8601 date-time. */
export const ISO_DATETIME_PATTERN =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
