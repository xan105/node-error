declare interface IOption {
  code?: string | number | null,
  cause?: object | null,
  show?: boolean,
  info?: object | null
}

declare class Failure {
  constructor(message: string, option?: string | number | IOption);
}

export { Failure };