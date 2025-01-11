/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
  ConsistentDeepArr,
  ConsistentDeepObj,
  ConsistentSimpleObject,
} from "@testData"

export type ValueOfObj<T extends object> =
  T[keyof T]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ValueOfArr<T extends any[]> =
  T[number]

// TESTS
type CheckValueOfA =
  ValueOfObj<ConsistentSimpleObject>
//   ^?
type CheckValueOfB = ValueOfArr<ConsistentDeepArr>
//   ^?
type CheckObj = ValueOfObj<ConsistentDeepObj>
//   ^?
type CheckArr1 = ValueOfArr<ConsistentDeepArr>
//     ^?
