/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { platform } from "node:os";
import { Failure } from "./failure.js";
import { codes as available } from "./codes.js";
import { cast, toHexString } from "./util/number.js";

function errorLookup(code, range = platform()){

  const codes = available[range];
  if(!codes) throw new Failure(`Available code range are ${Object.keys(available).join(",")}`, { 
    code: 1,
    info: range 
  });

  if (typeof code === "number")
  {
    code = cast(code); //cast signed to unsigned
    return codes[code] ?? [`Error ${code} (${toHexString(code)})`];
  }
  else if (typeof code === "string")
  {
    return Object.values(codes).find(error => error[1] === code) ?? ["An error has occurred", code];
  } 
  else {
    throw new Failure("Expected number or string", {
      code: 1, 
      info: { 
        type: typeof code,
        value: code
    }});
  }
}

export { errorLookup };