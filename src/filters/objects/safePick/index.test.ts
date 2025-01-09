import { expectTypeOf, it } from "vitest";
import type { SafePick } from ".";
import type { ConsistentSimpleObject } from "../../../testData";

it("should work", () => {
  expectTypeOf<string>().toEqualTypeOf<SafePick<ConsistentSimpleObject, "a">>();
  expectTypeOf<number>().toEqualTypeOf<SafePick<ConsistentSimpleObject, "b">>();
  expectTypeOf<boolean>().toEqualTypeOf<
    SafePick<ConsistentSimpleObject, "c">
  >();
});

it("should not work", () => {
  //@ts-expect-error
  expectTypeOf<SafePick<ConsistentSimpleArr, 0>>().toBeNever();

  // @ts-expect-error
  expectTypeOf<SafePick<ConsistentSimpleObject, "z">>().toBeNever();

  // @ts-expect-error
  expectTypeOf<any>().toEqualTypeOf<SafePick<{}, "z">>();
});
