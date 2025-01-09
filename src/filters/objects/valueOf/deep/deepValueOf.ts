import type {
  ConsistentDeepArr,
  ConsistentDeepObj,
  InConsistentDeepObj,
} from "../../../../testData";

// TODO: add JS Docs support
// TODO: how deep it should be?
export type DeepValueOf<
  T extends any[] | object,
  Acc = never,
> = T extends (infer MaybeArr)[]
  ? MaybeArr extends any[]
    ? DeepValueOf<MaybeArr, Acc>
    : Acc | MaybeArr
  : // --- Object ---
    T extends object
    ? {
        [K in keyof T]: T[K] extends object | undefined | any[]
          ? // --- Object ---
            DeepValueOf<NonNullable<T[K]>, Acc>
          : Acc | T[K];
      }[keyof T]
    : never;

// TESTS
// INFO: undefined comes from optional +? fields
type CheckDeepValueOfA = DeepValueOf<ConsistentDeepObj>;
//   ^?
type CheckDeepValueOfB = DeepValueOf<ConsistentDeepArr>;
//   ^?
type CheckDeepValueOfC = DeepValueOf<InConsistentDeepObj>;
//   ^?
