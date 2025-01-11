import { expectTypeOf, it } from "vitest";
import type { SplitString } from ".";
import type { BLANK_SIGN, WHITE_SPACE } from "../../types";

type TestStr = "Hello World!";

it("should work for args", () => {
  expectTypeOf<["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"]>().toEqualTypeOf<SplitString<TestStr, BLANK_SIGN>>();
  expectTypeOf<["Hello", "World!"]>().toEqualTypeOf<SplitString<TestStr, WHITE_SPACE>>();
});

it("should not work for args", () => {
  // @ts-expect-error
  expectTypeOf<["Hello", "World!"]>().toEqualTypeOf<SplitString<TestStr, "">>();
  // @ts-expect-error
  expectTypeOf<["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"]>().toEqualTypeOf<SplitString<TestStr, " ">>();
});

it("should return never", () => {
   // @ts-expect-error
   expectTypeOf<["Hello", "World!"]>().toEqualTypeOf<SplitString<TestStr, true>>();
   // @ts-expect-error
   expectTypeOf<["Hello", "World!"]>().toEqualTypeOf<SplitString<TestStr, 42>>();
   // @ts-expect-error
   expectTypeOf<["Hello", "World!"]>().toEqualTypeOf<SplitString<TestStr, undefined>>();
});
