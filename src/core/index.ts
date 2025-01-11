export type SafeValue<E, T> = [E] extends [never]
  ? T
  : E

// TODO: box mode
export type If$<A, B, C, D = never> = A extends B
  ? C
  : D

export type IfNot$<A, B, C> = A extends B
  ? never
  : C
