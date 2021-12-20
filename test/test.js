import { Failure } from "../lib/esm.js";

try{ throw new Failure("message", "err_code") }catch(err){ console.error(err) }
try{ throw new Failure("message", 1) }catch(err){ console.error(err) }
try{ throw new Failure("message") }catch(err){ console.error(err) }

try{ throw new Failure("message", 99) }catch(err){ console.error(err) }
try{ throw new Failure("message", "") }catch(err){ console.error(err) }

try{ throw new Failure("") }catch(err){ console.error(err) }
try{ throw new Failure() }catch(err){ console.error(err) }

