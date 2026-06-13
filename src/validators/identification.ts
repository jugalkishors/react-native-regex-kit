import {
  DRIVER_LICENSE_NUMBER_PATTERN,
  NATIONAL_ID_PATTERN,
  PASSPORT_NUMBER_PATTERN,
  TAX_ID_PATTERN,
  UUID_PATTERN,
  UUID_V4_PATTERN,
} from '../regex/identification';
import { createValidator } from './utils';

export const isUuidV4 = createValidator(UUID_V4_PATTERN);
export const isUuid = createValidator(UUID_PATTERN);
export const isPassportNumber = createValidator(PASSPORT_NUMBER_PATTERN);
export const isNationalId = createValidator(NATIONAL_ID_PATTERN);
export const isDriverLicenseNumber = createValidator(DRIVER_LICENSE_NUMBER_PATTERN);
export const isTaxId = createValidator(TAX_ID_PATTERN);
