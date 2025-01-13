import type { TX } from "@operators"
import type {
  EitherValidate,
  Validate$,
} from "@validators"
import type { _StrToArr_Back$ } from "./algo"

type Tx<
  CX extends string,
  Mode extends "IN" | "OUT",
> = TX<CX, `StrToArr-${Mode}`>

type SafeChain<E, Str> = [E] extends [never]
  ? _StrToArr_Back$<Str>
  : E

// -----------------------------------------------------

export type StrToArr<Str extends string> =
  SafeChain<Validate$<Str>, Str>

export type StrToArr_Back$<
  Str,
  CX extends string = "",
> = EitherValidate<
  SafeChain<
    //
    Validate$<Str, Tx<CX, "IN">>,
    Str
  >,
  Tx<CX, "OUT">
>

// -----------------------------------------------------

// type X<T> = _StrToArr_Back$<T> extends any[]
// ? Monad<_StrToArr_Back$<T>>
// :

// type Ch = StrToArr_Back$<number, "test">
// //   ^?
// type Z = `${never}`
