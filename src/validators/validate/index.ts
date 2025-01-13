/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IsError_ } from "@algo"
import type { If$ } from "@core"
import type {
  AnyError,
  NeverError,
  UnknownError,
} from "@errors"
import type { TX } from "@operators"

type Name = "_Validate$"

export type VALIDATOR_MODES = "never" | "either"

type _ValidateAll$<
  Data extends unknown[],
  Acc = never,
> = [Data] extends [[infer First, ...infer Rest]]
  ? _ValidateAll$<
      Rest,
      Acc | _Validate$<First, "never">
    >
  : Acc

type _Validate$<
  T,
  IsChainable extends VALIDATOR_MODES,
  CX extends string = "",
> = [T] extends [never]
  ? NeverError<TX<CX, Name>, T>
  : 0 extends 1 & T
    ? AnyError<TX<CX, Name>, T>
    : [unknown] extends [T]
      ? UnknownError<TX<CX, Name>, T>
      : [T] extends [any[]]
        ? _ValidateAll$<T>
        : IsChainable extends "either"
          ? T
          : If$<IsError_<T>, true, T> // TODO: box mode? -> wrong if$ placement?

// -----------------------------------------------------

/**
 * @returns Error | never
 */
export type Validate$<
  T,
  CX extends string = "",
> = _Validate$<
  //
  T,
  "never",
  TX<CX, "Validate$">
>

/**
 * @returns Error | T
 */
export type EitherValidate<
  T,
  CX extends string = "",
> = _Validate$<
  T,
  "either",
  TX<CX, "EitherValidate">
>
// TODO: fix context for validation (func index, just - to curry context)

// -----------------------------------------------------

type A = Validate$<never, "test">
type B = Validate$<any, "test">
type C = Validate$<unknown, "test">
type E = Validate$<never[], "test">
//   ^?
type F = Validate$<[1, "ś", any], "test">
//   ^?

//   ^?
// type FF = ValidateAll$<[any]>
//   ^?

type Z = IsError_<F>
//   ^?
