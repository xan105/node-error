/*
MIT License

Copyright (c) 2021 Anthony Beaumont

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

const ERR_CODES = [
  "ERR_UNEXPECTED",
  "ERR_INVALID_ARGS",
];

class Failure extends Error {
  constructor(message, code = null){
    super(message);

    if (typeof code === "string" && code.length > 0) 
    {
      this.code = code;
      this.name = this.constructor.name + ": " + this.code;
    }
    else if(Number.isSafeInteger(code) && code >= 0 && code <= ERR_CODES.length - 1)
    {
      this.code = ERR_CODES[code];
      this.name = this.constructor.name + ": " + this.code;
    } 
    else 
    {
      this.name = this.constructor.name;
    }
    
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
  }
}

export { Failure };