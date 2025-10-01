/**
 * Capitalizes each word in a string based on the specified delimiters.
 */
export function capitalize(
  str: string,
  separator: string,
  joinSeparator: string
): string {
  return str
    .toLowerCase()
    .split(separator)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(joinSeparator);
}

/**
 * Truncates a string to the specified length and appends "..." if truncated.
 */
export function truncate(text: string, len = 10): string {
  return text.length > len ? text.slice(0, len) + "..." : text;
}

/**
 * Converts a string to a URL-friendly slug by removing spaces and special characters.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Removes all whitespace (spaces, tabs, new lines) from a string.
 */
export function removeWhitespace(text: string): string {
  return text.replace(/\s+/g, "");
}

/**
 * Reverses a given string.
 */
export function reverse(text: string): string {
  return text.split("").reverse().join("");
}

/**
 * Converts a string to camelCase.
 */
export function toCamelCase(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
}

/**
 * Converts a string to PascalCase.
 */
export function toPascalCase(text: string): string {
  return text.replace(/(^\w|[-_\s]\w)/g, (match) =>
    match.replace(/[-_\s]/, "").toUpperCase()
  );
}

/**
 * Converts a string to snake_case.
 */
export function toSnakeCase(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w-]/g, "")
    .replace(/-+/g, "_");
}

/**
 * Converts a string to kebab-case.
 */
export function toKebabCase(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/_+/g, "-");
}

/**
 * Counts the number of words in a string.
 */
export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Removes all special characters from a string.
 */
export function removeSpecialChars(text: string): string {
  return text.replace(/[^\w\s]/gi, "");
}

/**
 * Checks if a string is a palindrome (same forward and backward).
 */
export function isPalindrome(text: string): boolean {
  const cleanStr = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}
