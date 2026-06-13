export interface ValidatorOptions {
  trim?: boolean;
  allowEmpty?: boolean;
}

/**
 * Creates a string validator from a RegExp pattern.
 */
export function createValidator(
  pattern: RegExp,
  options: ValidatorOptions = {},
): (value: string) => boolean {
  const { trim = true, allowEmpty = false } = options;

  return (value: string): boolean => {
    if (typeof value !== 'string') {
      return false;
    }

    if (!allowEmpty && value.length === 0) {
      return false;
    }

    const input = trim ? value.trim() : value;

    if (!allowEmpty && input.length === 0) {
      return false;
    }

    return pattern.test(input);
  };
}
