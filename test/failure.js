import test from "node:test";
import assert from "node:assert/strict";
import { Failure } from "../lib/index.js";

test("Failure", async t => {
  
  await test("basic", t => {
  
    try{
      throw new Failure("message");
    }catch(err){
      assert.ok(err instanceof Error);
      assert.ok(err instanceof Failure);
      assert.equal(err.code, undefined);
      assert.equal(err.message, "message");
    }
      
    try{
      throw new Failure("message", "code");
    }catch(err){
      assert.ok(err instanceof Error);
      assert.ok(err instanceof Failure);
      assert.equal(err.code, "code");
      assert.equal(err.message, "message");
    }
  
  
  });
  
  await test("err code", t => {
  
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
        assert.ok(err instanceof Error);
        assert.ok(err instanceof Failure);
        assert.equal(err.code, code);
        assert.equal(err.message, "message");
      }
      
      try{
        throw new Failure("message", { code: +i });
      }catch(err){
        assert.ok(err instanceof Error);
        assert.ok(err instanceof Failure);
        assert.equal(err.code, code);
        assert.equal(err.message, "message");
      }
    }
    
  
  });
  
  await test("cause", t => {

    try{
      throw new Error("parent error");
    }catch(_err){
      try{
        throw new Failure("message", { cause: _err });
      }catch(err){
        assert.ok(err instanceof Error);
        assert.ok(err instanceof Failure);
        assert.equal(err.code, undefined);
        assert.equal(err.message, "message");
        assert.ok(err.cause instanceof Error);
        assert.equal(err.cause.message, "parent error");
      }
    }
    
    try{
      throw new Failure("parent error", "code_parent");
    }catch(_err){
      try{
        throw new Failure("message", { cause: _err });
      }catch(err){
        assert.ok(err instanceof Error);
        assert.ok(err instanceof Failure);
        assert.equal(err.code, undefined);
        assert.equal(err.message, "message");
        assert.ok(err.cause instanceof Error);
        assert.equal(err.cause.message, "parent error");
        assert.ok(err.cause instanceof Failure);
        assert.equal(err.cause.code, "code_parent");
      }
    }

  });
  
  await test("options", async t => {
    await test("clean stack trace", t => {

      let length = {a: 0, b: 0 };
      
      try{
        throw new Failure("message", { clean: false });
      }catch(err){
        assert.ok(err instanceof Error);
        assert.ok(err instanceof Failure);
        assert.equal(err.code, undefined);
        assert.equal(err.message, "message");
        length.a = err.stack.length;
      }
      
      try{
        throw new Failure("message", { clean: true });
      }catch(err){
        assert.ok(err instanceof Error);
        assert.ok(err instanceof Failure);
        assert.equal(err.code, undefined);
        assert.equal(err.message, "message");
        length.b = err.stack.length;
      }
     
      assert.ok(length.a > length.b);
      
    
    });

    try{
      throw new Failure("message", { info: {foo: "bar"} });
    }catch(err){
      assert.ok(err instanceof Error);
      assert.ok(err instanceof Failure);
      assert.equal(err.code, undefined);
      assert.equal(err.message, "message");
      assert.deepEqual(err.info, {foo: "bar"});
    }
    
    try{
      throw new Failure("message", { info: ["0", 1, 2, "3"] });
    }catch(err){
      assert.ok(err instanceof Error);
      assert.ok(err instanceof Failure);
      assert.equal(err.code, undefined);
      assert.equal(err.message, "message");
      assert.deepEqual(err.info, ["0", 1, 2, "3"]);
    }
    
    try{
      throw new Failure("message", { info: "hello world" });
    }catch(err){
      assert.ok(err instanceof Error);
      assert.ok(err instanceof Failure);
      assert.equal(err.code, undefined);
      assert.equal(err.message, "message");
      assert.equal(err.info, "hello world");
    }

  });
  
  await test("bad usage", t => {
  
    try{
      throw new Failure("message", { code: 999 });
    }catch(err){
      assert.ok(err instanceof Error);
      assert.ok(err instanceof Failure);
      assert.equal(err.code, "Error 999");
      assert.equal(err.message, "message");
    }
    
    try{
      throw new Failure();
    }catch(err){
      assert.ok(err instanceof Error);
      assert.ok(err instanceof Failure);
      assert.equal(err.code, undefined);
      assert.equal(err.message, "An error has occurred");
    }
    
    try{
      throw new Failure("");
    }catch(err){
      assert.ok(err instanceof Error);
      assert.ok(err instanceof Failure);
      assert.equal(err.code, undefined);
      assert.equal(err.message, "An error has occurred");
    }
    
    try{
      throw "parent error";
    }catch(_err){
      try{
        throw new Failure("message", { cause: _err });
      }catch(err){
        assert.ok(err instanceof Error);
        assert.ok(err instanceof Failure);
        assert.equal(err.code, undefined);
        assert.equal(err.message, "message");
        assert.equal(err.cause, undefined);
      }
    }
    
    try{
      throw new Failure("message", { cause: "parent message" });
    }catch(err){
      assert.ok(err instanceof Error);
      assert.ok(err instanceof Failure);
      assert.equal(err.code, undefined);
      assert.equal(err.message, "message");
      assert.equal(err.cause, undefined);
    }
    
    try{
      throw new Failure("message", { info: 2 });
    }catch(err){
      assert.ok(err instanceof Error);
      assert.ok(err instanceof Failure);
      assert.equal(err.code, undefined);
      assert.equal(err.message, "message");
      assert.equal(err.info, undefined);
    }
    
  });
});