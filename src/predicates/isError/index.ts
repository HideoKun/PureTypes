/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  GENERIC_ERROR,
  NeverError,
} from "../../types"

// TODO: add modes, and brackets, and possibly open type validation
/**
 * !!! UNSAFE !!!
 *
 * @returns bool
 */
export type IsError_<T> = T extends {
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
