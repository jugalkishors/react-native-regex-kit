import {
  AUDIO_FILE_PATTERN,
  FILE_EXTENSION_PATTERN,
  FILE_NAME_PATTERN,
  IMAGE_FILE_PATTERN,
  PDF_FILE_PATTERN,
  VIDEO_FILE_PATTERN,
} from '../regex/files';
import { createValidator } from './utils';

export const isFileName = createValidator(FILE_NAME_PATTERN);
export const isImageFile = createValidator(IMAGE_FILE_PATTERN);
export const isPdfFile = createValidator(PDF_FILE_PATTERN);
export const isVideoFile = createValidator(VIDEO_FILE_PATTERN);
export const isAudioFile = createValidator(AUDIO_FILE_PATTERN);
export const isFileExtension = createValidator(FILE_EXTENSION_PATTERN);
