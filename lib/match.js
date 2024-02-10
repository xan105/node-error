/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

function match(fn, args, cb){
  if (!Array.isArray(args)) args = [];
  if (!(cb && Object.prototype.toString.call(cb) === "[object Object]")) cb = {};
  if (typeof cb.Ok !== "function") cb.Ok = (v) => v;
  if (typeof cb.Err !== "function") cb.Err = () => {};

  try{
      //Can only determine if a function returns a Promise after exec. it
      const handle = typeof fn === "function" ? fn(...args) : fn;
      if (Object.prototype.toString.call(handle) === "[object Promise]" && typeof handle.then === "function")
      {
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
      else { 
        const result = handle;
        return cb.Ok(result) ?? result;
      }
  }catch(err){
    return cb.Err(err);
  }
}

export { match };