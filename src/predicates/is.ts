import type { NIL } from "../types"

export type IsNever<T> = [T] extends [never]
  ? true
  : false

export type IsAny<T> = [IsNever<T>] extends [true]
  ? false
  : 0 extends 1 & T
    ? true
    : false

export type IsUnknown<T> = [IsNever<T>] extends [
  true,
]
  ? false
  : 0 extends 1 & T
    ? false
    : [unknown] extends [T]
      ? true
      : false

export type IsOpenType<T> = [T] extends [never] // isNever
  ? true
  : 0 extends 1 & T // isAny
    ? true
    : [unknown] extends [T] // isUnknown
      ? true
      : false

export type IsNil<T> =
  IsOpenType<T> extends true
    ? false
    : [T] extends [NIL]
      ? true
      : false
