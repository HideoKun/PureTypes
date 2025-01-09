import type { ConsistentObjUnion } from "../../testData";

export type UnionToIntersection<U> =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (U extends any ? (x: U) => void : never) extends (x: infer I) => void
    ? I
    : never;

// TESTS
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TestIntersection = UnionToIntersection<ConsistentObjUnion>;
//   ^?
