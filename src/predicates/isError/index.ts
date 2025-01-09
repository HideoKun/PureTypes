/* eslint-disable @typescript-eslint/no-explicit-any */
import type { _Extends } from "../../operators/extends"
import type { GENERIC_ERROR } from "../../types"

// TODO: add modes, and brackets, and possibly open type validation
export type IsError_<T> = [T] extends [{ [key: string]: any }]
  ? [_Extends<keyof GENERIC_ERROR, keyof T>] extends [true]
    ? true
    : false
  : false

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type X = IsError_<never>
//   ^?
