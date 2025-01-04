import type { Catch } from "../../operators/catch"
import type { ChainValidate } from "../../validators/validate"
import type { ValidateType$ } from "../../validators/validateType"
import type { IsOpenType } from "../is"
import type { BOOL, PRED_MODE } from "./config"

// TODO: chain validate ALL!
type TryPredicate$<T, Match> = ValidateType$<ChainValidate<T>, Match>

export type Predicate<T, Match, MODE extends PRED_MODE> = [MODE] extends [BOOL]
  ? IsOpenType<TryPredicate$<T, Match>>
  : Catch<TryPredicate$<T, Match>> // context !!!

// ----------------------------------------------

export type IsString<T, MODE extends PRED_MODE = BOOL> = Predicate<
  T,
  string,
  MODE
>
export type IsNumber<T, MODE extends PRED_MODE = BOOL> = Predicate<
  T,
  number,
  MODE
>

export type IsBoolean<T, MODE extends PRED_MODE = BOOL> = Predicate<
  T,
  boolean,
  MODE
>
