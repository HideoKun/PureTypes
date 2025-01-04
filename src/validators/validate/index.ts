import type { NewError } from "../../types/errors";

// TODO: add context to errors
// chainable
export type Validate$<T$, IsChainable extends "chain" | "flat" = "chain"> = [
  T$,
] extends [never] // isNever
  ? NewError<"NeverError", "Validate", T$>
  : 0 extends 1 & T$ // isAny
    ? NewError<"AnyError", "Validate", T$>
    : [unknown] extends [T$] // isUnknown
      ? NewError<"UnknownError", "Validate", T$>
      : IsChainable extends "chain"
        ? T$
        : never;
