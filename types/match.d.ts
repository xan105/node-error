export function match(fn: unknown, args: unknown[], cb?: { Ok?: function, Err?: function }): Promise<unknown> | unknown;