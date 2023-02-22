About
=====

Error handling tools:

- Custom Error type `Failure` extending the `Error` constructor
- Linux/Windows standard error codes and their description
- Error lookup: retrieve description associated to status code (or other code)
- GoLang style error handling: return value instead of throwing

📦 Scoped `@xan105` packages are for my own personal use but feel free to use them.

Example
=======

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
//skip value
const [, err] = attempt(foo, ["bar"]);
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

Install / Runtime
=================

### 📦 Package manager

```
npm install @xan105/error
```

<details><summary>Compatibility</summary>

- Node ✔️
- Deno ✔️ `--compat --unstable`

</details>

### 🌐 CDN / HTTPS Bundle

```
import ... from "https://esm.sh/@xan105/error"
```

Please see https://esm.sh/ for more details.

<details><summary>Compatibility</summary>

- Node ✔️ `--experimental-network-imports`
- Deno ✔️
- Browser ✔️

</details>

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

### `codes: object`

A list of standard error codes with their description.<br />
Errors are listed by their unsigned numerical value as `value:number = [description: string, code: string]`

```js
{
  1: ["Operation not permitted", "EPERM"],
  2: ["No such file or directory", "ENOENT"],
  3: ["No such process", "ESRCH"],
  ...
}
```

#### Available error code range are:

 - `linux`
   
    Linux error codes 1 to 131.
   
 - `windows` 
 
    Windows error codes 1 to 15841.
   
 - `hresult` 
 
    HRESULT codes are most commonly encountered in COM programming. Includes common and WMI error codes.
 
 - `ntstatus` 
 
    NTSTATUS values are mostly used like HRESULT but they have different codes.
    
 - `win32` 
 
    Windows and hresult error codes merged together since their error code range don't overlap.<br />
    This is also for backward compatibility with previous version of `errorLookup()`

#### They are also available under their own namespace:

```js
import { codes } from "@xan105/error"
console.log(codes.windows);

import { windows } from "@xan105/error/codes"
console.log(windows);
```

#### Usage example:

<details>
<summary>Linux</summary>

```js
import { Failure, codes } from "@xan105/error"
throw new Failure(...codes.linux[2]);
/*
Failure [ENOENT]: No such file or directory
    StackTrace...
    .............
    ............. {
  code: 'ENOENT'
}
*/
```

```js
import { Failure, codes } from "@xan105/error"
const [description, code] = codes.linux[1];
throw new Failure(description, { code, info: { foo: "bar" } });
/*
Failure [EPERM]: Operation not permitted,
    StackTrace...
    .............
    ............. {
  code: 'EPERM',
  info: { foo: 'bar' }
}
*/
```

</details>

<details>
<summary>Windows</summary>

```js
import { Failure, codes } from "@xan105/error"
throw new Failure(...codes.windows[2]);
/*
Failure [ERROR_FILE_NOT_FOUND]: The system cannot find the file specified
    StackTrace...
    .............
    ............. {
  code: 'ERROR_FILE_NOT_FOUND'
}
*/
```

```js
import { Failure, codes } from "@xan105/error"
const [description, code] = codes.windows[1];
throw new Failure(description, { code, info: { foo: "bar" } });
/*
Failure [ERROR_INVALID_FUNCTION]: Incorrect function
    StackTrace...
    .............
    ............. {
  code: 'ERROR_INVALID_FUNCTION',
  info: { foo: 'bar' }
}
*/
```

</details>

<details>
<summary>Windows HRESULT</summary>

Example with error `2147749921 (0x80041021)`:

```js
import { Failure, codes } from "@xan105/error"

const hr = someWin32API(); //received error -2147217375
const code = new Uint32Array([hr])[0]; //cast signed to unsigned
throw new Failure(...codes.hresult[code]);
/*
Failure [WBEM_E_INVALID_SYNTAX]: Query is syntactically not valid
    StackTrace...
    .............
    ............. {
  code: 'WBEM_E_INVALID_SYNTAX'
}
*/
```

</details>

### `errorLookup(code: number | string, range?: string): string[]`

Retrieve information about an error by its numerical status code (or other code).

Return an array of string as `[message: string, code: string]`.

You can use it directly with `Failure`:

```js
new Failure(...errorLookup(0x80041021));
new Failure(...errorLookup(2147749921));
new Failure(...errorLookup(-2147217375));
new Failure(...errorLookup("WBEM_E_INVALID_SYNTAX"));

/*
Failure [WBEM_E_INVALID_SYNTAX]: Query is syntactically not valid
    StackTrace...
    .............
    ............. {
  code: 'WBEM_E_INVALID_SYNTAX'
}
*/
```

See `codes` above for available error code range.
If omitted `linux` is used under Linux and `win32` under Windows.

### `attempt(fn: unknown, args?: unknown[]):Promise<unknown[]> | unknown[]`

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

//skip value
const [, err] = attempt(foo, ["bar"]);
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
  If there is an error result will be _undefined_.<br />
  Otherwise error will be _undefined_.
  
  💡 _undefined_ is used to represent the lack/nonexistence of value because destructuring default value assignment triggers only with _undefined_.

⚠️ NB: If you get an error like:
```
TypeError: x called on non-object
TypeError: Illegal invocation
```

This is most likely because what you are invoking lost its `this` context.
You need to `bind` it to its constructor or use an arrow function.

`Promise` static methods such as `.all()`, `.any()`, `.allSettled()` , etc is a good example of this:

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

Usage example with node:util/promisify:

```js
import { promisify } from "node:util";
import { execFile } from "node:child_process";
import { attempt } from "@xan105/error";

const [ ps, err ] = await attempt(promisify(execFile), ["pwsh", [
  "-NoProfile", 
  "-NoLogo", 
  "-Command", 
  "$PSVersionTable.PSVersion.ToString()"
], { windowsHide: true }]);

if (err || ps.stderr) throw new Failure(err?.stderr || ps.stderr, "ERR_POWERSHELL");
console.log(ps.stdout);
```

### `attemptify(fn: unknown): (...args: unknown[]) => Promise<unknown[]> | unknown[]`

node:util/promisify style syntax for `attempt()`:

```js
function double(i){
  return i * 2;
}

//Instead of
const j = attempt(double, [2]);

//You can use
const j = attemptify(double)(2);
```

This is a simple wrapper to `attempt()`.