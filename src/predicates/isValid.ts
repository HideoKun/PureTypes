import type { IsOpenType } from "./is"
import type { IsError_ } from "./isError"

export type IsValid<T> = [IsOpenType<T>] extends [true]
  ? false
  : [IsError_<T>] extends [true]
    ? false
    : true
