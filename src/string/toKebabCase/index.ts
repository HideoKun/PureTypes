/**
 * A ToKebabCase implementation on a type level.
 *
 * @template String - A string to turn into kebab case.
 * @returns {string} - a-string-to-turn-into-kebab-case.
 *
 *
 * @example
 * type KebabCased = ToKebabCase<"MixOf_Separators And-Cases">; // Result: mix-of-separators-and-cases
 */

import type { _ToKebabCase } from "./algo"

export type ToKebabCase<Str extends string> =
  _ToKebabCase<Str>
