import type { FilterError$ } from "../../filters"
import type { EmptyStringError } from "../../types/errors"
import type { VALIDATOR_MODES } from "../validate"

type _ValidateEmptyString<
  Mode extends VALIDATOR_MODES,
  T,
  ErrContext extends
    string = "_ValidateEmptyString",
> = T extends ""
  ? EmptyStringError<ErrContext, T>
  : Mode extends "chain"
    ? T
    : never

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
  "flat",
  FilterError$<T>,
  T
>

/**
 * @returns Error | T
 */
export type EitherValidate_EmptyString$<T> =
  SafeChain<"chain", FilterError$<T>, T>
