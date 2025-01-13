import type { IsOpenType } from "@algo"
import type { OpenTypeError } from "@errors"

declare const __brand: unique symbol

type $Brand<B> = { [__brand]: B }

export type Branded<T, B extends string> = [
  IsOpenType<T>,
] extends [true]
  ? OpenTypeError<"Validate", T>
  : T & $Brand<B>
