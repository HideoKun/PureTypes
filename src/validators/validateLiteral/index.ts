import type { _FilterError$ } from "../../filters";
import type { NewError } from "../../types/errors";

export type ValidateLiteral<T, Match> = [T] extends [Match]
  ? [Match] extends [T]
    ? NewError<"NonLiteralError", "_ValidateLiteral", T>
    : T
  : NewError<"MismatchError", "_ValidateLiteral", T>;

type Try<Err$, T, Match> = [Err$] extends [never]
  ? ValidateLiteral<T, Match>
  : Err$;

type PreSet<T$, Match> = Try<_FilterError$<T$>, T$, Match>;

// -----------------------------------------------------

export type ValidateStringLiteral<T> = PreSet<T, string>;
export type ValidateNumberLiteral<T> = PreSet<T, number>;

// validator -> predicate
