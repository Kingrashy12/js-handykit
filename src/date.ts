import {
  FormatDateOptions,
  FormatTimeOptions,
  TimeFormatPattern,
} from "./types";

export const formatDate = ({
  date,
  format = "yyyy-mm-dd",
  locale = "en-US",
  replaceFormat,
  timeZone,
}: FormatDateOptions): string => {
  const formatter = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone,
  });

  const parts = formatter.formatToParts(date);
  const getPart = (type: string) =>
    parts.find((part) => part.type === type)?.value || "";

  const year = getPart("year");
  const month = getPart("month");
  const day = getPart("day");

  let formattedDate = "";

  switch (format) {
    case "yyyy-mm-dd":
      formattedDate = `${year}-${month}-${day}`;
      break;
    case "yyyy/mm/dd":
      formattedDate = `${year}/${month}/${day}`;
      break;
    case "dd-mm-yyyy":
      formattedDate = `${day}-${month}-${year}`;
      break;
    case "mm-yyyy":
      formattedDate = `${month}-${year}`;
      break;
    case "dd-mmm":
      formattedDate = `${day} ${new Intl.DateTimeFormat(locale, {
        month: "short",
      }).format(date)}`;
      break;
    case "mmm-dd":
      formattedDate = `${new Intl.DateTimeFormat(locale, {
        month: "short",
      }).format(date)} ${day}`;
      break;
    case "ddd-mmm-dd":
      formattedDate = `${new Intl.DateTimeFormat(locale, {
        weekday: "short",
      }).format(date)} ${new Intl.DateTimeFormat(locale, {
        month: "short",
      }).format(date)} ${day}`;
      break;
    case "mmm-yyyy":
      formattedDate = `${new Intl.DateTimeFormat(locale, {
        month: "short",
      }).format(date)} ${year}`;
      break;
    case "full":
      formattedDate = new Intl.DateTimeFormat(locale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(date);
      break;
  }

  if (replaceFormat) {
    formattedDate = formattedDate.replace(/[-/, ]+/g, replaceFormat);
  }

  return formattedDate;
};

export const formatTime = ({
  date,
  format = "hh:mm",
  locale = "en-US",
  replaceFormat,
  timeZone,
}: FormatTimeOptions): string => {
  const formatterMap: Record<TimeFormatPattern, Intl.DateTimeFormatOptions> = {
    "hh:mm": { hour: "2-digit", minute: "2-digit", hour12: false },
    "hh:mm:ss": {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    },
    "hh:mm AM/PM": { hour: "2-digit", minute: "2-digit", hour12: true },
    "hh:mm:ss AM/PM": {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    },
  };

  let formattedTime = new Intl.DateTimeFormat(locale, {
    ...formatterMap[format],
    timeZone,
  }).format(date);

  if (replaceFormat) {
    formattedTime = formattedTime.replace(/[:/, ]+/g, replaceFormat);
  }

  return formattedTime;
};

export const formatTimeAgo = (date: Date): string => {
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return `Just now`;
  const minutes = Math.floor(diff / 60);
  if (minutes < 60) return `${minutes} min${minutes !== 1 ? "s" : ""} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr${hours !== 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days !== 1 ? "s" : ""} ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
};

export const formatTimeDiff = (startDate: Date, endDate: Date): string => {
  const diff = Math.abs(endDate.getTime() - startDate.getTime()) / 1000;

  const days = Math.floor(diff / (3600 * 24));
  const hours = Math.floor((diff % (3600 * 24)) / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = Math.floor(diff % 60);

  return `${days} day${days !== 1 ? "s" : ""}, ${hours} hr${
    hours !== 1 ? "s" : ""
  }, ${minutes} min${minutes !== 1 ? "s" : ""}, ${seconds} sec${
    seconds !== 1 ? "s" : ""
  }`;
};
