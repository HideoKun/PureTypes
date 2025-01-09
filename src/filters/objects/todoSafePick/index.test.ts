import { expectTypeOf, it } from "vitest";
import type { TODO_SafePick } from ".";
import type { ConsistentSimpleObject } from "../../../testData";

it("should work", () => {
  expectTypeOf<string>().toEqualTypeOf<
    TODO_SafePick<ConsistentSimpleObject, "a">
  >();
  expectTypeOf<number>().toEqualTypeOf<
    TODO_SafePick<ConsistentSimpleObject, "b">
  >();
  expectTypeOf<boolean>().toEqualTypeOf<
    TODO_SafePick<ConsistentSimpleObject, "c">
  >();
});

it("should not work", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expectTypeOf<any>().toEqualTypeOf<
    // @ts-expect-error
    TODO_SafePick<ConsistentSimpleObject, "z">
  >();
});
