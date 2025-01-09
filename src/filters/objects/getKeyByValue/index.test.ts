import { expectTypeOf, it } from "vitest";
import type { GetKeyByValue } from ".";
import type { ConsistentSimpleObject } from "../../../testData";

it("should work", () => {
  expectTypeOf<"a">().toEqualTypeOf<
    GetKeyByValue<ConsistentSimpleObject, string>
  >();
  expectTypeOf<"b">().toEqualTypeOf<
    GetKeyByValue<ConsistentSimpleObject, number>
  >();
  expectTypeOf<"c">().toEqualTypeOf<
    GetKeyByValue<ConsistentSimpleObject, boolean>
  >();

  expectTypeOf<GetKeyByValue<ConsistentSimpleObject, 1>>().toBeNever();
});

it("should not work", () => {
  // @ts-expect-error
  expectTypeOf<string>().toEqualTypeOf<GetKeyByValue<string[], string>>();
});
