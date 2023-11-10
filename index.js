const dotenv = require('dotenv');
dotenv.config();

class EnvFlex {
  // Retrieve an environment variable as a string with an optional default value
  static getString(key, defaultValue = '') {
    return process.env[key] || defaultValue;
  }

  // Retrieve an environment variable as a number with an optional default value
  static getNumber(key, defaultValue = 0) {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }

    const number = Number(value);
    if (isNaN(number)) {
      throw new Error(`EnvFlex: Environment variable "${key}" is not a valid number.`);
    }

    return number;
  }

  // Retrieve an environment variable as a boolean
  static getBoolean(key, defaultValue = false) {
    const value = process.env[key];
    if (value === undefined) {
      return defaultValue;
    }

    return ['true', '1', 'yes'].includes(value.toLowerCase());
  }

  // Require that an environment variable is set; throw an error if it's not
  static require(key) {
    const value = process.env[key];
    if (value === undefined) {
      throw new Error(`EnvFlex: Required environment variable "${key}" is not set.`);
    }

    return value;
  }
}

module.exports = EnvFlex;
