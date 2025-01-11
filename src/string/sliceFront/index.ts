import type { NonLiteralError } from "@errors"
import type { IsStringLiteral } from "../../predicates/isLiteral"

/**
 * A type that slices the front part of a string literal type `Str` based on the length of `LengthPattern`.
 * It accumulates the sliced characters in `Acc`.
 * If `Str` is not a string literal type, it returns `never`.
 *
 * @template Str - The string literal type to process.
 * @template Limiter - The pattern string used to determine the length of the slice.
 * @template Acc - The accumulator string that stores the sliced characters.
 * @returns {string | never} - Returns the accumulated string if `Str` is a string literal type, otherwise `never`.
 */
export type _SliceFront<
  Str extends string,
  Limiter extends number,
  Acc extends string[],
> = Limiter extends Acc["length"]
  ? Acc
  : Str extends `${infer StrFirst}${infer StrRest}`
    ? _SliceFront<
        StrRest,
        Limiter,
        [...Acc, StrFirst]
      >
    : Acc

// unions, open type issues
export type SliceFront<
  Str extends string,
  Num extends number,
> =
  IsStringLiteral<Str> extends Str
    ? _SliceFront<Str, Num, []>
    : NonLiteralError<"SliceFront", Str>
