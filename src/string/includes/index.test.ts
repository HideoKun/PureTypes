import { expectTypeOf, it } from "vitest";
import type { Includes } from ".";

it("should work", () => {
  expectTypeOf<Includes<"lladon", "belladonna">>().toEqualTypeOf<true>();
  expectTypeOf<Includes<"uszka", "teczuszka">>().toEqualTypeOf<true>();
  expectTypeOf<Includes<"ś", "maciuś">>().toEqualTypeOf<true>();
});

it("should not work", () => {
  // @ts-expect-error
  expectTypeOf<Includes<"xxx", "belladonna">>().toEqualTypeOf<true>();
  // @ts-expect-error
  expectTypeOf<Includes<"nic", "teczuszka">>().toEqualTypeOf<true>();
  // @ts-expect-error
  expectTypeOf<Includes<"s", "maciuś">>().toEqualTypeOf<true>();
});
