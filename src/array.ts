import { DataGroup } from "./types";

/**
 * Groups an array of objects by a specified key.
 *
 * @template T - The type of objects in the data array.
 * @param {Object} params - The function parameters.
 * @param {T[]} params.data - The array of objects to be grouped.
 * @param {keyof T} params.key - The key to group by.
 * @returns {Record<string, T[]>} An object where the keys are the unique values of the specified key and the values are arrays of matching objects.
 *
 * @example
 * const data = [
 *   { category: "A", name: "Item 1" },
 *   { category: "B", name: "Item 2" },
 *   { category: "A", name: "Item 3" }
 * ];
 *
 * const grouped = groupData({ data, key: "category" });
 * console.log(grouped);
 * // {
 * //   A: [{ category: "A", name: "Item 1" }, { category: "A", name: "Item 3" }],
 * //   B: [{ category: "B", name: "Item 2" }]
 * // }
 */
export const groupData = <T>({
  data,
  key,
}: DataGroup<T>): Record<string, T[]> => {
  const grouped: Record<string, T[]> = {};

  for (const item of data) {
    const group_key = String(item[key]);

    if (!grouped[group_key]) {
      grouped[group_key] = [];
    }

    grouped[group_key].push(item);
  }

  return grouped;
};

/**
 * Paginates an array of data by slicing it according to the current page and the number of items per page.
 *
 * @template T - The type of the data being paginated.
 * @param {T[]} data - The array of data to paginate.
 * @param {number} currentPage - The current page number (1-based index).
 * @param {number} itemsPerPage - The number of items to display per page.
 * @returns {T[]} A sliced array of data corresponding to the specified page and items per page.
 *
 * @example
 * const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * paginate(data, 1, 3); // => [1, 2, 3]
 * paginate(data, 2, 3); // => [4, 5, 6]
 * paginate(data, 3, 3); // => [7, 8, 9]
 * paginate(data, 4, 3); // => [10]
 */
export const paginate = <T>(
  data: T[],
  currentPage: number,
  itemsPerPage: number
) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
};

/**
 * Removes duplicate objects from an array based on a nested key path.
 *
 * @template T - The type of the objects in the array.
 * @param {T[]} arr - The array of objects to filter.
 * @param {string} path - The path to the key (supports nested keys with dot notation, e.g., "address.street").
 * @returns {T[]} A new array containing only unique objects based on the specified key path.
 *
 * @example
 * const arr = [
 *   { name: "John", address: { street: "st1" } },
 *   { name: "Jane", address: { street: "st2" } },
 *   { name: "Doe", address: { street: "st1" } }
 * ];
 *
 * removeDuplicatesByPath(arr, "address.street");
 * // => [{ name: "John", address: { street: "st1" } }, { name: "Jane", address: { street: "st2" } }]
 */
export const removeDuplicatesByPath = <T>(arr: T[], path: string): T[] => {
  const uniqueMap = new Map<string | number, T>();

  const getValueByPath = (obj: any, path: string): any => {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  };

  for (const item of arr) {
    const keyValue = getValueByPath(item, path);
    if (keyValue !== undefined && !uniqueMap.has(keyValue)) {
      uniqueMap.set(keyValue, item);
    }
  }

  return Array.from(uniqueMap.values());
};

export const sortByKey = <T>(arr: T[], key: keyof T): T[] => {
  return arr.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};
