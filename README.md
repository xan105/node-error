About
=====

Error handling tools:

- Custom Error type `Failure` extending the `Error` constructor
- Linux/Windows standard error codes and their description
- Error lookup: retrieve description associated to status code (or other code)
- GoLang style error handling: return value instead of throwing

Install
=======

```
npm install @xan105/error
```

📦 Scoped `@xan105` packages are for my own personal use but feel free to use them.

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

- GoLang style error

```js
import { attempt } from "@xan105/error";
import { readFile } from "node:fs/promises";

const [ file, err ] = await attempt(readFile, [filePath]);
if(err) console.error(err); //handle error
//ignore error and set a default value
const [ json = {} ] = attempt(JSON.parse, [file]);
```

- Windows error lookup with shell32 API (FFI)

```js
import { Failure, errorLookup } from "@xan105/error";

// ... Some FFI implementation code

const hr = SHQueryUserNotificationState(pquns);
if (hr < 0) throw new Failure(...errorLookup(hr));
```

Let's say this would fail with error `0x8000FFFF`

Output:
```
Failure [E_UNEXPECTED]: Catastrophic failure
StackTrace...
    .............
    ............. {
  code: 'E_UNEXPECTED'
}
```

API
===

⚠️ This module is only available as an ECMAScript module (ESM).<br />

## Named export

### `Failure(message: string | object, option?: string | number | object): class`

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
 3. ERR_UNSUPPORTED
  
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

### `linuxErrCodes: object`

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

### `windowsErrCodes: object`

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

### `windowsErrCodesHRESULT: object`

Like `windowsErrCodes` but with `HRESULT`.<br/>
_HRESULT error codes_ are most commonly encountered in COM programming.<br/>
Includes common and WMI error codes with their description as follows:

```js
{
  2147500036: ["Operation aborted", "E_ABORT"],
  2147500037: ["Unspecified failure", "E_FAIL"],
  2147549183: ["Unexpected failure", "E_UNEXPECTED"],
  ...
}
```

Usage example with error `2147749921 (0x80041021)`:

```js
const code = new Uint32Array([-2147217375])[0]; //cast signed to unsigned
throw new Failure(...windowsErrCodesHRESULT[code]);
```      

```
Failure [WBEM_E_INVALID_SYNTAX]: Query is syntactically not valid
    StackTrace...
    .............
    ............. {
  code: 'WBEM_E_INVALID_SYNTAX'
}
```

```js
throw new Failure(windowsErrCodes[2147749921][0], { 
  code: windowsErrCodes[2147749921][1], 
  info: { foo: "bar" } 
});
```

```
Failure [WBEM_E_INVALID_SYNTAX]: Incorrect function
    StackTrace...
    .............
    ............. {
  code: 'WBEM_E_INVALID_SYNTAX',
  info: { foo: 'bar' }
}
```

### `errorLookup(code: number | string, os?: string = os.platform()): string[]`

Retrieve information about an error by its numerical status code (or other code).

Return an array of string as [message, code].

You can use it directly with `Failure`:

```js
new Failure(...errorLookup(0x80041021));
new Failure(...errorLookup(2147749921));
new Failure(...errorLookup(-2147217375));
new Failure(...errorLookup("WBEM_E_INVALID_SYNTAX"));
```

```
Failure [WBEM_E_INVALID_SYNTAX]: Query is syntactically not valid
    StackTrace...
    .............
    ............. {
  code: 'WBEM_E_INVALID_SYNTAX'
}
```

### `attempt(fn: unknown, args?: any[]):[unknown, Error | undefined] | Promise<[unknown, Error | undefined]>`

This is a try/catch wrapper to change how an error is handled.<br />
Instead of throwing returns an error as a value similar to GoLang.

By leveraging the destructure syntax we can easily provide a default value in case of error and/or choose to completely ignore to handle any error.<br />
And if we want to handle any error we can do so like we would with any value.

Example

```js
import { readFile } from "node:fs/promises";
  
//read the file
const [ file, err ] = await attempt(readFile, [filePath]);
if(err) //in case of error do something;

//ignore error and set a default value
const [ json = {} ] = attempt(JSON.parse, [file]);
```

This doesn't replace try/catch it's an alternative.<br />
It is particularly useful to avoid these patterns:

- Using `let` instead of `const` because the variable needs to be outside of the try/catch scope.

```js

//Instead of
let json;
try{
  json = JSON.parse(string);
} catch { /*do nothing*/ }
return json; //do something

//You could do
const [ json ] = attempt(JSON.parse,[string]);
return json; //do something
```

- Nested try/catch which are sometimes unavoidable and impact readability.

```js
//Instead of
try{
  foo();
}catch(err){
  try{
    bar();
  }catch(err){
    if (err.code === "ENOENT")
      throw new Error("It didn't work");
  }
}

//You could do
if (attempt(foo)[1] && attempt(bar)[1]?.code === "ENOENT"){
  throw new Error("It didn't work");    
}
```

**Parameters:**
  
  - fn: The value to resolve
  
  If `fn` is a promise then this function will behave like one.
  eg:
```js
//Promise
const [ file ] = await attempt(fs.Promises.readFile, [filePath]);
//Sync
const [ json ] = attempt(JSON.parse, [file]);
```

  You can also use anonymous function (or wrap in one).
  eg:
```js
const [result] = attempt( ()=> "value" );
const [result] = attempt( (x)=> x, ["value"] );
const [json] = attempt(()=> JSON.parse(string) );
const [json] = attempt(()=> JSON.stringify(JSON.parse(string)) );
```
  
  - args: Optional list of arguments to pass to fn

**Return value:**
  
  Returns the result and the error together as an array as `[result, error]`.<br />
  If there is an error result will be undefined.<br />
  Otherwise error will be undefined.
  
  💡 undefined is used to represent the lack/nonexistence of value because destructuring default value assignment triggers only with undefined.

NB: Note that when using Promise static methods such as `.all()`, `.any()`, `.allSettled()` , etc.<br />
You need to `bind` them to the `Promise` constructor otherwise they will loose their `this` context and fail.

```js
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
const promises = [promise1, promise2];

//This will succeed
const [ result, error ] = await attempt(()=> Promise.any(promises));

//This will fail with a TypeError
const [ result, error ] = await attempt(Promise.any, [promises]);
/*
[
  undefined,
  TypeError: Promise.any called on non-object
      at any (<anonymous>)
      StackTrace...
]
*/

//This will succeed
const [ result, error ] = await attempt(Promise.any.bind(Promise), [promises]);
```
