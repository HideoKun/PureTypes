import type { FilterError$ } from "../../filters"
import type { NewError } from "../../types/errors"
import type { VALIDATOR_MODES } from "../validate"

type LocValidateEmptyString<
  Mode extends VALIDATOR_MODES,
  T,
  ErrContext extends string = "_ValidateEmptyString",
> = T extends ""
  ? NewError<"EmptyStringError", ErrContext, T>
  : Mode extends "chain"
    ? T
    : never

type Try<Mode extends VALIDATOR_MODES, Err$, Str> = [
  Err$,
] extends [never]
  ? LocValidateEmptyString<Mode, Str>
  : Err$

/**
 * @returns Error | never
 */
export type _ValidateEmptyString$<T> = Try<
  "flat",
  FilterError$<T>,
  T
>

/**
 * @returns Error | T
 */
export type CH_ValidateEmptyString$<T> = Try<
  "chain",
  FilterError$<T>,
  T
>
