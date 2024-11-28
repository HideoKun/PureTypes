import { expectTypeOf, it } from "vitest";
import type { EndsWith } from ".";

type TestStr = "Hello, World!";

type x = EndsWith<TestStr, "World!">

it("should work for args", () => {
  expectTypeOf<"World!">().toEqualTypeOf<EndsWith<TestStr, "World!">>();
});

it("should not work for args", () => {
  // TODO: Fix tests

  // @ts-expect-error
  expectTypeOf<"Hello">().toEqualTypeOf<EndsWith<TestStr, "O">>();
  // @ts-expect-error
  expectTypeOf<"Hello">().toEqualTypeOf<EndsWith<TestStr, "World!">>();
  // @ts-expect-error
  expectTypeOf<"Hello">().toEqualTypeOf<EndsWith<TestStr, "42">>();
  // @ts-expect-error
  expectTypeOf<"Hello">().toEqualTypeOf<EndsWith<TestStr, 42>>();
});

it("should return never", () => {
  expectTypeOf<EndsWith<string, string>>().toBeNever();
});
