import type {
  ConsistentDeepArr,
  ConsistentDeepObj,
  ConsistentSimpleObject,
} from "../../../testData";

export type ValueOfObj<T extends object> = T[keyof T];

export type ValueOfArr<T extends any[]> = T[number];

// TODO: readonly?
export type ValueOf<T extends object | any[]> = T extends any[]
  ? ValueOfArr<T>
  : T extends object
    ? ValueOfObj<T>
    : never;

// TESTS
type CheckValueOfA = ValueOf<ConsistentSimpleObject>;
//   ^?
type CheckValueOfB = ValueOf<ConsistentDeepArr>;
//   ^?
type CheckObj = ValueOf<ConsistentDeepObj>;
//   ^?
type CheckArr1 = ValueOf<ConsistentDeepArr>;
//     ^?
