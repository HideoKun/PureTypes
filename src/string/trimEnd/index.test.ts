import { expectTypeOf, it } from "vitest";
import type { TrimEnd } from ".";
import type { NEW_LINE, WHITE_SPACE } from "../../types";

type TestStr = "test";

it("should work for args", () => {
  expectTypeOf<TestStr>().toEqualTypeOf<TrimEnd<`${TestStr}${WHITE_SPACE}`>>();
  expectTypeOf<TestStr>().toEqualTypeOf<
    TrimEnd<`${TestStr}${WHITE_SPACE}${WHITE_SPACE}`>
  >();
});

it("should not work for args", () => {
  // @ts-expect-error
  expectTypeOf<TestStr>().toEqualTypeOf<TrimEnd<`${TestStr}${NEW_LINE}`>>();
});
