declare interface Option {
  code?: string | number | null,
  cause?: unknown,
  clean?: boolean,
  filter?: string[]
}

export class Failure extends Error {
  constructor(message: string | object, option?: string | number | Option);
  code: string | number | null;
  cause: unknown;
  stack: string | undefined;
}