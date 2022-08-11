/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { Failure } from "./index.js";

//NB: return undefined because destructure default assignement triggers only with undefined
//eg: const [ foo = "bar", value ] = source;
function attempt(fn, args = []){
 if (!Array.isArray(args)) args = [];

 if (Object.prototype.toString.call(fn) === "[object Promise]")
 {
  return new Promise((resolve) => {
    fn(...args)
    .then((result) => { 
      return resolve([result, undefined]);
    })
    .catch((err) => { 
      return resolve([undefined, err]); 
    })
  });
 } 
 else if (typeof fn === "function")
 {
  try{
    const result = fn(...args);
    return [result, undefined];
  }catch(err){
    return [undefined, err]
  }
 }
 else 
 {
  throw new Failure("Expected function or promise", { code: 1, info: Object.prototype.toString.call(fn) });
 }
}

export { attempt };