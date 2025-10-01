import { Currency } from "./types";

/**
 * Formats a duration in seconds into a human-readable time format (HH:MM:SS).
 *
 * @param {number} time - The time duration in seconds.
 * @returns {string} A string representing the duration in the format HH:MM:SS, or MM:SS if hours are 0.
 *
 * @example
 * formatDuration(3600);    // => "01:00:00"
 * formatDuration(3661);    // => "01:01:01"
 * formatDuration(59);      // => "00:59"
 * formatDuration(732);     // => "12:12"
 */
export const formatDuration = (time: number): string => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  return [
    hours > 0 ? String(hours).padStart(2, "0") : null,
    String(minutes).padStart(2, "0"),
    String(seconds).padStart(2, "0"),
  ]
    .filter(Boolean)
    .join(":");
};

/**
 * Converts a byte value into a human-readable string with appropriate size units (KB, MB, GB, etc.).
 *
 * @param {number} bytes - The number of bytes to convert.
 * @param {number} [decimals=2] - The number of decimal places to include (default is 2).
 * @returns {string} The formatted size as a string with the appropriate unit (e.g., "1.23 MB").
 *
 * @example
 * formatBytes(1024);          // => "1 KB"
 * formatBytes(1048576);       // => "1 MB"
 * formatBytes(123456789);     // => "117.74 MB"
 * formatBytes(9876543210);    // => "9.21 GB"
 * formatBytes(0);             // => "0 Bytes"
 */
export const formatBytes = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

/**
 * Formats a number into a human-readable string with "K", "M", or "B" suffixes.
 *
 * @param {number} num - The number to format.
 * @param {number} [decimals=2] - The number of decimal places to include (default is 2).
 * @returns {string} The formatted number as a string.
 *
 * @example
 * formatNumber(950);        // => "950"
 * formatNumber(1500);       // => "1.50K"
 * formatNumber(2500000);    // => "2.50M"
 * formatNumber(5300000000); // => "5.30B"
 */
export const formatNumber = (num: number, decimals: number = 2): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(decimals) + "K";
  } else if (num >= 1000000 && num < 1000000000) {
    return (num / 1000000).toFixed(decimals) + "M";
  } else if (num >= 1000000000) {
    return (num / 1000000000).toFixed(decimals) + "B";
  }
  return num.toString();
};

export const formatCurrency = (
  value: number,
  currency: Currency,
  allowNegativeValue = false
) => {
  let num = allowNegativeValue ? value : Math.max(0, value);

  const ngn_local = "₦" + num.toLocaleString();
  if (currency === "NGN") return ngn_local;

  return num.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  });
};
