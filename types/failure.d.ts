declare interface Option {
  code?: string | number | null,
  cause?: object | null,
  clean?: boolean,
  filter?: string[],
  info?: string | object | null
}

export class Failure extends Error {
    constructor(message: string | object, option?: string | number | Option);
    code: string | number | null;
    info: string | object | null;
    stack: string | undefined;
}
