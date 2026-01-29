/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { 
  isString, 
  isInt,
  shouldObject,
  asBoolean,
  asArrayOf, 
  asString,
  isNonEmptyString 
} from "@xan105/types";
import { filterStackTrace } from "./util/clean.js";
import { CODES } from "./codes/custom.js";

class Failure extends Error {
  constructor(message, option = {}){
    if (isString(option) || isInt(option)) option = { code: option };
    shouldObject(option);

    const options = {
      code: option.code,
      cause: option.cause,
      clean: asBoolean(option.clean) ?? true,
      filter: asArrayOf(isNonEmptyString, option.filter) ?? []
    };

    super(asString(message) || "An error has occurred", { cause: options.cause });

    // Err code
    if (isNonEmptyString(options.code))
      this.code = options.code;
    else if(isInt(options.code))
      this.code = CODES[options.code] ?? `Error ${options.code}`;
    
    // Label
    this.name = this.constructor.name;
    if (this.code) this.name += ` [${this.code}]`;

    // Stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
      if (options.clean)
        this.stack = filterStackTrace(this.stack, options.filter);
    }
  }
}

export { Failure };