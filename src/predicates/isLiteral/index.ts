import type { ValidateAll$ } from "../../validators/validateAll";

export type _IsLiteral<T, Match> = [T] extends [Match]
  ? [Match] extends [T]
    ? false
    : true
  : false;

type Try<Err$, T, Match> = [Err$] extends [never] ? _IsLiteral<T, Match> : Err$;

type PreSet<T$, Match$> = Try<
  //
  ValidateAll$<[T$, Match$]>,
  T$,
  Match$
>;

export type IsStringLiteral<T> = PreSet<T, string>;
export type IsNumberLiteral<T> = PreSet<T, number>;
