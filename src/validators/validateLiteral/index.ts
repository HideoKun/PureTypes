import type { FilterError$ } from "../../filters"
import type { NewError } from "../../types/errors"
import type { VALIDATOR_MODES } from "../validate"

export type ValidateLiteral$<
  Mode extends VALIDATOR_MODES,
  T,
  Match,
> = [T] extends [Match]
  ? [Match] extends [T]
    ? NewError<"NonLiteralError", "_ValidateLiteral", T>
    : Mode extends "chain" // TODO: how about Chain$<Mode,T> or Resolve, Return?
      ? T
      : never
  : NewError<"MismatchError", "_ValidateLiteral", T>

type Try<Mode extends VALIDATOR_MODES, Err$, T, Match> = [
  Err$,
] extends [never]
  ? ValidateLiteral$<Mode, T, Match>
  : Err$

type ConfigureTry<
  Mode extends VALIDATOR_MODES,
  T$,
  Match,
> = Try<Mode, FilterError$<T$>, T$, Match>

// -----------------------------------------------------

/**
 * @returns Error | never
 */
export type _ValidateStringLiteral<T> = ConfigureTry<
  "flat",
  T,
  string
>

/**
 * @returns Error | never
 */
export type _ValidateNumberLiteral<T> = ConfigureTry<
  "flat",
  T,
  number
>

/**
 * @returns Error | never
 */
export type _ValidateBooleanLiteral<T> = ConfigureTry<
  "flat",
  T,
  boolean
>

/**
 * @returns Error | T
 */
export type CH_ValidateStringLiteral<T> = ConfigureTry<
  "chain",
  T,
  string
>

/**
 * @returns Error | T
 */
export type CH_ValidateNumberLiteral<T> = ConfigureTry<
  "chain",
  T,
  number
>

/**
 * @returns Error | T
 */
export type CH_ValidateBooleanLiteral<T> = ConfigureTry<
  "chain",
  T,
  boolean
>
