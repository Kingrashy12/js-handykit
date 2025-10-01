export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as T;
  if (Array.isArray(obj)) return obj.map((item) => deepClone(item)) as T;
  const clonedObj = {} as T;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

export function isEmpty(value: any): boolean {
  if (value == null) return true;
  if (Array.isArray(value) || typeof value === "string")
    return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}

/**
 * Checks if any of the specified fields are empty or falsy in the given object.
 *
 * @template T - The type of the object being checked.
 * @param {T} currentValues - The object containing values to check.
 * @param {Array<keyof T>} fieldsToCheck - An array of field names to validate for non-empty values.
 * @returns {boolean} Returns `true` if any field is empty or falsy; otherwise, `false`.
 *
 * @example
 * const form = { name: "John", email: "" };
 * disableOnEmptyValues(form, ["name", "email"]); // => true (email is empty)
 *
 * const form2 = { name: "Jane", email: "jane@example.com" };
 * disableOnEmptyValues(form2, ["name", "email"]); // => false (all fields filled)
 */
export const disableOnEmptyValues = <T>(
  currentValues: T,
  fieldsToCheck: Array<keyof T>
) => {
  const allFieldsFilled = fieldsToCheck.every((field) => currentValues[field]);
  return !allFieldsFilled;
};

/**
 * Checks if specified fields have equal values between two objects.
 *
 * @template T - The type of the objects being compared.
 * @param {T} currentValues - The current object containing values to check.
 * @param {Array<keyof T>} fieldsToCompare - An array of field names to compare between the two objects.
 * @param {T} referenceValues - The reference object to compare against.
 * @returns {boolean} Returns `true` if all specified fields have equal values; otherwise, `false`.
 *
 * @example
 * const current = { name: "John", age: 25 };
 * const reference = { name: "John", age: 25 };
 * disableOnEqualValues(current, ["name", "age"], reference); // => true
 *
 * const current2 = { name: "Jane", age: 30 };
 * disableOnEqualValues(current2, ["name", "age"], reference); // => false
 */
export const disableOnEqualValues = <T>(
  currentValues: T,
  fieldsToCompare: Array<keyof T>,
  referenceValues: T
) => {
  const areValuesEqual = fieldsToCompare.every(
    (field) => currentValues[field] === referenceValues[field]
  );
  return areValuesEqual;
};
