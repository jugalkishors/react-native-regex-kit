import {
  CITY_PATTERN,
  COUNTRY_PATTERN,
  POSTAL_CODE_PATTERN,
  STATE_PATTERN,
  STREET_ADDRESS_PATTERN,
  UAE_POSTAL_CODE_PATTERN,
  US_ZIP_CODE_PATTERN,
} from '../regex/addressInformation';
import { createValidator } from './utils';

export const isPostalCode = createValidator(POSTAL_CODE_PATTERN);
export const isUaePostalCode = createValidator(UAE_POSTAL_CODE_PATTERN);
export const isUsZipCode = createValidator(US_ZIP_CODE_PATTERN);
export const isStreetAddress = createValidator(STREET_ADDRESS_PATTERN);
export const isCity = createValidator(CITY_PATTERN);
export const isState = createValidator(STATE_PATTERN);
export const isCountry = createValidator(COUNTRY_PATTERN);
