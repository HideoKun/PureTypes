export type SafeValue<E, T> = [E] extends [never]
  ? T
  : E

// ----

export type IfElse$<A, B, C, D> = A extends B
  ? C
  : D

// TODO: box mode
export type If$<A, B, C> = IfElse$<A, B, C, never>

// ----
// TODO: keep'em close - one utils for [a,b] grouping and switch param for a or b pick
export type FilterType$<
  All,
  Sub extends All,
> = All extends Sub ? All : never

export type RejectType$<
  All,
  Sub extends All,
> = All extends Sub ? never : All
