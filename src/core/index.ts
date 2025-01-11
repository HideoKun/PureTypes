export type SafeValue<E, T> = [E] extends [never]
  ? T
  : E
