import t from "tap";
import { Failure } from "../lib/index.js";

t.test("Failure", t => {
  
  t.test("basic", t => {
  
    try{
      throw new Failure("message");
    }catch(err){
      t.ok(err instanceof Error);
      t.ok(err instanceof Failure);
      t.equal(err.code, undefined);
      t.equal(err.message, "message");
    }
      
    try{
      throw new Failure("message", "code");
    }catch(err){
      t.ok(err instanceof Error);
      t.ok(err instanceof Failure);
      t.equal(err.code, "code");
      t.equal(err.message, "message");
    }
  
  t.end();
  });
  
  t.test("err code", t => {
  
    const CODES = {
      0: "ERR_UNEXPECTED",
      1: "ERR_INVALID_ARG",
      2: "ERR_ASSERTION",
      3: "ERR_UNSUPPORTED"
    };
  
    for (const [i, code] of Object.entries(CODES)){
      try{
        throw new Failure("message", +i);
      }catch(err){
        t.ok(err instanceof Error);
        t.ok(err instanceof Failure);
        t.equal(err.code, code);
        t.equal(err.message, "message");
      }
      
      try{
        throw new Failure("message", { code: +i });
      }catch(err){
        t.ok(err instanceof Error);
        t.ok(err instanceof Failure);
        t.equal(err.code, code);
        t.equal(err.message, "message");
      }
    }
    
  t.end();
  });
  
  t.test("cause", t => {

    try{
      throw new Error("parent error");
    }catch(_err){
      try{
        throw new Failure("message", { cause: _err });
      }catch(err){
        t.ok(err instanceof Error);
        t.ok(err instanceof Failure);
        t.equal(err.code, undefined);
        t.equal(err.message, "message");
        t.ok(err.cause instanceof Error);
        t.equal(err.cause.message, "parent error");
      }
    }
    
    try{
      throw new Failure("parent error", "code_parent");
    }catch(_err){
      try{
        throw new Failure("message", { cause: _err });
      }catch(err){
        t.ok(err instanceof Error);
        t.ok(err instanceof Failure);
        t.equal(err.code, undefined);
        t.equal(err.message, "message");
        t.ok(err.cause instanceof Error);
        t.equal(err.cause.message, "parent error");
        t.ok(err.cause instanceof Failure);
        t.equal(err.cause.code, "code_parent");
      }
    }
   
  t.end();
  });
  
  t.test("options", t => {
    t.test("clean stack trace", t => {

      let length = {a: 0, b: 0 };
      
      try{
        throw new Failure("message", { clean: false });
      }catch(err){
        t.ok(err instanceof Error);
        t.ok(err instanceof Failure);
        t.equal(err.code, undefined);
        t.equal(err.message, "message");
        length.a = err.stack.length;
      }
      
      try{
        throw new Failure("message", { clean: true });
      }catch(err){
        t.ok(err instanceof Error);
        t.ok(err instanceof Failure);
        t.equal(err.code, undefined);
        t.equal(err.message, "message");
        length.b = err.stack.length;
      }
     
      t.ok(length.a > length.b);
      
    t.end();
    });

    try{
      throw new Failure("message", { info: {foo: "bar"} });
    }catch(err){
      t.ok(err instanceof Error);
      t.ok(err instanceof Failure);
      t.equal(err.code, undefined);
      t.equal(err.message, "message");
      t.same(err.info, {foo: "bar"});
    }
    
    try{
      throw new Failure("message", { info: ["0", 1, 2, "3"] });
    }catch(err){
      t.ok(err instanceof Error);
      t.ok(err instanceof Failure);
      t.equal(err.code, undefined);
      t.equal(err.message, "message");
      t.same(err.info, ["0", 1, 2, "3"]);
    }
    
    try{
      throw new Failure("message", { info: "hello world" });
    }catch(err){
      t.ok(err instanceof Error);
      t.ok(err instanceof Failure);
      t.equal(err.code, undefined);
      t.equal(err.message, "message");
      t.equal(err.info, "hello world");
    }
    
   
  t.end();
  });
  
  t.test("bad usage", t => {
  
    try{
      throw new Failure("message", { code: 999 });
    }catch(err){
      t.ok(err instanceof Error);
      t.ok(err instanceof Failure);
      t.equal(err.code, "Error 999");
      t.equal(err.message, "message");
    }
    
    try{
      throw new Failure();
    }catch(err){
      t.ok(err instanceof Error);
      t.ok(err instanceof Failure);
      t.equal(err.code, undefined);
      t.equal(err.message, "An error has occurred");
    }
    
    try{
      throw new Failure("");
    }catch(err){
      t.ok(err instanceof Error);
      t.ok(err instanceof Failure);
      t.equal(err.code, undefined);
      t.equal(err.message, "An error has occurred");
    }
    
    try{
      throw "parent error";
    }catch(_err){
      try{
        throw new Failure("message", { cause: _err });
      }catch(err){
        t.ok(err instanceof Error);
        t.ok(err instanceof Failure);
        t.equal(err.code, undefined);
        t.equal(err.message, "message");
        t.equal(err.cause, undefined);
      }
    }
    
    try{
      throw new Failure("message", { cause: "parent message" });
    }catch(err){
      t.ok(err instanceof Error);
      t.ok(err instanceof Failure);
      t.equal(err.code, undefined);
      t.equal(err.message, "message");
      t.equal(err.cause, undefined);
    }
    
    try{
      throw new Failure("message", { info: 2 });
    }catch(err){
      t.ok(err instanceof Error);
      t.ok(err instanceof Failure);
      t.equal(err.code, undefined);
      t.equal(err.message, "message");
      t.equal(err.info, undefined);
    }
    
  t.end();
  });

t.end();
});