/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { 
  asArray, 
  isFunction, 
  isPromise 
} from "@xan105/types";

function attempt(fn, args){
  args = asArray(args) ?? [];
  try{
    //Can only determine if a function returns a Promise after exec. it
    const handle = isFunction(fn) ? fn(...args) : fn;
    if (isPromise(handle)){
     //Attach handlers fast enough to avoid rejection was handled asynchronously
     return new Promise((resolve) => {
       handle
       .then((result) => { 
         return resolve([result, undefined]);
       })
       .catch((err) => { 
         return resolve([undefined, err]); 
       })
     });
    } 
    return [handle, undefined];
  }catch(err){
    return [undefined, err]
  }
}
//NB: return undefined because destructure default assignement triggers only with undefined
//eg: const [ foo = "bar", value ] = source;

//"node:util promisify" style syntax: attemptify(foo)(bar) instead of attempt(foo, [bar]);
function attemptify(fn){
  return (...args) => attempt(fn, args);
}

export { attempt, attemptify };