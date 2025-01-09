import type { IsStringLiteral } from "../../predicates/isLiteral";
import type { WHITE_SPACE } from "../../types/string";

/**
 * A type that removes all trailing occurrences of characters specified by `Space` from the string literal type `S`.
 * It recursively matches and removes the characters from the end of the string.
 * If `S` is not a string literal type, it returns `never`.
 *
 * @template S - The string literal type to process.
 * @template Space - The characters to be removed from the end (default: `WHITE_SPACE`).
 * @returns {string | never} - Returns the resulting string literal type with trailing characters removed, or `never` if `S` is not a string literal type.
 *
 * @example
 * type CheckTrimEnd = TrimEnd<"  Hello World  ">; // Result: "  Hello World"
 */

export type TrimEnd<S extends string, Space extends string = WHITE_SPACE> =
  IsStringLiteral<S> extends never
    ? never
    : S extends `${infer U}${Space}`
      ? TrimEnd<U>
      : S;
