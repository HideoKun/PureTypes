import type { IsError_, IsOpenType } from "@algo"

// TODO: unused, remove?
// should we support error validation here?
// parallel to Validate -> IsValid
export type IsValid<T> = [IsOpenType<T>] extends [
  true,
]
  ? false
  : [IsError_<T>] extends [true]
    ? false
    : true
