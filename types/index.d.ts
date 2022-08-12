declare interface IOption {
  code?: string | number | null,
  cause?: object | null,
  clean?: boolean,
  filter?: string[],
  info?: object | string | null
}

declare class Failure {
  constructor(message: string | object, option?: string | number | IOption);
}

export { Failure };
export function errorLookup(code: number | string, os?: string): string[];
export function attempt(fn: unknown, args?: any[]):[unknown, Error | undefined] | Promise<[unknown, Error | undefined]>;

//Operating System Error Codes
export const linuxErrCodes: object;
export const windowsErrCodes: object;
export const windowsErrCodesHRESULT: object;