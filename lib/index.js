/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

const CODES = {
  0: "ERR_UNEXPECTED",
  1: "ERR_INVALID_ARG",
  2: "ERR_ASSERTION"
};

class Failure extends Error {
  constructor(message, option = {}){
    
    if (typeof option === "string" || Number.isSafeInteger(option))
      option = { code: option };
    
    const options = {
      code: option.code ?? null,
      cause: option.cause || null,
      clean: option.clean ?? true,
      filter: Array.isArray(option.filter) && option.filter.every(el => typeof el === "string" && el.length > 0) ? option.filter : [],
      info: typeof option.info === "object" || typeof option.info === "string" ? option.info : null //object as in object,array,etc... Or just a string
    };

    if (options.cause instanceof Error) {
      super(message, { cause: options.cause });
    } else {
      super(message);
    }

    // Err code
    if (typeof options.code === "string" && options.code.length > 0) 
      this.code = options.code;
    else if(Number.isSafeInteger(options.code))
      this.code = CODES[options.code] ?? `Error ${options.code}`;
    
    // Label
    this.name = this.constructor.name;
    if (this.code) this.name += " [" + this.code + "]";
    
    // Additional info
    if (options.info) this.info = options.info;
    
    // Stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
      if (options.clean)
        this.stack = filterStackTrace(this.stack, options.filter);
    }
  }
}

function filterStackTrace(stack, filter = []){
/*
Based on https://github.com/sindresorhus/clean-stack (MIT License)
Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
cf: https://github.com/sindresorhus/clean-stack/blob/main/license
*/

  if (typeof stack !== 'string') return undefined;
  
  const at = /\s+at.*[(\s](.*)\)?/;
  const internal = /^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/;
  
  const electron = [
    ".app/Contents/Resources/electron.asar",
    ".app/Contents/Resources/default_app.asar"
  ];
  
  const ignore = electron.concat(filter);

  return stack
         .replace(/\\/g, '/')
         .split('\n')
         .filter(line => {
            const extract = line.match(at);
            if (extract === null || !extract[1]) return true;
            const match = extract[1];
            if (ignore.some(el => match.includes(el))) return false;
            return !internal.test(match);
         })
         .filter(line => line.trim() !== '')
         .join('\n');   
}

export { Failure };