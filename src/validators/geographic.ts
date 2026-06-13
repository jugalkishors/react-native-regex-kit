import {
  COORDINATES_PATTERN,
  COUNTRY_CODE_PATTERN,
  CURRENCY_CODE_PATTERN,
  LATITUDE_PATTERN,
  LONGITUDE_PATTERN,
} from '../regex/geographic';
import { createValidator } from './utils';

export const isLatitude = createValidator(LATITUDE_PATTERN);
export const isLongitude = createValidator(LONGITUDE_PATTERN);
export const isCoordinates = createValidator(COORDINATES_PATTERN);
export const isCountryCode = createValidator(COUNTRY_CODE_PATTERN);
export const isCurrencyCode = createValidator(CURRENCY_CODE_PATTERN);
