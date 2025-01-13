import type {
  GENERIC_ERROR,
  NeverError,
} from "@errors"
import type { NIL } from "@types"

/**
 * ALGO
 *
 * @returns boolean
 */
export type IsNever<T> = [T] extends [never]
  ? true
  : false

/**
 * ALGO
 *
 * @returns boolean
 */
export type IsAny<T> = [IsNever<T>] extends [true]
  ? false
  : 0 extends 1 & T
    ? true
    : false

/**
 * ALGO
 *
 * @returns boolean
 */
export type IsUnknown<T> = [IsNever<T>] extends [
  true,
]
  ? false
  : 0 extends 1 & T
    ? false
    : [unknown] extends [T]
      ? true
      : false

/**
 * ALGO
 *
 * @returns boolean
 */
export type IsOpenType<T> = [T] extends [never] // isNever
  ? true
  : 0 extends 1 & T // isAny
    ? true
    : [unknown] extends [T] // isUnknown
      ? true
      : false

/**
 * ALGO
 *
 * @returns boolean
 */
export type IsNil<T> = [IsOpenType<T>] extends [
  true,
]
  ? false
  : [T] extends [NIL]
    ? true
    : false

// -----------------------------------------------------

// TODO: add modes, and brackets, and possibly open type validation
/**
 * ALGO
 *
 * @returns boolean
 */
export type IsError_<T> = T extends {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
  ? // ? _Extends<keyof T, keyof GENERIC_ERROR> extends true
    T extends GENERIC_ERROR
    ? true
    : false
  : false

type NE = NeverError<"ctx", "x">

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type X = IsError_<NE>
//   ^?
