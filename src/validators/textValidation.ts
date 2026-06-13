import {
  ALPHABET_ONLY_PATTERN,
  ALPHANUMERIC_PATTERN,
  ALPHANUMERIC_WITH_SPACES_PATTERN,
  CONTAINS_SPECIAL_CHARACTER_PATTERN,
  ENDS_WITH_NUMBER_PATTERN,
  LOWERCASE_ONLY_PATTERN,
  NO_SPACES_PATTERN,
  NUMBERS_ONLY_PATTERN,
  STARTS_WITH_LETTER_PATTERN,
  UPPERCASE_ONLY_PATTERN,
} from '../regex/textValidation';
import { createValidator } from './utils';

export const isAlphabetOnly = createValidator(ALPHABET_ONLY_PATTERN);
export const isNumbersOnly = createValidator(NUMBERS_ONLY_PATTERN);
export const isAlphanumeric = createValidator(ALPHANUMERIC_PATTERN);
export const isAlphanumericWithSpaces = createValidator(ALPHANUMERIC_WITH_SPACES_PATTERN);
export const isUppercaseOnly = createValidator(UPPERCASE_ONLY_PATTERN);
export const isLowercaseOnly = createValidator(LOWERCASE_ONLY_PATTERN);
export const isNoSpaces = createValidator(NO_SPACES_PATTERN);
export const isStartsWithLetter = createValidator(STARTS_WITH_LETTER_PATTERN);
export const isEndsWithNumber = createValidator(ENDS_WITH_NUMBER_PATTERN);
export const isContainsSpecialCharacter = createValidator(CONTAINS_SPECIAL_CHARACTER_PATTERN);
