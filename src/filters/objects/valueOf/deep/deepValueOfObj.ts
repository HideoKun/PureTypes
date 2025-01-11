/* eslint-disable @typescript-eslint/no-unused-vars */

import type {
  ConsistentDeepObj,
  ConsistentSimpleObject,
  InConsistentDeepObj,
} from "@testData"

// TODO: now arr support
export type DeepValueOfObj<
  T extends object,
  Acc = never,
> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? DeepValueOfObj<T[K], Acc>
        : Acc | T[K]
    }[keyof T]
  : never

// TESTS
type CheckDeepObj =
  DeepValueOfObj<ConsistentSimpleObject>
//   ^?
type CheckDeepValueOfA =
  DeepValueOfObj<ConsistentDeepObj>
//   ^?
// TODO: broken, check d1
type CheckDeepValueOfB =
  DeepValueOfObj<InConsistentDeepObj>
//   ^?
