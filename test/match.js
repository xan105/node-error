import test from "node:test";
import assert from "node:assert/strict";
import { match } from "../lib/index.js";

test("[match] Basic / Usage", async() => {

  const add = (n) => {
    if(typeof n === "number") return n + n;
    else throw new Error("panic!");
  };

  await test("on success", async() => {

    let res = match(add, [2], {
      Ok: (v) => v / 2
    });
    assert.equal(res, 2);
    
    res = match(add, [2], {
      Ok: (v) => v
    });
    assert.equal(res, 4);
    
    res = match(add, [2], {
      Ok: (v) => false
    });
    assert.equal(res, false);
    
    res = match(add, [2], {
      Ok: function(v){ return v }
    });
    assert.equal(res, 4);
    
    res = match(add, [2], {
      Ok: (v) => { return v }
    });
    assert.equal(res, 4);
    
    res = match(add, [2]);
    assert.equal(res, 4);
    
  });
  
  await test("on failure", async() => {
  
    let res = match(add, ["string"], {
      Ok: (v) => v / 2,
      Err: (err)=>{ 
        assert.ok(err instanceof Error);
        assert.equal(err.message, "panic!");
      }
    });
    assert.equal(res, undefined);
    
    res = match(add, ["string"], {
      Ok: (v) => v / 2
    });
    assert.equal(res, undefined);

    res = match(add, ["string"]);
    assert.equal(res, undefined);
    
  });
  
  await test("wrong", async() => {
  
    let res = match(add, [2], {
      Ok: (v) => {v} //wrong syntax
    });
    assert.equal(res, 4);
    
    res = match(add, [2], {
      Ok: (v) => null //expected to return value
    });
    assert.equal(res, 4);

    res = match(add, [2], {
      Ok: "not a function"
    });
    assert.equal(res, 4);
    
    //If not function/promise match() returns value as is due to its non-fail approach"
    assert.deepEqual(match(null), null);
    assert.deepEqual(match("string"), "string");
    assert.deepEqual(match(1), 1);
    assert.deepEqual(match({}), {});
    assert.deepEqual(match([]), []);
  });

});

test("[match] fn as a Promise", async() => {
  await test("on success", async() => {
    let res = await match( Promise.resolve("value"), []);
    assert.equal(res, "value");
    
    const promise = new Promise((resolve) => resolve("value"));
    res = await match(promise, []);
    assert.equal(res, "value");

  });
  await test("on failure", async() => {
    let res = await match( Promise.reject(new Error("error")), [], {
      Err: (err)=>{
        assert.ok(err instanceof Error);
        assert.deepEqual(err, new Error("error"));
      }
    });
    assert.equal(res, undefined);
    
    const promise = new Promise((resolve, reject) => reject(new Error("error")));
    res = await match(promise, [], {
      Err: (err)=>{
        assert.ok(err instanceof Error);
        assert.deepEqual(err, new Error("error"));
      }
    });
    assert.equal(res, undefined);
  });
});

test("[match] fn as a function that returns a Promise", async() => {
  await test("on success", async() => {
  
    const fn = function(x){
      return new Promise((resolve) => {
        return resolve(x);
      });
    };
    let result = await match(fn, ["value"]);
    assert.equal(result, "value");

  });
  await test("on failure", async() => {
    
    const fn = function(x){
      return new Promise((resolve, reject) => {
        return reject(new Error("error"));
      });
    };
    
    let result = await match(fn, ["value"], {
      Err: (err)=>{
        assert.ok(err instanceof Error);
        assert.deepEqual(err, new Error("error"));
      }
    });
    assert.equal(result, undefined);

  });
});

test("[match] fn as an async function", async() => {
  await test("on success", async() => {
  
    const fn = async function(x){ return x };
    let result = await match(fn, ["value"]);
    assert.equal(result, "value");

  });
  await test("on failure", async() => {
    
    const fn = async function(x){ throw new Error("error") };
    let result = await match(fn, ["value"], {
      Err: (err)=>{
        assert.ok(err instanceof Error);
        assert.deepEqual(err, new Error("error"));
      }
    });
    assert.equal(result, undefined);

  });
});

test("[match] fn as a function", async() => {
  await test("on success", () => {
  
    const fn = function(x){ return x };
    let result = match(fn, ["value"]);
    assert.equal(result, "value");

  });
  await test("on failure", () => {
    
    const fn = function(x){ throw new Error("error") };
    let result = match(fn, ["value"], {
      Err: (err)=>{
        assert.ok(err instanceof Error);
        assert.deepEqual(err, new Error("error"));
      }
    });
    assert.equal(result, undefined);

  });
});

test("[match] fn as an anonymous function", async() => {
  await test("on success", () => {
    let res = match( ()=> "value" );
    assert.equal(res, "value");
    
    res = match( (x)=> x, ["value"] );
    assert.equal(res, "value");

  });
  await test("on failure", () => {
    const result = match( ()=> { throw new Error("error") }, [], {
      Err: (err)=>{
        assert.ok(err instanceof Error);
        assert.deepEqual(err, new Error("error"));
      }
    });
    assert.equal(result, undefined);

  });
});

test("[match] fn as an anonymous async function", async() => {
  await test("on success", async() => {
    const result = await match( async ()=> "value" );
    assert.equal(result, "value");

  });
  await test("on failure", async() => {
    const result = await match( async ()=> { throw new Error("error") }, [], {
      Err: (err)=>{
        assert.ok(err instanceof Error);
        assert.deepEqual(err, new Error("error"));
      }
    });
    assert.equal(result, undefined);

  });
});

test("[match] Examples:", async() => {
  await test("Promise static method", async() => {
  
    const promise1 = Promise.reject(0);
    const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
    const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
    const promises = [promise1, promise2, promise3];
    
    let res = await match(Promise.any.bind(Promise), [promises]);
    assert.equal(res, "quick");
    
    res = await match(()=> Promise.any(promises));
    assert.equal(res, "quick");  

  });
  await test("JSON parsing fail use default value", () => {
    
    const string = `{0\"name":"John","age":30,"city":"New York"}`;
    const json = match(JSON.parse, [string], {
      Err: () => { return {} }
    });
    assert.deepEqual(json, {});

  });
});