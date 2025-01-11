export type FUNC<T extends string> = T extends any
  ? never
  : never
