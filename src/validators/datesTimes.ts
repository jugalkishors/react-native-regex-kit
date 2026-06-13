import {
  DATE_DD_MM_YYYY_PATTERN,
  DATE_MM_DD_YYYY_PATTERN,
  DATE_YYYY_MM_DD_PATTERN,
  ISO_DATETIME_PATTERN,
  ISO_DATE_PATTERN,
  TIME_12_HOUR_PATTERN,
  TIME_24_HOUR_PATTERN,
  TIME_HH_MM_PATTERN,
  TIME_HH_MM_SS_PATTERN,
} from '../regex/datesTimes';
import { createValidator } from './utils';

export const isDateDdMmYyyy = createValidator(DATE_DD_MM_YYYY_PATTERN);
export const isDateMmDdYyyy = createValidator(DATE_MM_DD_YYYY_PATTERN);
export const isDateYyyyMmDd = createValidator(DATE_YYYY_MM_DD_PATTERN);
export const isTimeHhMm = createValidator(TIME_HH_MM_PATTERN);
export const isTimeHhMmSs = createValidator(TIME_HH_MM_SS_PATTERN);
export const isTime12Hour = createValidator(TIME_12_HOUR_PATTERN);
export const isTime24Hour = createValidator(TIME_24_HOUR_PATTERN);
export const isIsoDate = createValidator(ISO_DATE_PATTERN);
export const isIsoDateTime = createValidator(ISO_DATETIME_PATTERN);
