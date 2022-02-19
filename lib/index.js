/*
MIT License

Copyright (c) 2021-2022 Anthony Beaumont

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

const CODES = [
  "ERR_UNEXPECTED",
  "ERR_INVALID_ARGS",
];

class Failure extends Error {
  constructor(message, option = {}){
    
    if (typeof option === "string" || Number.isSafeInteger(option))
      option = { code: option };
    
    const options = {
      code: option.code ?? null,
      cause: option.cause || null,
      show: option.show || false,
      info: typeof option.info === "object" ? option.info : null
    };

    super(message);

    // Err code
    if (typeof options.code === "string" && options.code.length > 0) 
      this.code = options.code;
    else if(Number.isSafeInteger(options.code) && options.code >= 0 && options.code <= CODES.length - 1)
      this.code = CODES[options.code];
    
    // Label
    this.name = this.constructor.name;
    if (this.code) this.name += ": " + this.code;
    
    // Additional info
    if (options.info) this.info = options.info;
    if (options.cause instanceof Error) { 
      if(options.show === true)
        this.cause = option.cause;
      else if(options.show === false && options.cause.message)
        this.cause = options.cause.message;
    }
    
    // Stack trace
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
  }
}

export { Failure };