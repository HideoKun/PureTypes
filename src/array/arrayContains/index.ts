/**
 * A type that searches for a match in the array, if there is a match between array element and given the thing you look for it returns true.
 * Only primitive values are supported.
 *
 * @template Array - Array of primitive values.
 * @template Value - Value you look for.
 * @returns {boolean} - Returns `true` if array contains or 'false' otherwise.
 *
 *
 * @example
 * type ArrayContainsBanana = ArrayContains<["apple", "banana", "cherry"], "banana">; // Result: true
 * type ArrayContainsFalse = StartsWith<[true, true, false], false>; // Result: true
 */

import type { _ArrayContains } from "./algo"

export type ArrayContains<
  A extends (string | number | boolean)[],
  V extends string | number | boolean,
> = _ArrayContains<A, V, []>
