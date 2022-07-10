declare interface IOption {
  code?: string | number | null,
  cause?: object | null,
  clean?: boolean,
  filter?: string[],
  info?: object | string | null
}

declare class Failure {
  constructor(message: string, option?: string | number | IOption);
}

export { Failure };
export function errorLookup(code: number | string, os?: string): string[];
export const linuxErrCodes: object;
export const windowsErrCodes: object;
export const windowsErrCodesHRESULT: object;