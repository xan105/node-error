export function attempt(fn: unknown, args?: unknown[]): unknown[] | Promise<unknown[]>;
export function attemptify(fn: unknown): (...args: unknown[]) => unknown[] | Promise<unknown[]>;
