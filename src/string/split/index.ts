import type { ValidateAll$ } from "../../validators/validateAll";
import type { _SplitString, _SplitString_BACK } from "./algo";

/**
 * SplitString type that splits the string literal type `Str` into an array of substrings separated by the `Separator`.
 * It recursively processes the string, accumulating substrings in an array based on the specified separator.
 * If either `Str` or `Separator` is not a string literal type, it returns `never`.
 * @template Str - The string literal type to split.
 * @template Separator - The string literal type used as the separator (default: `BLANK_SIGN`).
 * @returns {string[] | never}
*/

type Try<Err$, Str, Separator>
  = [Err$] extends [never]
    ? _SplitString_BACK<Str, Separator>
    : Err$;

export type SplitString<Str extends string, Separator extends string> = Try<
  ValidateAll$<[Str, Separator]>,
  Str,
  Separator
>;
