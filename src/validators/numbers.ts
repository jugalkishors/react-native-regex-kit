import {
  CURRENCY_AMOUNT_PATTERN,
  DECIMAL_NUMBER_PATTERN,
  INTEGER_PATTERN,
  NEGATIVE_INTEGER_PATTERN,
  PERCENTAGE_PATTERN,
  POSITIVE_DECIMAL_PATTERN,
  POSITIVE_INTEGER_PATTERN,
  SCIENTIFIC_NOTATION_PATTERN,
} from '../regex/numbers';
import { createValidator } from './utils';

export const isInteger = createValidator(INTEGER_PATTERN);
export const isPositiveInteger = createValidator(POSITIVE_INTEGER_PATTERN);
export const isNegativeInteger = createValidator(NEGATIVE_INTEGER_PATTERN);
export const isDecimalNumber = createValidator(DECIMAL_NUMBER_PATTERN);
export const isPositiveDecimal = createValidator(POSITIVE_DECIMAL_PATTERN);
export const isCurrencyAmount = createValidator(CURRENCY_AMOUNT_PATTERN);
export const isPercentage = createValidator(PERCENTAGE_PATTERN);
export const isScientificNotation = createValidator(SCIENTIFIC_NOTATION_PATTERN);
