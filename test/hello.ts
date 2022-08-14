import { Failure, errorLookup, attempt } from "../lib/index.js";

const [ res ]: [string] = attempt( ()=>{ 
  console.log("foo");
  return "bar";
});
console.log(res);

const [ result, error ]: [undefined, Error ] = attempt( ()=>{ throw new Failure("error") });
if(error) console.error(error);

const code: number = 0x80041021;
const [ message, errCode ]: string[] = errorLookup(code, "win32");
console.log(message, errCode);