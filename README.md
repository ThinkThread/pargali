# EnvFlex

EnvFlex is an enhanced environment variable loader for Node.js applications. It extends the basic functionality of dotenv with additional features such as type casting and mandatory variable checks, making it easier and safer to work with environment variables.

## Features

- Easy loading of environment variables from a `.env` file.
- Type casting for environment variables (String, Number, Boolean).
- Mandatory variable checks to ensure necessary variables are set.

## Installation

Install EnvFlex using npm:

```bash
npm install envflex
```

## Usage

First, require `EnvFlex` at the beginning of your application:

```javascript
const EnvFlex = require('envflex');
```

## Accessing Environment Variables

As a String:

```javascript
const someString = EnvFlex.getString('SOME_STRING', 'defaultString');
```

As a Number:

```javascript
const someNumber = EnvFlex.getNumber('SOME_NUMBER', 123);
```

As a Boolean:

```javascript
const someBoolean = EnvFlex.getBoolean('SOME_BOOLEAN', true);
```

## Mandatory Variable Checks

To ensure that a required environment variable is set:

```javascript
const requiredVar = EnvFlex.require('REQUIRED_VAR');
```

If `REQUIRED_VAR` is not set, this will throw an error.
