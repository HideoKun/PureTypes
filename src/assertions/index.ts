import type { GENERIC_ERROR } from "@errors"
import type { _Extends } from "@operators"

export type _AssertError$<T> = T extends {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
  ? // TODO: add test check for CTD (Extends)
    _Extends<
      keyof GENERIC_ERROR,
      keyof T
    > extends true
    ? true
    : never // TODO: remove this func and replace it with IsError + FalseToNever
  : never
