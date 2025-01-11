import type { FilterError$ } from "../../filters"
import type { NewError } from "../../types/errors"
import type { VALIDATOR_MODES } from "../validate"

export type ValidateLiteral$<
  Mode extends VALIDATOR_MODES,
  T,
  Match,
> = [T] extends [Match]
  ? [Match] extends [T]
    ? NewError<
        "NonLiteralError",
        "_ValidateLiteral",
        T
      >
    : Mode extends "chain" // TODO: how about Chain$<Mode,T> or Resolve, Return?
      ? T
      : never
  : NewError<
      "MismatchError",
      "_ValidateLiteral",
      T
    >

type SafeChain<
  Mode extends VALIDATOR_MODES,
  E,
  T,
  Match,
> = [E] extends [never]
  ? ValidateLiteral$<Mode, T, Match>
  : E

type Configure<
  Mode extends VALIDATOR_MODES,
  T$,
  Match,
> = SafeChain<Mode, FilterError$<T$>, T$, Match>

// -----------------------------------------------------

/**
 * @returns Error | never
 */
export type Validate_StringLiteral<T> = Configure<
  "flat",
  T,
  string
>

/**
 * @returns Error | never
 */
export type Validate_NumberLiteral<T> = Configure<
  "flat",
  T,
  number
>

/**
 * @returns Error | never
 */
export type Validate_BooleanLiteral<T> =
  Configure<"flat", T, boolean>

/**
 * @returns Error | T
 */
export type EitherValidate_StringLiteral<T> =
  Configure<"chain", T, string>

/**
 * @returns Error | T
 */
export type EitherValidate_NumberLiteral<T> =
  Configure<"chain", T, number>

/**
 * @returns Error | T
 */
export type EitherValidate_BooleanLiteral<T> =
  Configure<"chain", T, boolean>
