import type { _Extends } from "../operators/extends"
import type { GENERIC_ERROR } from "../types"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type _AssertError$<T> = T extends { [key: string]: any }
  ? // TODO: add test check for CTD (Extends)
    _Extends<keyof GENERIC_ERROR, keyof T> extends true
    ? true
    : never // TODO: remove this func and replace it with IsError + FalseToNever
  : never
