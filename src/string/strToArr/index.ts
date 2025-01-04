import type { Catch } from "../../operators/catch"
import type { Validate$ } from "../../validators/validate"
import type { _StrToArr_Back$ } from "./algo"

type _Try<Err$, Str> = [Err$] extends [never]
  ? Catch<_StrToArr_Back$<Str>>
  : Err$

export type StrToArr<Str extends string> = _Try<Validate$<Str, "flat">, Str>
export type StrToArr_Back<Str> = _Try<Validate$<Str, "flat">, Str>
