import type {
  AnyError,
  NeverError,
  UnknownError,
} from "@errors"
import type { Trace } from "@operators"
import type { IsError_ } from "@predicates"

export type VALIDATOR_MODES = "flat" | "chain"

type Name = "_Validate$"

type _Validate$<
  T$,
  IsChainable extends VALIDATOR_MODES,
  CX extends string = "",
> = [T$] extends [never]
  ? NeverError<Trace<CX, Name>, T$>
  : 0 extends 1 & T$
    ? AnyError<Trace<CX, Name>, T$>
    : [unknown] extends [T$]
      ? UnknownError<Trace<CX, Name>, T$>
      : IsChainable extends "chain"
        ? T$
        : IsError_<T$> extends true
          ? T$
          : never

/**
 * @returns Error | never
 */
export type Validate$<
  T,
  CX extends string = "",
> = _Validate$<T, "flat", CX>

/**
 * @returns Error | T
 */
export type CH_Validate<T> = _Validate$<T, "chain">
// TODO: fix context for validation (func index, just - to curry context)
