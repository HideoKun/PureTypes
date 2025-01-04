import type { IsError } from "../predicates/isError";
import type { NewError } from "../types";

export type ValidateNever$<T> = [T] extends [never]
  ? NewError<"NeverError", "InValidateNever", T>
  : never;

export type ValidateAny$<T> = [IsError<T>] extends [true]
  ? T
  : 0 extends 1 & T
    ? NewError<"AnyError", "InValidateAny", T>
    : never;

// export type InValidateUnknown<T> = [T] extends [GenericError] // overlap: any to Error
export type ValidateUnknown<T> = [IsError<T>] extends [true] // this is better, no overlap
  ? T
  : [unknown] extends [T]
    ? NewError<"UnknownError", "InValidateUnknown", T>
    : never;
