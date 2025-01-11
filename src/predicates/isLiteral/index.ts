import type { Validate$ } from "validators/validate"

export type _IsLiteral<T, Match> = [T] extends [
  Match,
]
  ? [Match] extends [T]
    ? false
    : true
  : false

type SafeChain<Err$, T, Match> = [Err$] extends [
  never,
]
  ? _IsLiteral<T, Match>
  : Err$

type Configure<T$, Match$> = SafeChain<
  Validate$<[T$, Match$]>,
  T$,
  Match$
>

// -----------------------------------------------------

export type IsStringLiteral<T> = Configure<
  T,
  string
>
export type IsNumberLiteral<T> = Configure<
  T,
  number
>
