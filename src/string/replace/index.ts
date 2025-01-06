/**
 * A type that replaces occurrences of the substring `Search` in the string literal type `S`
 * with the substring `Replacement`.
 * If `ReplaceAll` is `true`, all occurrences of `Search` are replaced; otherwise, only the first.
 * If `S`, `Search`, or `Replacement` are empty strings, it returns `BrokenType`.
 *
 * @template S - The string literal type in which replacements are to be made.
 * @template Search - The substring to find and replace.
 * @template Replacement - The substring to replace `Search` with.
 * @template ReplaceAll - Boolean flag indicating whether to replace all occurrences (true) or only the first (false).
 * @returns {string | BrokenType} - Returns a new string literal type with occurrences of `Search` replaced by `Replacement`,
 * or `BrokenType` if `S`, `Search`, or `Replacement` are empty.
 *
 * @example
 * type Example1 = Replace<"hello world", "o", "X", true>;  // Result: "hellX wXrld"
 * type Example2 = Replace<"hello world", "o", "X", false>; // Result: "hellX world"
 * type Example3 = Replace<"", "o", "X", true>;             // Result: BrokenType
 * type Example4 = Replace<"hello", "", "X", true>;         // Result: BrokenType
 * type Example5 = Replace<"hello", "o", "", true>;         // Result: BrokenType
 */

import type { BROKEN_TYPE } from "../../types";

export type _Replace<
  S extends string,
  Search extends string,
  Replacement extends string,
  ReplaceAll extends boolean = true
> = S extends `${infer T}${Search}${infer Rest}`
  ? ReplaceAll extends true
    ? `${T}${Replacement}${_Replace<Rest, Search, Replacement, ReplaceAll>}`
    : `${T}${Replacement}${Rest}`
  : S;

export type Replace<
  S extends string,
  Search extends string,
  Replacement extends string,
  ReplaceAll extends boolean = true
> = S extends ""
  ? BROKEN_TYPE
  : Search extends ""
  ? BROKEN_TYPE
  : Replacement extends ""
  ? BROKEN_TYPE
  : _Replace<S, Search, Replacement, ReplaceAll>;
