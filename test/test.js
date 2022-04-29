import { Failure } from "../lib/index.js";

try{
  throw new Failure("parent message", "ERR_CODE_PARENT");
}catch(err){
  test(new Failure("message0", { code: "ERR_CODE", info: {foo: "bar", bar: "foo"}, cause: err }));
}
test(new Failure("message2", { code: "ERR_CODE", filter: ["foo", "bar"], info: ["a","b","c","d"] })); 
test(new Failure("message3", "ERR_CODE"));
test(new Failure("message4", 1));
test(new Failure("message5"));

test(new Failure("message6", 99));
test(new Failure("message7", ""));
test(new Failure("message8", { info: "string"}));
test(new Failure("message9", { cause: "parent message" }));
try{
  throw new Failure("");
}catch(err){
  test(new Failure("message10", { cause: err }));
}

test(new Failure(""));
test(new Failure());

test(new Failure(undefined, "ERR_NO_MSG"));

function test(error){
  try {
    throw error
  } catch(err){ 
    console.error(err) 
  }
}