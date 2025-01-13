import type { ValidateUsableSting$ } from "../../validators/validateUsableSting"
import type { _ReverseString_BACK$ } from "./algo"

type SafeChain$<E, Str> = [E] extends [never]
  ? _ReverseString_BACK$<Str>
  : E

/**
 * A type that reverses a string literal type `Str`.
 * It accumulates the reversed characters in `Acc`.
 * If `Str` is not a string literal type, it returns `Acc`.
 *
 * @template Str - The string literal type to reverse.
 * @returns {string} - Returns the reversed string.
 */
export type ReverseString<Str extends string> =
  SafeChain$<ValidateUsableSting$<Str>, Str>

export type ReverseString_Back<Str> = SafeChain$<
  ValidateUsableSting$<Str>,
  Str
>
