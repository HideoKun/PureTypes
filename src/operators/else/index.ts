import type { IsOpenType } from "@algo"

export type $SafeElse<A, B> = [
  IsOpenType<A>,
] extends [true]
  ? B
  : A
