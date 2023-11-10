import dotenv from 'dotenv';
dotenv.config();

export default class EnvFlex {
  static _castToString(value: string) {
    return String(value).trim();
  }

  static _castToNumber(value: string) {
    const number = Number(value.trim());
    if (isNaN(number)) {
      throw new Error(`EnvFlex: Value "${value}" is not a valid number.`);
    }
    return number;
  }

  static _castToBoolean(value: string) {
    return ["true", "1", "yes"].includes(value.trim().toLowerCase());
  }

  static getString(key: string, defaultValue = "") {
    const value = process.env[key];
    return value === undefined ? defaultValue : EnvFlex._castToString(value);
  }

  static getNumber(key: string, defaultValue = 0) {
    const value = process.env[key];
    return value === undefined ? defaultValue : EnvFlex._castToNumber(value);
  }

  static getBoolean(key: string, defaultValue = false) {
    const value = process.env[key];
    return value === undefined ? defaultValue : EnvFlex._castToBoolean(value);
  }

  static getStringArray(key: string, defaultValue = [], delimiter = ",") {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }

    return value.split(delimiter).map(EnvFlex._castToString);
  }

  static getNumberArray(key: string, defaultValue = [], delimiter = ",") {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }

    return value.split(delimiter).map(EnvFlex._castToNumber);
  }

  static getBooleanArray(key: string, defaultValue = [], delimiter = ",") {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }

    return value.split(delimiter).map(EnvFlex._castToBoolean);
  }

  static require(key: string) {
    const value = process.env[key];
    if (value === undefined) {
      throw new Error(
        `EnvFlex: Required environment variable "${key}" is not set.`
      );
    }

    return value;
  }
}
