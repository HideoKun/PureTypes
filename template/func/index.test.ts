import { expectTypeOf, it } from "vitest"
import type { FUNC } from "."

it("should work for args", () => {
  expectTypeOf<>().toEqualTypeOf<FUNC<>>()
})

it("should not work for args", () => {
  // @ts-expect-error
  expectTypeOf<>().toEqualTypeOf<FUNC<>>()
})

it("should return never", () => {
  expectTypeOf<FUNC<>>().toBeNever()
})

it("should handles never", () => {
  expectTypeOf<>().toEqualTypeOf<FUNC<>>()
})

it("should return BROKEN_TYPE", () => {
  expectTypeOf<FUNC<>>().toBeNever()
})
