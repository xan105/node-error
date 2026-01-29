/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { 
  asArray, 
  asObject, 
  asFunction,
  isFunction, 
  isPromise
} from "@xan105/types";

function match(fn, args, cb){
  args = asArray(args) ?? [];
  cb = asObject(cb) ?? {};
  cb.Ok  = asFunction(cb.Ok)  ?? ((v) => v);
  cb.Err = asFunction(cb.Err) ?? (()=> {});

  try{
    //Can only determine if a function returns a Promise after exec. it
    const handle = isFunction(fn) ? fn(...args) : fn;
    if (isPromise(handle)){
    //Attach handlers fast enough to avoid rejection was handled asynchronously
      return new Promise((resolve) => {
        handle
        .then((result) => { 
          return resolve(cb.Ok(result) ?? result);
        })
        .catch((err) => { 
          return resolve(cb.Err(err));
        })
      });
    }
    return cb.Ok(handle) ?? handle;
  }catch(err){
    return cb.Err(err);
  }
}

export { match };