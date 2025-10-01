export type Currency = "USD" | "EUR" | "GBP" | "JPY" | "CHF" | "CNY" | "NGN";

type ReplaceReg = "/" | "-" | " " | "," | ":" | "";

export type FormatPattern =
  | "yyyy-mm-dd"
  | "mm-yyyy"
  | "dd-mmm"
  | "mmm-dd"
  | "ddd-mmm-dd"
  | "yyyy/mm/dd"
  | "dd-mm-yyyy"
  | "mmm-yyyy"
  | "full";

export type TimeFormatPattern =
  | "hh:mm"
  | "hh:mm:ss"
  | "hh:mm AM/PM"
  | "hh:mm:ss AM/PM";

type LocaleOption =
  | "en-US"
  | "en-GB"
  | "en-CA"
  | "en-AU"
  | "en-IN"
  | "en-NZ"
  | "en-ZA"
  | "fr-FR"
  | "fr-CA"
  | "de-DE"
  | "es-ES"
  | "es-MX"
  | "it-IT"
  | "nl-NL"
  | "pt-PT"
  | "pt-BR"
  | "ru-RU"
  | "pl-PL"
  | "zh-CN"
  | "zh-TW"
  | "ja-JP"
  | "ko-KR"
  | "hi-IN"
  | "th-TH"
  | "vi-VN"
  | "ar-SA"
  | "he-IL"
  | "tr-TR"
  | "fa-IR";

type TimeZones =
  | "UTC"
  | "PST"
  | "EST"
  | "CST"
  | "MST"
  | "IST"
  | "GMT"
  | "CET"
  | "EET"
  | "JST"
  | "AEST"
  | "AKST"
  | "HST"
  | "AST"
  | "NST"
  | "SST"
  | "CHST"
  | "BST"
  | "WET"
  | "EAT"
  | "MSK"
  | "SAMT"
  | "PKT"
  | "ICT"
  | "SGT"
  | "CST-China"
  | "KST"
  | "AEDT"
  | "NZST"
  | "FJT"
  | "HKT";

export type FormatDateOptions = {
  date: Date;
  format?: FormatPattern;
  locale?: LocaleOption;
  replaceFormat?: ReplaceReg;
  timeZone?: TimeZones;
};

export type FormatTimeOptions = {
  date: Date;
  format?: TimeFormatPattern;
  locale?: LocaleOption;
  replaceFormat?: ReplaceReg;
  timeZone?: TimeZones;
};

export type DataGroup<T> = {
  data: T[];
  key: keyof T;
};
