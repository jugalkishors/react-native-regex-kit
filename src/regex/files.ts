/** File name: no path separators, 1–255 chars. */
export const FILE_NAME_PATTERN = /^[^\\/:*?"<>|]{1,255}$/;

/** Image file extension. */
export const IMAGE_FILE_PATTERN =
  /^.+\.(?:jpe?g|png|gif|bmp|webp|svg|ico|tiff?)$/i;

/** PDF file. */
export const PDF_FILE_PATTERN = /^.+\.pdf$/i;

/** Video file extension. */
export const VIDEO_FILE_PATTERN =
  /^.+\.(?:mp4|avi|mov|wmv|flv|mkv|webm|m4v|mpeg|mpg)$/i;

/** Audio file extension. */
export const AUDIO_FILE_PATTERN =
  /^.+\.(?:mp3|wav|ogg|flac|aac|m4a|wma)$/i;

/** File extension only (with leading dot). */
export const FILE_EXTENSION_PATTERN = /^\.[a-zA-Z0-9]{1,10}$/;
