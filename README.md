# Pargali

`Pargali` is an enhanced environment variable loader for Node.js applications. It extends the basic functionality of dotenv, offering additional features such as type casting and mandatory variable checks. This makes the management of environment variables in Node.js applications easier, safer, and less error-prone, especially in complex projects.

  [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=bugs)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=coverage)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)

## Features

- **Easy Loading**: Simplifies the process of loading environment variables from a .env file.
- **Type Casting**: Automatically casts environment variables to specified types (String, Number, Boolean), preventing type-related bugs.
- **Mandatory Variable Checks**: Ensures critical environment variables are set, avoiding runtime errors in production.

## Installation

`Pargali` requires Node.js. To install `Pargali`, use npm:

```bash
npm install pargali
```

## Usage

To use `Pargali`, require it at the beginning of your application. This ensures all environment variables are loaded and available:

```javascript
const Pargali = require('pargali');
```

## Accessing Environment Variables

With `Pargali`, environment variables can be accessed in various types, each method providing additional safety and convenience over standard process.env:

As a String:

```javascript
process.env.TEST_STRING = "Hello";
const someString = Pargali.getString('TEST_STRING'); // "Hello"
```

As a Number:

```javascript
process.env.TEST_NUMBER = "123";
const someNumber = Pargali.getNumber('TEST_NUMBER'); // 123
```

As a Boolean:

```javascript
process.env.TEST_BOOLEAN = "true";
const someBoolean = Pargali.getBoolean('TEST_BOOLEAN'); // true
```

As a String Array:

```javascript
process.env.TEST_STRING_ARRAY = "apple, orange, banana";
const someStringArray = Pargali.getStringArray('TEST_STRING_ARRAY'); // ["apple", "orange", "banana"]
```

As a Number Array:

```javascript
process.env.TEST_NUMBER_ARRAY = "1, 2, 3";
const someNumberArray = Pargali.getNumberArray('TEST_NUMBER_ARRAY'); // [1, 2, 3]
```

As a Boolean Array:

```javascript
process.env.TEST_BOOLEAN_ARRAY = "true, false, yes, no";
const someBooleanArray = Pargali.getBooleanArray('TEST_BOOLEAN_ARRAY'); // [true, false, true, false]
```

## Mandatory Variable Checks

To ensure vital environment variables are set, `Pargali` provides a method for mandatory checks:

```javascript
const requiredVar = Pargali.require('REQUIRED_VAR');
```

If `REQUIRED_VAR` is not set, `Pargali` throws an error, ensuring the application's essential configurations are in place.

## Meaning Behind the Package Name

[Pargali Ibrahim Pasha](https://en.wikipedia.org/wiki/Pargal%C4%B1_Ibrahim_Pasha), in his role as Grand Vizier, was instrumental to the Ottoman Empire, enhancing its administration and international standing, similar to how the `Pargali` npm package bolsters modern Node.js projects. Just as Ibrahim Pasha streamlined the empire's governance and established pivotal alliances through his skilled diplomacy, the `Pargali` package simplifies and secures environment variable management. It extends the basic functionality of dotenv, introducing features like type casting and mandatory variable checks. This not only reduces configuration errors but also makes the handling of environment variables more efficient and reliable, paralleling the way Ibrahim Pasha's reforms strengthened the Ottoman Empire's infrastructure and military prowess.
