import dotenv from 'dotenv';
dotenv.config();

export default class Pargali {
  static _castToString(value: string) {
    return String(value).trim();
  }

  static _castToNumber(value: string) {
    const number = Number(value.trim());
    if (isNaN(number)) {
      throw new Error(`Pargali: Value "${value}" is not a valid number.`);
    }
    return number;
  }

  static _castToBoolean(value: string) {
    return ["true", "1", "yes"].includes(value.trim().toLowerCase());
  }

  static getString(key: string, defaultValue = "") {
    const value = process.env[key];
    return value === undefined ? defaultValue : Pargali._castToString(value);
  }

  static getNumber(key: string, defaultValue = 0) {
    const value = process.env[key];
    return value === undefined ? defaultValue : Pargali._castToNumber(value);
  }

  static getBoolean(key: string, defaultValue = false) {
    const value = process.env[key];
    return value === undefined ? defaultValue : Pargali._castToBoolean(value);
  }

  static getStringArray(key: string, defaultValue: string[] = [], delimiter = ",") {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }

    return value.split(delimiter).map(Pargali._castToString);
  }

  static getNumberArray(key: string, defaultValue: number[] = [], delimiter = ",") {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }

    return value.split(delimiter).map(Pargali._castToNumber);
  }

  static getBooleanArray(key: string, defaultValue: boolean[] = [], delimiter = ",") {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }

    return value.split(delimiter).map(Pargali._castToBoolean);
  }

  static require(key: string) {
    const value = process.env[key];
    if (value === undefined) {
      throw new Error(
        `Pargali: Required environment variable "${key}" is not set.`
      );
    }

    return value;
  }
}
