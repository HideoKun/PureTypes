import type { IsStringLiteral } from "../../predicates/isLiteral";
import type { WHITE_SPACE } from "../../types/string";
import type { TrimEnd } from "../trimEnd";
import type { TrimStart } from "../trimStart";

/**
 * A type that removes all leading and trailing occurrences of characters specified by `Space` from the string literal type `S`.
 * This is achieved by first applying `TrimEnd` to remove trailing characters, then `TrimStart` to remove leading characters.
 * If `S` is not a string literal type, it returns `never`.
 *
 * @template S - The string literal type to process.
 * @template Space - The characters to be removed from both ends (default: `WHITE_SPACE`).
 * @returns {string | never} - Returns the resulting string literal type with leading and trailing characters removed, or `never` if `S` is not a string literal type.
 *
 * @example
 * type CheckTrim = Trim<"  Hello World  ">; // Result: "Hello World"
 */
export type Trim<S extends string, Space extends string = WHITE_SPACE> =
  IsStringLiteral<S> extends never
    ? never
    : TrimStart<TrimEnd<S, Space>, Space>;
