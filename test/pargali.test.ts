import Pargali from '../src/index';

describe('Value', () => {
  beforeAll(() => {
    process.env.TEST_STRING = "Hello";
    process.env.TEST_NUMBER = "123";
    process.env.TEST_BOOLEAN_TRUE = "true";
    process.env.TEST_BOOLEAN_FALSE = "false";
  });

  test('should retrieve a string environment variable', () => {
    expect(Pargali.getString('TEST_STRING')).toBe("Hello");
  });

  test('should retrieve a number environment variable', () => {
    expect(Pargali.getNumber('TEST_NUMBER')).toBe(123);
  });

  test('should retrieve a boolean environment variable (true)', () => {
    expect(Pargali.getBoolean('TEST_BOOLEAN_TRUE')).toBe(true);
  });

  test('should retrieve a boolean environment variable (false)', () => {
    expect(Pargali.getBoolean('TEST_BOOLEAN_FALSE')).toBe(false);
  });

  test('should throw an error for undefined required variable', () => {
    expect(() => Pargali.require('UNDEFINED_VAR')).toThrow();
  });
});

describe('Array', () => {
  beforeAll(() => {
    process.env.TEST_STRING_ARRAY = "apple, orange, banana";
    process.env.TEST_NUMBER_ARRAY = "1, 2, 3";
    process.env.TEST_BOOLEAN_ARRAY = "true, false, yes, no";
  });

  test('should retrieve a string array from an environment variable', () => {
    expect(Pargali.getStringArray('TEST_STRING_ARRAY')).toEqual(['apple', 'orange', 'banana']);
  });

  test('should retrieve a number array from an environment variable', () => {
    expect(Pargali.getNumberArray('TEST_NUMBER_ARRAY')).toEqual([1, 2, 3]);
  });

  test('should retrieve a boolean array from an environment variable', () => {
    expect(Pargali.getBooleanArray('TEST_BOOLEAN_ARRAY')).toEqual([true, false, true, false]);
  });
});

