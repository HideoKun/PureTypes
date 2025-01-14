import type { IsStringLiteral } from "@predicates"

export type _IsDigit<T> = [T] extends [
  `${number}`,
]
  ? true
  : false

export type IsDigit_Back<T> =
  IsStringLiteral<T> extends true
    ? [T] extends [`${number}`]
      ? true
      : false
    : false
