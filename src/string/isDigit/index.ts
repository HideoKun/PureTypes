/**
 * A type that returns true if a param is a stringified number, and false otherwise.
 *
 * @template Str - The string literal type to reverse.
 * @returns {string} - Returns the reversed string.
 */

import type { _IsDigit } from "./algo"

export type IsDigit<T extends string> =
  _IsDigit<T>
