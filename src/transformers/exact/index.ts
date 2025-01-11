/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ConsistentSimpleObject } from "../../testData/index"

export type Exact$<O extends object> = O & {
  [K in keyof O]: O[K]
}

// TESTS

const fn = () => {}

const a: Exact$<ConsistentSimpleObject> = {
  a: "a",
  b: 1,
  c: true,
  // @ts-expect-error
  d: "d",
}
const b: Exact$<[]> = []
// @ts-expect-error
const c: Exact$<typeof fn> = []
// @ts-expect-error
const d: Exact$<""> = {
  a: "a",
  b: 1,
  c: true,
  d: "d",
}
