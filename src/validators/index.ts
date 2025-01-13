import type { IsError_ } from "@algo"
import type {
  AnyError,
  NeverError,
  NewError,
} from "@errors"

export * from "./validate"

// TODO: all below is unused, remove?

export type ValidateNever$<T> = [T] extends [
  never,
]
  ? NeverError<"ValidateNever$", T>
  : never

export type ValidateAny$<T> = [
  IsError_<T>,
] extends [true]
  ? T
  : 0 extends 1 & T
    ? AnyError<"ValidateAny$", T>
    : never

// export type InValidateUnknown<T> = [T] extends [GenericError] // overlap: any to Error
export type ValidateUnknown<T> = [
  IsError_<T>,
] extends [true] // this is better, no overlap
  ? T
  : [unknown] extends [T]
    ? NewError<
        "UnknownError",
        "InValidateUnknown",
        T
      >
    : never
