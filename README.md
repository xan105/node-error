A very simple error wrapper.

Install
-------

`npm install @xan105/error`

Usage example
-------------

```js
import { Failure } from "@xan105/error";

if (something)
  throw new Failure("my super error message", "ERR_CODE");
```

Output:

```
Failure: ERR_CODE: my super error message
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

### `(message: string, code?: string | number | null): class`

Create an error with an optional custom code.<br />
This extends the regular `Error` constructor.

If code is an integer then the following will be used:

 0. ERR_UNEXPECTED
 1. ERR_INVALID_ARGS
 
Output Example:

```
Failure: ERR_INVALID_ARGS: Expecting a string !
    at file:///D:/Documents/GitHub/xan105/node-error/test/test.js:3:12
    at ModuleJob.run (node:internal/modules/esm/module_job:185:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:281:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:65:12) {
  code: 'ERR_INVALID_ARGS'
}
```