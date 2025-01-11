import type { TX } from "@operators"
import type { FilterError$ } from "../../filters"
import type { NewError } from "../../types/errors"
import type { VALIDATOR_MODES } from "../validate"

type _ValidateType<
  CX extends string,
  Mode extends VALIDATOR_MODES,
  T,
  Match,
> = [T] extends [Match]
  ? Mode extends "chain"
    ? T
    : never
  : NewError<
      "MismatchError",
      TX<CX, "_ValidateType">,
      T
    >

type SafeChain<
  CX extends string,
  Mode extends VALIDATOR_MODES,
  E,
  T,
  Match,
> = [E] extends [never]
  ? _ValidateType<CX, Mode, T, Match>
  : E

/**
 * @returns Error | never
 */
export type ValidateType$<
  CX extends string,
  T$,
  Match,
> = SafeChain<
  CX,
  "flat",
  FilterError$<T$>,
  T$,
  Match
>

/**
 * @returns Error | T
 */
export type EitherValidate_Type$<T$, Match> =
  SafeChain<
    "CX",
    "chain",
    FilterError$<T$>,
    T$,
    Match
  >
