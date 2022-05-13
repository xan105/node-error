About
=====

A very simple error wrapper extending the `Error` constructor.

Install
=======

```
npm install @xan105/error
```

Usage example
=============

```js
import { Failure } from "@xan105/error";

if (something)
  throw new Failure("my super error message", "ERR_CODE");
```

Output:

```
Failure [ERR_CODE]: my super error message
    StackTrace...
    .............
    ............. {
  code: 'ERR_CODE'
}
```

API
===

⚠️ This module is only available as an ECMAScript module (ESM).<br />

## Named export

### `Failure(message: string, option?: string | number | object): class`

Create an error with optional information.<br />
This extends the regular `Error` constructor.

|option|default|description|
|------|-------|-----------|
|code|none|optional custom error code (see below for details)|
|cause|none|parent error if any|
|clean|true|remove unhelpful internal stack trace entries|
|filter|none|additional string[] of path(s) to filter when using clean| 
|info|none|an additional object/array/string to give more details about the error|

`code` (if any) is expected to be a string if it's an integer then the following will be used instead:

 0. ERR_UNEXPECTED
 1. ERR_INVALID_ARG
 2. ERR_ASSERTION
  
if `option` is either a string or a number then it specifies the error code.
 
Output Example:

`new Failure("Expecting a string !","ERR_INVALID_ARG");`

```
Failure [ERR_INVALID_ARG]: Expecting a string !
    at file:///D:/Documents/GitHub/xan105/node-error/test/test.js:3:12
    at ModuleJob.run (node:internal/modules/esm/module_job:185:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:281:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12) {
  code: 'ERR_INVALID_ARG'
}
```

`new Failure("Expecting a string !", { code: 1, info: { foo: "bar" } });`

```
Failure [ERR_INVALID_ARG]: Expecting a string !
    at file:///D:/Documents/GitHub/xan105/node-error/test/test.js:3:12
    at ModuleJob.run (node:internal/modules/esm/module_job:185:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:281:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12) {
  code: 'ERR_INVALID_ARG',
  info: { foo: 'bar' }
}
```

`new Failure("Expecting a string !", { clean: true });`

```
Failure: Expecting a string !
    at file:///D:/Documents/GitHub/xan105/node-error/test/test.js:3:12
    at async Promise.all (index 0)
```

### `const linuxErrCodes: object`

A list of standard Linux error codes _(1-131)_ with their description as follows:

```js
{
  1: ["Operation not permitted", "EPERM"],
  2: ["No such file or directory", "ENOENT"],
  3: ["No such process", "ESRCH"],
  ...
}
```

Usage example:

`throw new Failure(...linuxErrCodes[2]);`

```
Failure [ENOENT]: No such file or directory
    StackTrace...
    .............
    ............. {
  code: 'ENOENT'
}
```

`throw new Failure(linuxErrCodes[1][0], { code: linuxErrCodes[1][1], info: { foo: "bar" } });`

```
Failure [EPERM]: Operation not permitted
    StackTrace...
    .............
    ............. {
  code: 'EPERM',
  info: { foo: 'bar' }
}
```

### `const windowsErrCodes: object`

A list of standard Windows error codes _(1-15841)_ with their description as follows:

```js
{
  1: ["Incorrect function", "ERROR_INVALID_FUNCTION"],
  2: ["The system cannot find the file specified", "ERROR_FILE_NOT_FOUND"],
  3: ["The system cannot find the path specified", "ERROR_PATH_NOT_FOUND"],
  ...
}
```

Usage example:

`throw new Failure(...windowsErrCodes[2]);`

```
Failure [ERROR_FILE_NOT_FOUND]: The system cannot find the file specified
    StackTrace...
    .............
    ............. {
  code: 'ERROR_FILE_NOT_FOUND'
}
```

`throw new Failure(windowsErrCodes[1][0], { code: windowsErrCodes[1][1], info: { foo: "bar" } });`

```
Failure [ERROR_INVALID_FUNCTION]: Incorrect function
    StackTrace...
    .............
    ............. {
  code: 'ERROR_INVALID_FUNCTION',
  info: { foo: 'bar' }
}
```