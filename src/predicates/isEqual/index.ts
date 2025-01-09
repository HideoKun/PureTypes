// TODO: Permissive AND operator
export type IsEqual<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? true
    : false
  : false;

// TESTS
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TestUnionN = IsEqual<never, never>;
//   ^?

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TestUnionA = IsEqual<never, "a" | 1>;
//   ^?

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TestUnionB = IsEqual<"a" | "b" | "c", "a" | "b">;
//   ^?

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TestUnionC = IsEqual<"a" | "b", "a" | "b" | "c">;
//   ^?
