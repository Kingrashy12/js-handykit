# JavaScript HandyKit

A light-weight collection of handy Javascript utility functions for everyday development.

## Features

- 🚀 Simple, zero-dependency utility functions
- 📦 Covers common tasks (arrays, strings, objects, dates, numbers, etc.)
- 🔧 Consistent function naming and usage
- 🪶 Light-weight and tree-shakeable
- 🌐 Browser and Node.js compatible

## Installation

```bash
npm install js-handykit
```

## Usage

```javascript
import {
  capitalize,
  debounce,
  deepClone,
  isEmpty,
  slugify,
  throttle,
  truncate,
} from "js-handykit";

// String helpers
console.log(capitalize("hello world", " ", " ")); // 'Hello World'
console.log(truncate("This is a long string", 10)); // 'This is a ...'
console.log(slugify("Hello World!")); // 'hello-world'

// Utility functions
const debouncedFn = debounce(() => console.log("Called after delay"), 300);
const throttledFn = throttle(
  () => console.log("Called at most once per limit"),
  1000
);
console.log(deepClone({ a: 1, b: { c: 2 } })); // Deep cloned object
console.log(isEmpty([])); // true
console.log(isEmpty({})); // true
console.log(isEmpty("")); // true
```

## API

### String Helpers

- `capitalize(str: string, reg: string, joinReg: string): string` - Capitalizes each word in a string based on delimiters.
- `truncate(text: string, len?: number): string` - Truncates a string to the specified length with ellipsis.
- `slugify(text: string): string` - Converts a string to a URL-friendly slug.
- `removeWhitespace(text: string): string` - Removes all whitespace from a string.
- `reverse(text: string): string` - Reverses a string.
- `toCamelCase(text: string): string` - Converts a string to camelCase.
- `toPascalCase(text: string): string` - Converts a string to PascalCase.
- `toSnakeCase(text: string): string` - Converts a string to snake_case.
- `toKebabCase(text: string): string` - Converts a string to kebab-case.
- `wordCount(text: string): number` - Counts the number of words in a string.
- `removeSpecialChars(text: string): string` - Removes all special characters from a string.
- `isPalindrome(text: string): boolean` - Checks if a string is a palindrome.

### Array Helpers

- `groupData<T>({ data, key }: DataGroup<T>): Record<string, T[]>` - Groups an array of objects by a specified key.
- `paginate<T>(data: T[], currentPage: number, itemsPerPage: number): T[]` - Paginates an array of data.
- `removeDuplicatesByPath<T>(arr: T[], path: string): T[]` - Removes duplicates based on a nested key path.
- `sortByKey<T>(arr: T[], key: keyof T): T[]` - Sorts an array of objects by a key.

### Date Helpers

- `formatDate(options: FormatDateOptions): string` - Formats a date according to specified options.
- `formatTime(options: FormatTimeOptions): string` - Formats time according to specified options.
- `formatTimeAgo(date: Date): string` - Returns a human-readable time ago string.
- `formatTimeDiff(startDate: Date, endDate: Date): string` - Returns the time difference between two dates.

### Formatting Helpers

- `formatDuration(time: number): string` - Formats seconds into HH:MM:SS.
- `formatBytes(bytes: number, decimals?: number): string` - Converts bytes to human-readable size.
- `formatNumber(num: number, decimals?: number): string` - Formats numbers with K/M/B suffixes.
- `formatCurrency(value: number, currency: Currency, allowNegativeValue?: boolean): string` - Formats currency values.

### Utility Functions

- `debounce<T>(func: T, wait: number): (...args: Parameters<T>) => void` - Debounces a function call.
- `throttle<T>(func: T, limit: number): (...args: Parameters<T>) => void` - Throttles a function call.
- `deepClone<T>(obj: T): T` - Creates a deep clone of an object.
- `isEmpty(value: any): boolean` - Checks if a value is empty.
- `hasEmptyValues<T>(currentValues: T, fieldsToCheck: Array<keyof T>): boolean` - Checks if fields are empty.
- `hasEqualValues<T>(currentValues: T, fieldsToCompare: Array<keyof T>, referenceValues: T): boolean` - Checks if fields are equal.
- `validateFormFields<T>(form: T, fields: Array<keyof T>, nextFn: () => void, alertFn?: (message: string) => void): void` - Validates form fields and either throws an error or calls the next function.

## Examples

### String Operations

```javascript
import { capitalize, slugify, toCamelCase, isPalindrome } from "js-handykit";

console.log(capitalize("hello world", " ", " ")); // 'Hello World'
console.log(slugify("Hello World!")); // 'hello-world'
console.log(toCamelCase("hello world")); // 'helloWorld'
console.log(isPalindrome("racecar")); // true
```

### Array Operations

```javascript
import { groupData, paginate, sortByKey } from "js-handykit";

const data = [
  { category: "A", name: "Item 1" },
  { category: "B", name: "Item 2" },
  { category: "A", name: "Item 3" },
];

console.log(groupData({ data, key: "category" }));
// { A: [{ category: 'A', name: 'Item 1' }, { category: 'A', name: 'Item 3' }], B: [{ category: 'B', name: 'Item 2' }] }

console.log(paginate([1, 2, 3, 4, 5], 1, 3)); // [1, 2, 3]
console.log(sortByKey(data, "name")); // Sorted by name
```

### Date Operations

```javascript
import { formatDate, formatTimeAgo } from "js-handykit";

console.log(formatDate({ date: new Date(), format: "yyyy-mm-dd" })); // '2023-10-01'
console.log(formatTimeAgo(new Date(Date.now() - 3600000))); // '1 hr ago'
```

### Formatting Operations

```javascript
import { formatBytes, formatNumber, formatCurrency } from "js-handykit";

console.log(formatBytes(1024)); // '1 KB'
console.log(formatNumber(1500)); // '1.50K'
console.log(formatCurrency(1000, "USD")); // '$1,000.00'
```

## License

[MIT](/LICENSE)
