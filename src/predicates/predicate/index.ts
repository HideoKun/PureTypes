import type { IsOpenType } from "@algo"
import type { TX } from "@operators"
import type { EitherValidate } from "@validators"
import type { ValidateType$ } from "validators/validateType"
import type { BOOL, PRED_MODE } from "./config"

// TODO: chain validate ALL!
type ConfiguredValidation<
  T,
  Match,
  CX extends string,
> = ValidateType$<
  TX<CX, "SafeChain">,
  EitherValidate<T, "SafeChain">,
  Match
>

/*

Args -> (Args, Context))

*/
// INFO: got corresponding ValidateType
export type IsMatchedType<
  T,
  Match,
  CX extends string,
  MODE extends PRED_MODE, // TODO: default should be debug, exported to algs with "BOOL"
> = [MODE] extends [BOOL]
  ? IsOpenType<
      ConfiguredValidation<
        T,
        Match,
        TX<CX, "Predicate">
      >
    >
  : ConfiguredValidation<
      T,
      Match,
      TX<CX, "Predicate">
    >

// ----------------------------------------------

//prettier-ignore
export type IsString<T, MODE extends PRED_MODE = BOOL> = IsMatchedType<T, string, "IsString", MODE>
//prettier-ignore
export type IsNumber<T, MODE extends PRED_MODE = BOOL> = IsMatchedType<T, number, "IsNumber", MODE>
//prettier-ignore
export type IsBoolean<T, MODE extends PRED_MODE = BOOL> = IsMatchedType<T, boolean, "IsBoolean", MODE>

// ----------------------------------------------

// TODO: debug is broken for positive output (never)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type a = IsString<never, "DEBUG"> // ["__context"]
//   ^?
