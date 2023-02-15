/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { filterStackTrace } from "./util/clean.js";
import { CODES } from "./codes/custom.js";

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
      super(message || "An error has occurred", { cause: options.cause });
    } else {
      super(message || "An error has occurred");
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

export { Failure };