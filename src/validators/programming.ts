import {
  CAMEL_CASE_PATTERN,
  GIT_BRANCH_NAME_PATTERN,
  GIT_COMMIT_HASH_PATTERN,
  KEBAB_CASE_PATTERN,
  NPM_PACKAGE_NAME_PATTERN,
  PACKAGE_NAME_PATTERN,
  PASCAL_CASE_PATTERN,
  SEMVER_PATTERN,
  SLUG_PATTERN,
  SNAKE_CASE_PATTERN,
} from '../regex/programming';
import { createValidator } from './utils';

export const isSemver = createValidator(SEMVER_PATTERN);
export const isPackageName = createValidator(PACKAGE_NAME_PATTERN);
export const isNpmPackageName = createValidator(NPM_PACKAGE_NAME_PATTERN);
export const isGitBranchName = createValidator(GIT_BRANCH_NAME_PATTERN);
export const isGitCommitHash = createValidator(GIT_COMMIT_HASH_PATTERN);
export const isSlug = createValidator(SLUG_PATTERN);
export const isCamelCase = createValidator(CAMEL_CASE_PATTERN);
export const isPascalCase = createValidator(PASCAL_CASE_PATTERN);
export const isSnakeCase = createValidator(SNAKE_CASE_PATTERN);
export const isKebabCase = createValidator(KEBAB_CASE_PATTERN);
