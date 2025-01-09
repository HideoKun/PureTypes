/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IsStringLiteral } from "../../predicates/isLiteral";

/**
 * A type that removes the first character from a string literal type `Str`.
 * If `Str` is not a string literal type, it returns `never`.
 *
 * @template Str - The string literal type to process.
 * @returns {string | never} - Returns the string without the first character if `Str` is a string literal type, otherwise `never`.
 */
export type DropFirst<Str extends string> =
  IsStringLiteral<Str> extends never
    ? never
    : Str extends `${infer StrFirst}${infer StrRest}`
      ? StrRest
      : never;
