/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

export { Failure } from "./failure.js";
export { errorLookup } from "./lookup.js";
export { attempt } from "./try.js";
//Operating System Error Codes
export { linuxErrCodes } from "./codes/linux.js";
export { windowsErrCodes } from "./codes/windows/windows.js";
export { windowsErrCodesHRESULT } from "./codes/windows/hresult.js";