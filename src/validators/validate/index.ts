import type { NewError } from "../../types/errors"

export type VALIDATOR_MODES = "flat" | "chain"

// TODO: add context to errors
type LocValidate$<
  T$,
  IsChainable extends VALIDATOR_MODES,
> = [T$] extends [never] // isNever
  ? NewError<"NeverError", "Validate", T$>
  : 0 extends 1 & T$ // isAny
    ? NewError<"AnyError", "Validate", T$>
    : [unknown] extends [T$] // isUnknown
      ? NewError<"UnknownError", "Validate", T$>
      : IsChainable extends "chain"
        ? T$
        : never

/**
 * @returns Error | never
 */
export type Validate$<T> = LocValidate$<T, "flat">

/**
 * @returns Error | T
 */
export type CH_Validate<T> = LocValidate$<T, "chain">
