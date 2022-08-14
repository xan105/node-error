import t from "tap";
import { errorLookup } from "../lib/index.js";

t.test("Error lookup", t => {

  const err = ["Query is syntactically not valid", "WBEM_E_INVALID_SYNTAX"];

  t.same(errorLookup(0x80041021, "win32"), err);
  t.same(errorLookup(2147749921, "win32"), err);
  t.same(errorLookup(-2147217375, "win32"), err);
  t.same(errorLookup("WBEM_E_INVALID_SYNTAX", "win32"), err);
  
  t.test("Unknown error code", t => {

    t.same(errorLookup("SOME_ERROR_CODE_123"), ["An error has occurred", "SOME_ERROR_CODE_123"]);
    t.same(errorLookup(0), ["Error 0 (0x0)"]);
    
  t.end();
  });
  
  t.test("Bad usage", t => {

    t.throws(function() { errorLookup({}) }, {code: "ERR_INVALID_ARG"});
    
  t.end();
  });

t.end();
});
