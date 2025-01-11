import { expectTypeOf, it } from "vitest"
import type { EndsWith } from "."

type TestStr = "Hello, World!"

it("should work for args", () => {
  expectTypeOf<"World!">().toEqualTypeOf<
    EndsWith<TestStr, "World!">
  >()
})

// prettier-ignore
it("should not work for args", () => {
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
  expectTypeOf<
    EndsWith<string, string>
  >().toBeNever()
})
