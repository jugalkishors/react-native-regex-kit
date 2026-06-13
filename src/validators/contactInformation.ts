import {
  EXTENSION_NUMBER_PATTERN,
  FAX_NUMBER_PATTERN,
  PHONE_INTERNATIONAL_PATTERN,
  UAE_PHONE_PATTERN,
  US_PHONE_PATTERN,
  WHATSAPP_NUMBER_PATTERN,
} from '../regex/contactInformation';
import { createValidator } from './utils';

export const isPhoneInternational = createValidator(PHONE_INTERNATIONAL_PATTERN);
export const isUaePhoneNumber = createValidator(UAE_PHONE_PATTERN);
export const isUsPhoneNumber = createValidator(US_PHONE_PATTERN);
export const isWhatsAppNumber = createValidator(WHATSAPP_NUMBER_PATTERN);
export const isFaxNumber = createValidator(FAX_NUMBER_PATTERN);
export const isExtensionNumber = createValidator(EXTENSION_NUMBER_PATTERN);
