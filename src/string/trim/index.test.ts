import { expectTypeOf, it } from "vitest";
import type { Trim } from ".";
import type { NEW_LINE, WHITE_SPACE } from "../../types";

type TestStr = "test";

it("should work for args", () => {
  expectTypeOf<TestStr>().toEqualTypeOf<Trim<`${WHITE_SPACE}${TestStr}`>>();
  expectTypeOf<TestStr>().toEqualTypeOf<Trim<`${TestStr}${WHITE_SPACE}`>>();
  expectTypeOf<TestStr>().toEqualTypeOf<
    Trim<`${WHITE_SPACE}${TestStr}${WHITE_SPACE}`>
  >();
});

it("should not work for args", () => {
  // @ts-expect-error
  expectTypeOf<TestStr>().toEqualTypeOf<Trim<`${NEW_LINE}${TestStr}`>>();
  // @ts-expect-error
  expectTypeOf<TestStr>().toEqualTypeOf<Trim<`${TestStr}${NEW_LINE}`>>();
});
