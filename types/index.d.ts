declare interface IOption {
  code?: string | number | null,
  cause?: object | null,
  show?: boolean,
  clean?: boolean,
  filter?: string[],
  info?: object | null
}

declare class Failure {
  constructor(message: string, option?: string | number | IOption);
}

export { Failure };