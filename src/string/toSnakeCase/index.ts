/**
 * A ToSnakeCase implementation on a type level.
 *
 * @template String - A string to turn into snake case.
 * @returns {string} - a_string_to_turn_into_snake_case.
 *
 *
 * @example
 * type SnakeCased = ToSnakeCase<"MixOf_Separators And-Cases">; // Result: mix_of_separators_and_cases
 */

import type { _ToSnakeCase } from "./algo"

export type ToSnakeCase<Str extends string> =
  _ToSnakeCase<Str>
