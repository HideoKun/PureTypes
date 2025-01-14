import type { TX } from "@operators"

type _Errors = {
  // input --------------------------------
  OpenTypeError: {
    msg: "input: is open types (any, unknown, never)"
    url: "www.wp.pl/a"
  }
  NeverError: {
    msg: "input: is open type (any, unknown, never)"
    url: "www.wp.pl/b"
  }
  AnyError: {
    msg: "input: do not pass any as input"
    url: "www.wp.pl/c"
  }
  UnknownError: {
    msg: "input: do not pass unknown as input"
    url: "www.wp.pl/d"
  }
  MismatchError: {
    msg: "input: type mismatch"
    url: "www.wp.pl/e"
  }
  NonLiteralError: {
    msg: "input: provided type is not literal"
    url: "www.wp.pl/f"
  }
  EmptyStringError: {
    msg: "input: empty string"
    url: "www.wp.pl/g"
  }
  // output --------------------------------
  OutputError: {
    msg: "output: open type"
    url: "www.wp.pl/h"
  }
}

/**
 * @see www.wp.pl
 */
export type NewError<
  ErrorType extends keyof _Errors,
  Context extends string,
  Value,
> = {
  __type: ErrorType
  __message: _Errors[ErrorType]["msg"]
  __url: _Errors[ErrorType]["url"]
  __context: Context
  __value: Value & {} // TODO: pretty
}

export type GENERIC_ERROR = {
  __type: keyof _Errors
  __message?: _Errors[keyof _Errors]["msg"]
  __url?: string
  __context?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __value?: any
}
export type NonErrorObj = object & {
  __message: never
  __url: never
} // type: GenericError

// -----------------------

// prettier-ignore
export type NeverError<CX extends string, T> = NewError<"NeverError", TX<CX, "NeverError">, T>
// prettier-ignore
export type AnyError<CX extends string, T> = NewError<"AnyError", TX<CX, "AnyError">, T>
// prettier-ignore
export type UnknownError<CX extends string, T> = NewError<"UnknownError", TX<CX, "UnknownError">, T>
// prettier-ignore
export type MismatchError<CX extends string, T> = NewError<"MismatchError", TX<CX, "MismatchError">, T>
// prettier-ignore
export type NonLiteralError<CX extends string, T> = NewError<"NonLiteralError", TX<CX, "NonLiteralError">, T>
// prettier-ignore
export type EmptyStringError<CX extends string, T> = NewError<"EmptyStringError", TX<CX, "EmptyStringError">, T>
// prettier-ignore
export type OpenTypeError<CX extends string, T> = NewError<"OpenTypeError", TX<CX, "OpenTypeError">, T>
