/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { linuxErrCodes } from "./codes/linux/error.js";
import { windowsErrCodes } from "./codes/windows/error.js";
import { HRESULT } from "./codes/windows/hresult.js";
import { NTSTATUS } from "./codes/windows/ntstatus.js";

export const codes = {
  "linux": linuxErrCodes,
  "windows": windowsErrCodes,
  "hresult": HRESULT,
  "win32": { ...windowsErrCodes, ...HRESULT }, //backward compatibility
  "ntstatus": NTSTATUS
};