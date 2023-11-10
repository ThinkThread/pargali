const dotenv = require('dotenv');
dotenv.config();

class EnvFlex {
  static _castToString(value) {
    return String(value).trim();
  }

  static _castToNumber(value) {
    const number = Number(value.trim());
    if (isNaN(number)) {
      throw new Error(`EnvFlex: Value "${value}" is not a valid number.`);
    }
    return number;
  }

  static _castToBoolean(value) {
    return ['true', '1', 'yes'].includes(value.trim().toLowerCase());
  }

  static getString(key, defaultValue = '') {
    const value = process.env[key];
    return value === undefined ? defaultValue : EnvFlex._castToString(value);
  }

  static getNumber(key, defaultValue = 0) {
    const value = process.env[key];
    return value === undefined ? defaultValue : EnvFlex._castToNumber(value);
  }

  static getBoolean(key, defaultValue = false) {
    const value = process.env[key];
    return value === undefined ? defaultValue : EnvFlex._castToBoolean(value);
  }

  static getStringArray(key, defaultValue = [], delimiter = ',') {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }

    return value.split(delimiter).map(EnvFlex._castToString);
  }

  static getNumberArray(key, defaultValue = [], delimiter = ',') {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }

    return value.split(delimiter).map(EnvFlex._castToNumber);
  }

  static getBooleanArray(key, defaultValue = [], delimiter = ',') {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }

    return value.split(delimiter).map(EnvFlex._castToBoolean);
  }
}

module.exports = EnvFlex;
