import type { If$ } from "@core"
import type {
  MismatchError,
  NonLiteralError,
} from "@errors"
import type { VALIDATOR_MODES } from "@validators"
import type { FilterError$ } from "filters"

export type ValidateLiteral$<
  Mode extends VALIDATOR_MODES,
  T,
  Match,
> = [T] extends [Match]
  ? [Match] extends [T]
    ? NonLiteralError<"ValidateLiteral$", T>
    : If$<Mode, "either", T>
  : MismatchError<"_ValidateLiteral", T>

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
> = SafeChain<
  //
  Mode,
  FilterError$<T$>,
  T$,
  Match
>

// -----------------------------------------------------

/**
 * @returns Error | never
 */
export type Validate_StringLiteral<T> = Configure<
  "never",
  T,
  string
>

/**
 * @returns Error | never
 */
export type Validate_NumberLiteral<T> = Configure<
  "never",
  T,
  number
>

/**
 * @returns Error | never
 */
export type Validate_BooleanLiteral<T> =
  Configure<"never", T, boolean>

/**
 * @returns Error | T
 */
export type EitherValidate_StringLiteral<T> =
  Configure<"either", T, string>

/**
 * @returns Error | T
 */
export type EitherValidate_NumberLiteral<T> =
  Configure<"either", T, number>

/**
 * @returns Error | T
 */
export type EitherValidate_BooleanLiteral<T> =
  Configure<"either", T, boolean>
