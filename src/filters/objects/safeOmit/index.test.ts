import { expectTypeOf, it } from "vitest";
import type { SafeOmit } from ".";
import type { ConsistentSimpleObject } from "../../../testData";

it("should work", () => {
  expectTypeOf<{ b: number; c: boolean }>().toEqualTypeOf<
    SafeOmit<ConsistentSimpleObject, "a">
  >();
  expectTypeOf<{ c: boolean }>().toEqualTypeOf<
    SafeOmit<ConsistentSimpleObject, "a" | "b">
  >();

  expectTypeOf<SafeOmit<ConsistentSimpleObject, "a" | "b" | "c">>().toBeNever();
});

it("should not work", () => {
  // @ts-expect-error
  expectTypeOf<any>().toEqualTypeOf<SafeOmit<ConsistentSimpleObject, "z">>();
});
