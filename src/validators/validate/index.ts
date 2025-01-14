/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IsError_ } from "@algo"
import type {
  AnyError,
  NeverError,
  UnknownError,
} from "@errors"
import type { TX } from "@operators"
import type { VALIDATOR_MODES } from "@validators"

type ValidateArr<
  Data extends unknown[],
  Acc,
  CX extends string,
  Index extends any[] = [],
> = [Data] extends [[infer First, ...infer Rest]]
  ? ValidateArr<
      Rest,
      | Acc
      | CoreValidate$<
          First,
          "never",
          TX<CX, `[${Index["length"]}]`>
        >,
      CX,
      [...Index, any]
    >
  : Acc

type Test = Validate$<
  [1, "a", any, true, never, false],
  "Test"
>

type Name = "CoreValidate$"

type CoreValidate$<
  T,
  EitherMode extends VALIDATOR_MODES,
  CX extends string,
> = [T] extends [never]
  ? NeverError<TX<CX, Name>, T>
  : 0 extends 1 & T
    ? AnyError<TX<CX, Name>, T>
    : [unknown] extends [T]
      ? //prettier-ignore
        UnknownError<TX<CX, Name>, T>
      : [T] extends [any[]]
        ? ValidateArr<
            T,
            never,
            TX<CX, Name, "ValidateArr">
          >
        : IsError_<T> extends true
          ? T // error bypass
          : EitherMode extends "either"
            ? T
            : never

// -----------------------------------------------------

/**
 * @returns Error | never
 */
export type Validate$<
  T,
  CX extends string = "",
> = CoreValidate$<
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
> = CoreValidate$<
  T,
  "either",
  TX<CX, "EitherValidate">
>
// TODO: fix context for validation (func index, just - to curry context)

// -----------------------------------------------------

type A = Validate$<never, "Test">
type B = Validate$<any, "Test">
type C = Validate$<unknown, "Test">
type E = Validate$<never[], "Test">
//   ^?
//   ^?

//   ^?
// type FF = ValidateAll$<[any]>
//   ^?

// type Z = IsError_<F>
//   ^?
