import type { SimpleUnion } from "@testData"
import { expectTypeOf, it } from "vitest"
import type { SafeExclude$ } from "."

it("should work", () => {
  expectTypeOf<"b" | "c">().toEqualTypeOf<
    SafeExclude$<SimpleUnion, "a">
  >()
  expectTypeOf<"c">().toEqualTypeOf<
    SafeExclude$<SimpleUnion, "a" | "b">
  >()

  expectTypeOf<
    SafeExclude$<SimpleUnion, SimpleUnion>
  >().toBeNever()
})

it("should not work", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expectTypeOf<any>().toEqualTypeOf<
    // @ts-expect-error
    SafeExclude$<SimpleUnion, "z">
  >()
})
