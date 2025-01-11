// TODO: validation?
export type IsEqual<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? true
    : false
  : false

// TESTS
// prettier-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TestUnionN = IsEqual<never, never>;
//   ^?

// prettier-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TestUnionA = IsEqual<never, "a" | 1>;
//   ^?

// prettier-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TestUnionB = IsEqual<"a" | "b" | "c", "a" | "b">;
//   ^?

// prettier-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TestUnionC = IsEqual<"a" | "b", "a" | "b" | "c">;
//   ^?
