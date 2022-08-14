import t from "tap";
import { attempt } from "../lib/index.js";

t.test("fn as a Promise", async t => {
  t.test("> success", async t => {
    let res = await attempt( Promise.resolve("value") );
    t.equal(res[0], "value");
    t.equal(res[1], undefined);
    
    const promise = new Promise((resolve) => resolve("value"));
    res = await attempt(promise);
    t.equal(res[0], "value");
    t.equal(res[1], undefined);

  t.end();
  });
  t.test("> failure", async t => {
    let res = await attempt( Promise.reject(new Error("error")) );
    t.equal(res[0], undefined);
    t.ok(res[1] instanceof Error);
    t.same(res[1], new Error("error"));
    
    const promise = new Promise((resolve, reject) => reject(new Error("error")));
    res = await attempt(promise);
    t.equal(res[0], undefined);
    t.ok(res[1] instanceof Error);
    t.same(res[1], new Error("error"));

  t.end();
  });
t.end();
});

t.test("fn as a function that returns a Promise", async t => {
  t.test("> success", async t => {
  
    const fn = function(x){
      return new Promise((resolve) => {
        return resolve(x);
      });
    };
    let [ result, error ] = await attempt(fn, ["value"]);
    
    t.equal(result, "value");
    t.equal(error, undefined);

  t.end();
  });
  t.test("> failure", async t => {
    
    const fn = function(x){
      return new Promise((resolve, reject) => {
        return reject(new Error("error"));
      });
    };
    let [ result, error ] = await attempt(fn, ["value"]);
    
    t.equal(result, undefined);
    t.ok(error instanceof Error);
    t.same(error, new Error("error"));

  t.end();
  });
t.end();
});

t.test("fn as an async function", async t => {
  t.test("> success", async t => {
  
    const fn = async function(x){ return x };
    let [ result, error ] = await attempt(fn, ["value"]);
    
    t.equal(result, "value");
    t.equal(error, undefined);

  t.end();
  });
  t.test("> failure", async t => {
    
    const fn = async function(x){ throw new Error("error") };
    let [ result, error ] = await attempt(fn, ["value"]);
    
    t.equal(result, undefined);
    t.ok(error instanceof Error);
    t.same(error, new Error("error"));

  t.end();
  });
t.end();
});

t.test("fn as a function", t => {
  t.test("> success", t => {
  
    const fn = function(x){ return x };
    let [ result, error ] = attempt(fn, ["value"]);
    
    t.equal(result, "value");
    t.equal(error, undefined);

  t.end();
  });
  t.test("> failure", t => {
    
    const fn = function(x){ throw new Error("error") };
    let [ result, error ] = attempt(fn, ["value"]);
    
    t.equal(result, undefined);
    t.ok(error instanceof Error);
    t.same(error, new Error("error"));

  t.end();
  });
t.end();
});

t.test("fn as an anonymous function", t => {
  t.test("> success", t => {
    let res = attempt( ()=> "value" );
    t.equal(res[0], "value");
    t.equal(res[1], undefined);
    
    res = attempt( (x)=> x, ["value"] );
    t.equal(res[0], "value");
    t.equal(res[1], undefined);

  t.end();
  });
  t.test("> failure", t => {
    const [ result, error ] = attempt( ()=> { throw new Error("error") } );
    
    t.equal(result, undefined);
    t.ok(error instanceof Error);
    t.same(error, new Error("error"));

  t.end();
  });
t.end();
});

t.test("fn as an anonymous async function", async t => {
  t.test("> success", async t => {
    const [ result, error ] = await attempt( async ()=> "value" );
    
    t.equal(result, "value");
    t.equal(error, undefined);

  t.end();
  });
  t.test("> failure", async t => {
    const [ result, error ] = await attempt( async ()=> { throw new Error("error") } );
    
    t.equal(result, undefined);
    t.ok(error instanceof Error);
    t.same(error, new Error("error"));

  t.end();
  });
t.end();
});

t.test("Examples:", async t => {
  t.test("Promise static method", async t => {
  
    const promise1 = Promise.reject(0);
    const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
    const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
    const promises = [promise1, promise2, promise3];
    
    let res = await attempt(Promise.any.bind(Promise), [promises]);
    t.equal(res[0], "quick");
    t.equal(res[1], undefined);
    
    res = await attempt(()=> Promise.any(promises));
    t.equal(res[0], "quick");
    t.equal(res[1], undefined);    

  t.end();
  });
  t.test("JSON parsing fail use default value", t => {
    
    const string = `{0\"name":"John","age":30,"city":"New York"}`;
    const [ json = {} ] = attempt(JSON.parse, [string]);
    
    t.strictSame(json, {});

  t.end();
  });
  t.test("JSON parsing wrap in anonymous function", t => {
    
    const string = `{"name":"John","age":30,"city":"New York"}`;
    const [ json ] = attempt(()=> JSON.parse(string) );
    
    t.strictSame(json, {name:"John", age:30, city:"New York"});
    
    const [ json2string ] = attempt(()=> JSON.stringify(JSON.parse(string)) );
    
    t.strictSame(string, json2string);

  t.end();
  });
t.end();
});

t.test("Bad usage:", t => {
  t.test("If not function/promise attempt() returns value as is due to its non-fail approach", t => {
    
    t.same(attempt(null), [null, undefined]);
    t.same(attempt("string"), ["string", undefined]);
    t.same(attempt(1), [1, undefined]);
    t.same(attempt({}), [{}, undefined]);
    t.same(attempt([]), [[], undefined]);
    
  t.end();
  });
  t.test("Opt args param is not an array", t => {
    
    const sum = (x) => x;
    const [ result, error ] = attempt(sum, "oops");
    
    t.equal(result, undefined);
    t.equal(error, undefined);
    
  t.end();
  });
t.end();  
});
