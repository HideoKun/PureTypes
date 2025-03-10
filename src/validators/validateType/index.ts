import type { If$ } from "@core"
import type { NewError } from "@errors"
import type { TX } from "@operators"
import type { VALIDATOR_MODES } from "@validators"
import type { FilterError$ } from "filters"

type _ValidateType<
  CX extends string,
  Mode extends VALIDATOR_MODES,
  T,
  Match,
> = [T] extends [Match]
  ? If$<Mode, "either", T>
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
  "never",
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
    "either",
    FilterError$<T$>,
    T$,
    Match
  >
