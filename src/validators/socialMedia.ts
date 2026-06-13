import {
  FACEBOOK_USERNAME_PATTERN,
  GITHUB_REPOSITORY_URL_PATTERN,
  GITHUB_USERNAME_PATTERN,
  INSTAGRAM_USERNAME_PATTERN,
  LINKEDIN_PROFILE_URL_PATTERN,
  TIKTOK_USERNAME_PATTERN,
  TWITTER_USERNAME_PATTERN,
} from '../regex/socialMedia';
import { createValidator } from './utils';

export const isInstagramUsername = createValidator(INSTAGRAM_USERNAME_PATTERN);
export const isTwitterUsername = createValidator(TWITTER_USERNAME_PATTERN);
export const isFacebookUsername = createValidator(FACEBOOK_USERNAME_PATTERN);
export const isTikTokUsername = createValidator(TIKTOK_USERNAME_PATTERN);
export const isLinkedInProfileUrl = createValidator(LINKEDIN_PROFILE_URL_PATTERN);
export const isGitHubUsername = createValidator(GITHUB_USERNAME_PATTERN);
export const isGitHubRepositoryUrl = createValidator(GITHUB_REPOSITORY_URL_PATTERN);
