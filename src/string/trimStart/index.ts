import type { IsStringLiteral } from "../../predicates/isLiteral";
import type { WHITE_SPACE } from "../../types";

/**
 * A type that removes all leading occurrences of characters specified by `Space` from the string literal type `S`.
 * It recursively matches and removes the characters from the start of the string.
 * If `S` is not a string literal type, it returns `never`.
 *
 * @template S - The string literal type to process.
 * @template Space - The characters to be removed from the start (default: `WHITE_SPACE`).
 * @returns {string | never} - Returns the resulting string literal type with leading characters removed, or `never` if `S` is not a string literal type.
 *
 * @example
 * type CheckTrimStart = TrimStart<"  Hello World  ">; // Result: "Hello World  "
 */

export type TrimStart<S extends string, Space extends string = WHITE_SPACE> =
  IsStringLiteral<S> extends never
    ? never
    : S extends `${Space}${infer U}`
      ? TrimStart<U>
      : S;
