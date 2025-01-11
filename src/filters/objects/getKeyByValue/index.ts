import type { StrictObject } from "../../../types"
import type { ValueOfObj } from "../valueOf"

/**
 * Get key by value
 * @param O - object
 * @param V - value
 * @returns key
 */
export type GetKeyByValue<
  O extends StrictObject,
  V extends ValueOfObj<O>,
> = keyof {
  [K in keyof O as O[K] extends V
    ? K
    : never]: never
}
