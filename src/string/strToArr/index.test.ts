import { expectTypeOf, it } from "vitest";
import type { StrToArr } from ".";

type TestStr = "Hello";

it("should work", () => {
  expectTypeOf<["H", "e", "l", "l", "o"]>().toEqualTypeOf<StrToArr<TestStr>>();
});

it("should return empty array to empty string", () => {
  expectTypeOf<[]>().toEqualTypeOf<StrToArr<"">>();
});
