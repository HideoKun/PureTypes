import type { IsOpenType } from "../../predicates/is";
import type { NewError } from "../../types";

declare const __brand: unique symbol;

type $Brand<B> = { [__brand]: B };

export type Branded<T, B extends string> = [IsOpenType<T>] extends [true]
  ? NewError<"OpenTypeError", "Validate", T>
  : T & $Brand<B>;
