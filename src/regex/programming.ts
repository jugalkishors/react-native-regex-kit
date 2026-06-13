/** Semantic version (SemVer 2.0). */
export const SEMVER_PATTERN =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

/** Package name: scoped or unscoped. */
export const PACKAGE_NAME_PATTERN =
  /^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

/** npm package name (official rules). */
export const NPM_PACKAGE_NAME_PATTERN =
  /^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;

/** Git branch name. */
export const GIT_BRANCH_NAME_PATTERN =
  /^(?!.*\/\/)(?!.*\.\.)(?!@\{)(?!-)[a-zA-Z0-9/_-]+(?<!\.lock)(?<!\/)(?<!\.)$/;

/** Git commit hash: 7–40 hex chars. */
export const GIT_COMMIT_HASH_PATTERN = /^[0-9a-f]{7,40}$/i;

/** URL slug: lowercase letters, numbers, hyphens. */
export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** camelCase identifier. */
export const CAMEL_CASE_PATTERN = /^[a-z][a-zA-Z0-9]*$/;

/** PascalCase identifier. */
export const PASCAL_CASE_PATTERN = /^[A-Z][a-zA-Z0-9]*$/;

/** snake_case identifier. */
export const SNAKE_CASE_PATTERN = /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/;

/** kebab-case identifier. */
export const KEBAB_CASE_PATTERN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
