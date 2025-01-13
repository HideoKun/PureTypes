import type { If$ } from "@core"
import type { EmptyStringError } from "@errors"
import type { VALIDATOR_MODES } from "@validators"
import type { FilterError$ } from "filters"

type _ValidateEmptyString<
  Mode extends VALIDATOR_MODES,
  T,
  CX extends string = "_ValidateEmptyString",
> = T extends ""
  ? EmptyStringError<CX, T> // TODO: TX
  : If$<Mode, "either", T>

type SafeChain<
  Mode extends VALIDATOR_MODES,
  E,
  Str,
> = [E] extends [never]
  ? _ValidateEmptyString<Mode, Str>
  : E

/**
 * @returns Error | never
 */
export type ValidateEmptyString$<T> = SafeChain<
  "never",
  FilterError$<T>,
  T
>

/**
 * @returns Error | T
 */
export type EitherValidate_EmptyString$<T> =
  SafeChain<
    //
    "either",
    FilterError$<T>,
    T
  >
