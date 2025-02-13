import type { _ReplaceString } from "./algo"

/**
 * Replace substring on a type level. If substring is not a part of string, the oryginal strnig will be returned.
 *
 * @template Str - The string type to check against.
 * @template StrToReplace - Part of the oryginal string.
 * @template Replacement - String that will replace second arg.
 * @returns {string} - Returns string with replaced substring or oryginal string if the substring to replace was not found in oryginal string.
 */

export type ReplaceString<
  Str extends string,
  StrToReplace extends string,
  Replacement extends string,
> = _ReplaceString<Str, StrToReplace, Replacement>
