import type { IsOpenType } from "@predicates"

export type $SafeElse<A, B> = [
  IsOpenType<A>,
] extends [true]
  ? B
  : A
