# Pargali

Pargali is an enhanced environment variable loader for Node.js applications. It extends the basic functionality of dotenv with additional features such as type casting and mandatory variable checks, making it easier and safer to work with environment variables.

  [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=bugs)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)
  [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=thinkthread_pargali&metric=coverage)](https://sonarcloud.io/summary/new_code?id=thinkthread_pargali)

## Features

- Easy loading of environment variables from a `.env` file.
- Type casting for environment variables (String, Number, Boolean).
- Mandatory variable checks to ensure necessary variables are set.

## Installation

Install Pargali using npm:

```bash
npm install pargali
```

## Usage

First, require `Pargali` at the beginning of your application:

```javascript
const Pargali = require('pargali');
```

## Accessing Environment Variables

As a String:

```javascript
const someString = Pargali.getString('SOME_STRING', 'defaultString');
```

As a Number:

```javascript
const someNumber = Pargali.getNumber('SOME_NUMBER', 123);
```

As a Boolean:

```javascript
const someBoolean = Pargali.getBoolean('SOME_BOOLEAN', true);
```

## Mandatory Variable Checks

To ensure that a required environment variable is set:

```javascript
const requiredVar = Pargali.require('REQUIRED_VAR');
```

If `REQUIRED_VAR` is not set, this will throw an error.
