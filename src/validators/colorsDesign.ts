import {
  HEX_COLOR_PATTERN,
  HSLA_COLOR_PATTERN,
  HSL_COLOR_PATTERN,
  RGBA_COLOR_PATTERN,
  RGB_COLOR_PATTERN,
} from '../regex/colorsDesign';
import { createValidator } from './utils';

export const isHexColor = createValidator(HEX_COLOR_PATTERN);
export const isRgbColor = createValidator(RGB_COLOR_PATTERN);
export const isRgbaColor = createValidator(RGBA_COLOR_PATTERN);
export const isHslColor = createValidator(HSL_COLOR_PATTERN);
export const isHslaColor = createValidator(HSLA_COLOR_PATTERN);
