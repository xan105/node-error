import test from "node:test";
import assert from "node:assert/strict";
import { attempt } from "../lib/index.js";

test("fn as a Promise", async t => {
  await test("on success", async t => {
    let res = await attempt( Promise.resolve("value") );
    assert.equal(res[0], "value");
    assert.equal(res[1], undefined);
    
    const promise = new Promise((resolve) => resolve("value"));
    res = await attempt(promise);
    assert.equal(res[0], "value");
    assert.equal(res[1], undefined);

  
  });
  await test("on failure", async t => {
    let res = await attempt( Promise.reject(new Error("error")) );
    assert.equal(res[0], undefined);
    assert.ok(res[1] instanceof Error);
    assert.deepEqual(res[1], new Error("error"));
    
    const promise = new Promise((resolve, reject) => reject(new Error("error")));
    res = await attempt(promise);
    assert.equal(res[0], undefined);
    assert.ok(res[1] instanceof Error);
    assert.deepEqual(res[1], new Error("error"));

  });
});


test("fn as a function that returns a Promise", async t => {
  await test("on success", async t => {
  
    const fn = function(x){
      return new Promise((resolve) => {
        return resolve(x);
      });
    };
    let [ result, error ] = await attempt(fn, ["value"]);
    
    assert.equal(result, "value");
    assert.equal(error, undefined);

  });
  await test("on failure", async t => {
    
    const fn = function(x){
      return new Promise((resolve, reject) => {
        return reject(new Error("error"));
      });
    };
    let [ result, error ] = await attempt(fn, ["value"]);
    
    assert.equal(result, undefined);
    assert.ok(error instanceof Error);
    assert.deepEqual(error, new Error("error"));

  });
});

test("fn as an async function", async t => {
  await test("on success", async t => {
  
    const fn = async function(x){ return x };
    let [ result, error ] = await attempt(fn, ["value"]);
    
    assert.equal(result, "value");
    assert.equal(error, undefined);

  });
  await test("on failure", async t => {
    
    const fn = async function(x){ throw new Error("error") };
    let [ result, error ] = await attempt(fn, ["value"]);
    
    assert.equal(result, undefined);
    assert.ok(error instanceof Error);
    assert.deepEqual(error, new Error("error"));

  });
});

test("fn as a function", async t => {
  await test("on success", t => {
  
    const fn = function(x){ return x };
    let [ result, error ] = attempt(fn, ["value"]);
    
    assert.equal(result, "value");
    assert.equal(error, undefined);

  });
  await test("on failure", t => {
    
    const fn = function(x){ throw new Error("error") };
    let [ result, error ] = attempt(fn, ["value"]);
    
    assert.equal(result, undefined);
    assert.ok(error instanceof Error);
    assert.deepEqual(error, new Error("error"));

  });
});

test("fn as an anonymous function", async t => {
  await test("on success", t => {
    let res = attempt( ()=> "value" );
    assert.equal(res[0], "value");
    assert.equal(res[1], undefined);
    
    res = attempt( (x)=> x, ["value"] );
    assert.equal(res[0], "value");
    assert.equal(res[1], undefined);

  });
  await test("on failure", t => {
    const [ result, error ] = attempt( ()=> { throw new Error("error") } );
    
    assert.equal(result, undefined);
    assert.ok(error instanceof Error);
    assert.deepEqual(error, new Error("error"));

  });
});

test("fn as an anonymous async function", async t => {
  await test("on success", async t => {
    const [ result, error ] = await attempt( async ()=> "value" );
    
    assert.equal(result, "value");
    assert.equal(error, undefined);

  });
  await test("on failure", async t => {
    const [ result, error ] = await attempt( async ()=> { throw new Error("error") } );
    
    assert.equal(result, undefined);
    assert.ok(error instanceof Error);
    assert.deepEqual(error, new Error("error"));

  });
});

test("Examples:", async t => {
  await test("Promise static method", async t => {
  
    const promise1 = Promise.reject(0);
    const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
    const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
    const promises = [promise1, promise2, promise3];
    
    let res = await attempt(Promise.any.bind(Promise), [promises]);
    assert.equal(res[0], "quick");
    assert.equal(res[1], undefined);
    
    res = await attempt(()=> Promise.any(promises));
    assert.equal(res[0], "quick");
    assert.equal(res[1], undefined);    

  });
  await test("JSON parsing fail use default value", t => {
    
    const string = `{0\"name":"John","age":30,"city":"New York"}`;
    const [ json = {} ] = attempt(JSON.parse, [string]);
    
    assert.deepEqual(json, {});

  });
  await test("JSON parsing wrap in anonymous function", t => {
    
    const string = `{"name":"John","age":30,"city":"New York"}`;
    const [ json ] = attempt(()=> JSON.parse(string) );
    
    assert.deepEqual(json, {name:"John", age:30, city:"New York"});
    
    const [ json2string ] = attempt(()=> JSON.stringify(JSON.parse(string)) );
    
    assert.deepEqual(string, json2string);

  });
  await test("skipping value", t => {
    
    const [, error] = attempt(()=> { throw new Error("error") });
    assert.ok(error instanceof Error);
    assert.deepEqual(error, new Error("error"));
  
  });
});

test("Bad usage:", async t => {
  await test("If not function/promise attempt() returns value as is due to its non-fail approach", t => {
    
    assert.deepEqual(attempt(null), [null, undefined]);
    assert.deepEqual(attempt("string"), ["string", undefined]);
    assert.deepEqual(attempt(1), [1, undefined]);
    assert.deepEqual(attempt({}), [{}, undefined]);
    assert.deepEqual(attempt([]), [[], undefined]);
    
  
  });
  await test("Opt args param is not an array", t => {
    
    const sum = (x) => x;
    const [ result, error ] = attempt(sum, "oops");
    
    assert.equal(result, undefined);
    assert.equal(error, undefined);

  });
});