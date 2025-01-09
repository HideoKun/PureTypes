import type { ConsistentDeepArr } from "../../../../testData";

export type DeepValueOfArr<
  T extends any[],
  Acc = never,
> = T extends (infer MaybeArr)[]
  ? MaybeArr extends any[]
    ? DeepValueOfArr<MaybeArr, Acc>
    : Acc | MaybeArr
  : T;

// TESTS
type CheckArr2 = DeepValueOfArr<
  (string | number[] | (boolean | symbol)[] | { a: 1 })[]
>;
// TODO: fix line length to support ^?
//   ^?
type CheckArr3 = DeepValueOfArr<ConsistentDeepArr>;
//   ^?
