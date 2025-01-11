import type { SafeExclude$ } from "../../../transformers/unions/safeExclude"
import type { StrictObject } from "../../../types"

// TODO: add tests for this helper, plain safe omit
export type _SafeOmit<
  O extends StrictObject,
  K extends keyof O,
> = {
  [P in SafeExclude$<keyof O, K>]: O[P]
}

/**
 * A type that omits specified keys from an object type `T`.
 * If `T` is not an object type, it returns `never` instead of `{}`.
 * Returning `never` is intentional, as `{}` makes no sense and is too permissive.
 *
 * @template T - The object type to process.
 * @template K - The keys to omit from the object type `T`.
 * @returns {object | never} - Returns the object type without the specified keys if `T` is an object type, otherwise `never`.
 */
export type SafeOmit<
  O extends StrictObject,
  K extends keyof O,
> = [K] extends [never]
  ? "Broken Input Arg" // TODO: use isNever
  : [K] extends [keyof O]
    ? [keyof O] extends [K]
      ? never
      : _SafeOmit<O, K>
    : never
