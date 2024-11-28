import { expectTypeOf, it } from "vitest";
import type { StartsWith } from ".";

type TestStr = "Hello, World!";

it("should work for args", () => {
  expectTypeOf<"Hello">().toEqualTypeOf<StartsWith<TestStr, "Hello">>();
});

it("should not work for args", () => {
  // @ts-expect-error
  expectTypeOf<"Hello">().toEqualTypeOf<StartsWith<TestStr, "hello">>();
  // @ts-expect-error
  expectTypeOf<"Hello">().toEqualTypeOf<StartsWith<TestStr, " hell">>();
  // @ts-expect-error
  expectTypeOf<"Hello">().toEqualTypeOf<StartsWith<TestStr, "42">>();
  // @ts-expect-error
  expectTypeOf<"Hello">().toEqualTypeOf<StartsWith<TestStr, 42>>();
});

it("should return never", () => {
  expectTypeOf<StartsWith<string, string>>().toBeNever();
});
