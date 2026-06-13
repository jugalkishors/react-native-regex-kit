import {
  AMERICAN_EXPRESS_PATTERN,
  BANK_ACCOUNT_NUMBER_PATTERN,
  CREDIT_CARD_NUMBER_PATTERN,
  CVV_PATTERN,
  IBAN_PATTERN,
  MASTERCARD_PATTERN,
  SWIFT_BIC_PATTERN,
  VISA_CARD_PATTERN,
} from '../regex/financial';
import { createValidator } from './utils';

export const isCreditCardNumber = createValidator(CREDIT_CARD_NUMBER_PATTERN);
export const isVisaCard = createValidator(VISA_CARD_PATTERN);
export const isMastercard = createValidator(MASTERCARD_PATTERN);
export const isAmericanExpress = createValidator(AMERICAN_EXPRESS_PATTERN);
export const isCvv = createValidator(CVV_PATTERN);
export const isIban = createValidator(IBAN_PATTERN);
export const isSwiftBic = createValidator(SWIFT_BIC_PATTERN);
export const isBankAccountNumber = createValidator(BANK_ACCOUNT_NUMBER_PATTERN);
