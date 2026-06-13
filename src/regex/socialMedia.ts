/** Instagram username: 1–30 chars, letters, numbers, underscore, period. */
export const INSTAGRAM_USERNAME_PATTERN = /^(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9._]{1,30}$/;

/** X/Twitter username: 1–15 alphanumeric or underscore. */
export const TWITTER_USERNAME_PATTERN = /^[a-zA-Z0-9_]{1,15}$/;

/** Facebook username: 5–50 alphanumeric or period. */
export const FACEBOOK_USERNAME_PATTERN = /^[a-zA-Z0-9.]{5,50}$/;

/** TikTok username: 2–24 chars, letters, numbers, underscore, period. */
export const TIKTOK_USERNAME_PATTERN = /^[a-zA-Z0-9._]{2,24}$/;

/** LinkedIn profile URL. */
export const LINKEDIN_PROFILE_URL_PATTERN =
  /^https?:\/\/(?:www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{3,100}\/?$/;

/** GitHub username: 1–39 chars, alphanumeric or hyphen (no leading/trailing hyphen). */
export const GITHUB_USERNAME_PATTERN = /^(?!-)(?!.*--)[a-zA-Z0-9-]{1,39}(?<!-)$/;

/** GitHub repository URL. */
export const GITHUB_REPOSITORY_URL_PATTERN =
  /^https?:\/\/(?:www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9._-]+\/?$/;
