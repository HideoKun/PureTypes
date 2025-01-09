import { expectTypeOf, it } from "vitest";
import type { SafeExclude } from ".";
import type { SimpleUnion } from "../../../testData";

it("should work", () => {
  expectTypeOf<"b" | "c">().toEqualTypeOf<SafeExclude<SimpleUnion, "a">>();
  expectTypeOf<"c">().toEqualTypeOf<SafeExclude<SimpleUnion, "a" | "b">>();

  expectTypeOf<SafeExclude<SimpleUnion, SimpleUnion>>().toBeNever();
});

it("should not work", () => {
  // @ts-expect-error
  expectTypeOf<any>().toEqualTypeOf<SafeExclude<SimpleUnion, "z">>();
});
