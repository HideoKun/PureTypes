import type { NewError, NIL } from "../types";
import type { Predicate } from "./predicate";

export type $IsNever<T> = [T] extends [never] ? true : false;

export type $IsAnyE<T> = [$IsNever<T>] extends [true]
  ? NewError<"AnyError", "IsAny", T>
  : 0 extends 1 & T
    ? true
    : false;

export type $IsUnknownE<T> = [$IsNever<T>] extends [true]
  ? NewError<"UnknownError", "IsUnknown", T>
  : 0 extends 1 & T
    ? false
    : [unknown] extends [T]
      ? true
      : false;

export type IsOpenType<T> = [T] extends [never] // isNever
  ? true
  : 0 extends 1 & T // isAny
    ? true
    : [unknown] extends [T] // isUnknown
      ? true
      : false;

export type IsNil<T> =
  IsOpenType<T> extends true
    ? NewError<"OpenTypeError", "IsNil", T>
    : [T] extends [NIL]
      ? true
      : false;

// --- Common Types Predicates ---

export type IsString<T> = Predicate<T, string>;
export type IsNumber<T> = Predicate<T, number>;
export type IsBoolean<T> = Predicate<T, boolean>;
