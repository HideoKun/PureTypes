import type TX from "@operators"
import type { EitherValidate } from "../../validators/validate"
import type { ValidateType$ } from "../../validators/validateType"
import type { IsOpenType } from "../is"
import type { BOOL, PRED_MODE } from "./config"

// build predicates from validators

// TODO: chain validate ALL!
type SafeChain<
  T,
  Match,
  CX extends string,
> = ValidateType$<
  TX<CX, "SafeChain">,
  EitherValidate<T, "SafeChain">,
  Match
>

export type Predicate<
  T,
  Match,
  CX extends string,
  MODE extends PRED_MODE,
> = [MODE] extends [BOOL]
  ? IsOpenType<
      SafeChain<T, Match, TX<CX, "Predicate">>
    >
  : SafeChain<T, Match, TX<CX, "Predicate">>

// ----------------------------------------------

//prettier-ignore
export type IsString<T, MODE extends PRED_MODE = BOOL> = Predicate<T, string, "IsString", MODE>
//prettier-ignore
export type IsNumber<T, MODE extends PRED_MODE = BOOL> = Predicate<T, number, "IsNumber", MODE>
//prettier-ignore
export type IsBoolean<T, MODE extends PRED_MODE = BOOL> = Predicate<T, boolean, "IsBoolean", MODE>

// ----------------------------------------------

// TODO: debug is broken for positive output (never)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type a = IsString<never, "DEBUG"> // ["__context"]
//   ^?
