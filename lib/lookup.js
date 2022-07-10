/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { platform } from "node:os";
import { linuxErrCodes } from "./codes/linux.js";
import { windowsErrCodes } from "./codes/windows/windows.js";
import { windowsErrCodesHRESULT } from "./codes/windows/hresult.js";
import { Failure } from "./index.js";

function errorLookup(code, os = platform()){
  if (typeof code === "number")
  {
    if (os === "linux")
      return linuxErrCodes[code] ?? [`Error ${code} (0x${code.toString(16).toUpperCase()})`];
    else if (os === "win32")
      return windowsErrCodes[code] ?? 
             windowsErrCodesHRESULT[new Uint32Array([code])[0]] ?? //cast signed to unsigned
             [`Error ${code} (0x${code.toString(16).toUpperCase()})`];
    else
      throw new Failure(`Unsupported platform ${os}`, "ERR_UNSUPPORTED");
 } 
 else if (typeof code === "string")
 {
    if (os === "linux")
      return Object.values(linuxErrCodes).find(error => error[1] === code) ?? ["An error has occurred", code];
    else if (os === "win32")
      return Object.values(windowsErrCodes).find(error => error[1] === code) ?? Object.values(windowsErrCodesHRESULT).find(error => error[1] === code) ?? ["An error has occurred", code];
    else
      throw new Failure(`Unsupported platform ${os}`, "ERR_UNSUPPORTED");
 } 
 else 
 {
    throw new Failure("Expected number or string", 1);
 }
}

export { errorLookup };