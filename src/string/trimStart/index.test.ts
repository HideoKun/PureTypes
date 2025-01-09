import { expectTypeOf, it } from "vitest";
import type { TrimStart } from ".";
import type { NEW_LINE, WHITE_SPACE } from "../../types";

type TestStr = "test";

it("should work for args", () => {
  expectTypeOf<TestStr>().toEqualTypeOf<
    TrimStart<`${WHITE_SPACE}${TestStr}`>
  >();
  expectTypeOf<TestStr>().toEqualTypeOf<
    TrimStart<`${WHITE_SPACE}${WHITE_SPACE}${TestStr}`>
  >();
});

it("should not work for args", () => {
  // @ts-expect-error
  expectTypeOf<TestStr>().toEqualTypeOf<TrimStart<`${NEW_LINE}${TestStr}`>>();
});
