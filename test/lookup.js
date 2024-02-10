import test from "node:test";
import assert from "node:assert/strict";
import { errorLookup } from "../lib/index.js";

test("Error lookup", async () => {
  await test("Code lookup", () => {
    const err = ["Query is syntactically not valid", "WBEM_E_INVALID_SYNTAX"];

    assert.deepEqual(errorLookup(0x80041021, "win32"), err);
    assert.deepEqual(errorLookup(2147749921, "win32"), err);
    assert.deepEqual(errorLookup(-2147217375, "win32"), err);
    assert.deepEqual(errorLookup("WBEM_E_INVALID_SYNTAX", "win32"), err);
  });

  await test("Unknown error code", () => {

    assert.deepEqual(errorLookup("SOME_ERROR_CODE_123"), ["An error has occurred", "SOME_ERROR_CODE_123"]);
    assert.deepEqual(errorLookup(0), ["Error 0 (0x0)"]);

  });
  
  await test("Bad usage", () => {

    assert.throws(function() { errorLookup({}) }, {code: "ERR_INVALID_ARG"});

  });
});
