import Pargali from "../src/index";

describe("Pargali Tests", () => {
  describe("getString Method Tests", () => {
    test("should retrieve a string environment variable", () => {
      process.env.TEST_STRING_UNIQUE = "Hello World";
      expect(Pargali.getString("TEST_STRING_UNIQUE")).toBe("Hello World");
    });

    test("should retrieve a string with default value when variable not set", () => {
      expect(Pargali.getString("TEST_STRING_DEFAULT", "Default")).toBe("Default");
    });

    test("should trim whitespace from retrieved string", () => {
      process.env.TEST_STRING_WHITESPACE = "  Hello World  ";
      expect(Pargali.getString("TEST_STRING_WHITESPACE")).toBe("Hello World");
    });
  });

  describe("getNumber Method Tests", () => {
    test("should retrieve a number environment variable", () => {
      process.env.TEST_NUMBER_VALID = "123";
      expect(Pargali.getNumber("TEST_NUMBER_VALID")).toBe(123);
    });

    test("should retrieve a number with default value when variable not set", () => {
      expect(Pargali.getNumber("TEST_NUMBER_DEFAULT", 10)).toBe(10);
    });

    test("should throw an error for non-numeric value", () => {
      process.env.TEST_NUMBER_INVALID = "abc";
      expect(() => Pargali.getNumber("TEST_NUMBER_INVALID")).toThrow();
    });

    test("should trim whitespace and retrieve a number", () => {
      process.env.TEST_NUMBER_WHITESPACE = "  456  ";
      expect(Pargali.getNumber("TEST_NUMBER_WHITESPACE")).toBe(456);
    });
  });

  describe("getBoolean Method Tests", () => {
    test('should retrieve true for a "true" string', () => {
      process.env.TEST_BOOLEAN_TRUE_STRING = "true";
      expect(Pargali.getBoolean("TEST_BOOLEAN_TRUE_STRING")).toBe(true);
    });

    test('should retrieve true for a "1" string', () => {
      process.env.TEST_BOOLEAN_TRUE_NUMERIC = "1";
      expect(Pargali.getBoolean("TEST_BOOLEAN_TRUE_NUMERIC")).toBe(true);
    });

    test('should retrieve true for a "yes" string', () => {
      process.env.TEST_BOOLEAN_TRUE_YES = "yes";
      expect(Pargali.getBoolean("TEST_BOOLEAN_TRUE_YES")).toBe(true);
    });

    test('should retrieve false for a "false" string', () => {
      process.env.TEST_BOOLEAN_FALSE_STRING = "false";
      expect(Pargali.getBoolean("TEST_BOOLEAN_FALSE_STRING")).toBe(false);
    });

    test('should retrieve false for a "0" string', () => {
      process.env.TEST_BOOLEAN_FALSE_NUMERIC = "0";
      expect(Pargali.getBoolean("TEST_BOOLEAN_FALSE_NUMERIC")).toBe(false);
    });

    test('should retrieve false for a "no" string', () => {
      process.env.TEST_BOOLEAN_FALSE_NO = "no";
      expect(Pargali.getBoolean("TEST_BOOLEAN_FALSE_NO")).toBe(false);
    });

    test("should retrieve a boolean with default value when variable not set", () => {
      expect(Pargali.getBoolean("TEST_BOOLEAN_DEFAULT", true)).toBe(true);
    });

    test("should trim whitespace and retrieve a boolean", () => {
      process.env.TEST_BOOLEAN_WHITESPACE = "  true  ";
      expect(Pargali.getBoolean("TEST_BOOLEAN_WHITESPACE")).toBe(true);
    });
  });

  describe("require Method Tests", () => {
    test("should retrieve a defined environment variable", () => {
      process.env.TEST_REQUIRE_DEFINED = "Required Value";
      expect(Pargali.require("TEST_REQUIRE_DEFINED")).toBe("Required Value");
    });

    test("should throw an error for an undefined environment variable", () => {
      const missingKey = "TEST_REQUIRE_UNDEFINED";
      expect(() => Pargali.require(missingKey)).toThrow(
        `Pargali: Required environment variable "${missingKey}" is not set.`
      );
    });
  });

  describe("getStringArray Method Tests", () => {
    test("should retrieve a string array from an environment variable", () => {
      process.env.TEST_STRING_ARRAY = "apple,orange,banana";
      expect(Pargali.getStringArray("TEST_STRING_ARRAY")).toEqual([
        "apple",
        "orange",
        "banana",
      ]);
    });

    test("should retrieve a string array with default value when variable not set", () => {
      expect(
        Pargali.getStringArray("TEST_STRING_ARRAY_DEFAULT", ["default"])
      ).toEqual(["default"]);
    });

    test("should retrieve a string array with different delimiter", () => {
      process.env.TEST_STRING_ARRAY_DELIMITER = "apple|orange|banana";
      expect(
        Pargali.getStringArray("TEST_STRING_ARRAY_DELIMITER", [], "|")
      ).toEqual(["apple", "orange", "banana"]);
    });

    test("should trim whitespace from each string in the array", () => {
      process.env.TEST_STRING_ARRAY_WHITESPACE =
        "  apple  ,  orange  ,  banana  ";
      expect(Pargali.getStringArray("TEST_STRING_ARRAY_WHITESPACE")).toEqual([
        "apple",
        "orange",
        "banana",
      ]);
    });
  });

  describe("getNumberArray Method Tests", () => {
    test("should retrieve a number array from an environment variable", () => {
      process.env.TEST_NUMBER_ARRAY = "1,2,3";
      expect(Pargali.getNumberArray("TEST_NUMBER_ARRAY")).toEqual([1, 2, 3]);
    });

    test("should retrieve a number array with default value when variable not set", () => {
      expect(Pargali.getNumberArray("TEST_NUMBER_ARRAY_DEFAULT", [0])).toEqual([
        0,
      ]);
    });

    test("should retrieve a number array with different delimiter", () => {
      process.env.TEST_NUMBER_ARRAY_DELIMITER = "1|2|3";
      expect(
        Pargali.getNumberArray("TEST_NUMBER_ARRAY_DELIMITER", [], "|")
      ).toEqual([1, 2, 3]);
    });

    test("should trim whitespace and retrieve a number array", () => {
      process.env.TEST_NUMBER_ARRAY_WHITESPACE = "  1  ,  2  ,  3  ";
      expect(Pargali.getNumberArray("TEST_NUMBER_ARRAY_WHITESPACE")).toEqual([
        1, 2, 3,
      ]);
    });

    test("should throw an error for non-numeric values in array", () => {
      process.env.TEST_NUMBER_ARRAY_INVALID = "1,2,abc";
      expect(() => Pargali.getNumberArray("TEST_NUMBER_ARRAY_INVALID")).toThrow();
    });
  });

  describe("getBooleanArray Method Tests", () => {
    test("should retrieve a boolean array from an environment variable", () => {
      process.env.TEST_BOOLEAN_ARRAY = "true,false,yes,no";
      expect(Pargali.getBooleanArray("TEST_BOOLEAN_ARRAY")).toEqual([
        true,
        false,
        true,
        false,
      ]);
    });

    test("should retrieve a boolean array with default value when variable not set", () => {
      expect(
        Pargali.getBooleanArray("TEST_BOOLEAN_ARRAY_DEFAULT", [true])
      ).toEqual([true]);
    });

    test("should retrieve a boolean array with different delimiter", () => {
      process.env.TEST_BOOLEAN_ARRAY_DELIMITER = "true|false|yes|no";
      expect(
        Pargali.getBooleanArray("TEST_BOOLEAN_ARRAY_DELIMITER", [], "|")
      ).toEqual([true, false, true, false]);
    });

    test("should trim whitespace and retrieve a boolean array", () => {
      process.env.TEST_BOOLEAN_ARRAY_WHITESPACE =
        "  true  ,  false  ,  yes  ,  no  ";
      expect(Pargali.getBooleanArray("TEST_BOOLEAN_ARRAY_WHITESPACE")).toEqual([
        true,
        false,
        true,
        false,
      ]);
    });
  });
});
