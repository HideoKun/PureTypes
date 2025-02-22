import type { PRIMITIVE } from "@types"
import { expectTypeOf, it } from "vitest"
import type { GENERIC_ERROR } from "."

it("should work", () => {
  expectTypeOf<GENERIC_ERROR>().toEqualTypeOf<GENERIC_ERROR>()
})

it("should not work", () => {
  // @ts-expect-error
  expectTypeOf<GENERIC_ERROR>().toEqualTypeOf<PRIMITIVE>()
  // @ts-expect-error
  expectTypeOf<GENERIC_ERROR>().toEqualTypeOf<string>()
  // @ts-expect-error
  expectTypeOf<GENERIC_ERROR>().toEqualTypeOf<"string">()
  // @ts-expect-error
  expectTypeOf<GENERIC_ERROR>().toEqualTypeOf<number>()
  // @ts-expect-error
  expectTypeOf<GENERIC_ERROR>().toEqualTypeOf<1>()
  // @ts-expect-error
  expectTypeOf<GENERIC_ERROR>().toEqualTypeOf<boolean>()
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  expectTypeOf<GENERIC_ERROR>().toEqualTypeOf<{}>()
  // @ts-expect-error
  expectTypeOf<GENERIC_ERROR>().toEqualTypeOf<object>()

  expectTypeOf<GENERIC_ERROR>().toEqualTypeOf<
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any[]
  >()
})
