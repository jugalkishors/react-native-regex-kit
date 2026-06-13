import {
  DISPLAY_NAME_PATTERN,
  EMAIL_PATTERN,
  FIRST_NAME_PATTERN,
  FULL_NAME_PATTERN,
  LAST_NAME_PATTERN,
  NICKNAME_PATTERN,
  PASSWORD_PATTERN,
  PIN_4_DIGIT_PATTERN,
  PIN_6_DIGIT_PATTERN,
  STRONG_PASSWORD_PATTERN,
  USERNAME_PATTERN,
} from '../regex/userInformation';
import { createValidator } from './utils';

export const isEmail = createValidator(EMAIL_PATTERN);
export const isUsername = createValidator(USERNAME_PATTERN);
export const isFullName = createValidator(FULL_NAME_PATTERN);
export const isFirstName = createValidator(FIRST_NAME_PATTERN);
export const isLastName = createValidator(LAST_NAME_PATTERN);
export const isNickname = createValidator(NICKNAME_PATTERN);
export const isDisplayName = createValidator(DISPLAY_NAME_PATTERN);
export const isPassword = createValidator(PASSWORD_PATTERN);
export const isStrongPassword = createValidator(STRONG_PASSWORD_PATTERN);
export const isPin4Digit = createValidator(PIN_4_DIGIT_PATTERN);
export const isPin6Digit = createValidator(PIN_6_DIGIT_PATTERN);
