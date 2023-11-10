const EnvFlex = require('../index');

describe('EnvFlex Tests', () => {
  beforeAll(() => {
    process.env.TEST_STRING = "Hello";
    process.env.TEST_NUMBER = "123";
    process.env.TEST_BOOLEAN_TRUE = "true";
    process.env.TEST_BOOLEAN_FALSE = "false";
  });

  test('should retrieve a string environment variable', () => {
    expect(EnvFlex.getString('TEST_STRING')).toBe("Hello");
  });

  test('should retrieve a number environment variable', () => {
    expect(EnvFlex.getNumber('TEST_NUMBER')).toBe(123);
  });

  test('should retrieve a boolean environment variable (true)', () => {
    expect(EnvFlex.getBoolean('TEST_BOOLEAN_TRUE')).toBe(true);
  });

  test('should retrieve a boolean environment variable (false)', () => {
    expect(EnvFlex.getBoolean('TEST_BOOLEAN_FALSE')).toBe(false);
  });

  test('should throw an error for undefined required variable', () => {
    expect(() => EnvFlex.require('UNDEFINED_VAR')).toThrow();
  });
});

