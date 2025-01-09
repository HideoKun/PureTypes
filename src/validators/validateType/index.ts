import type { FilterError$ } from "../../filters"
import type { NewError } from "../../types/errors"
import type { VALIDATOR_MODES } from "../validate"

type LocValidateType<
  Mode extends VALIDATOR_MODES,
  T,
  Match,
> = [T] extends [Match]
  ? Mode extends "chain"
    ? T
    : never
  : NewError<"MismatchError", "LocValidateType", T>

type Try$<Mode extends VALIDATOR_MODES, Err$, T, Match> = [
  Err$,
] extends [never]
  ? LocValidateType<Mode, T, Match>
  : Err$

/**
 * @returns Error | never
 */
export type ValidateType$<T$, Match> = Try$<
  "flat",
  FilterError$<T$>,
  T$,
  Match
>

/**
 * @returns Error | T
 */
export type CH_ValidateType$<T$, Match> = Try$<
  "chain",
  FilterError$<T$>,
  T$,
  Match
>
