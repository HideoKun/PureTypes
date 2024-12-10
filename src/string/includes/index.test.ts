import { expectTypeOf, it } from "vitest";
import type { Includes } from ".";

it("should work", () => {
  expectTypeOf<Includes<"belladonna", "lladon">>().toEqualTypeOf<true>();
  expectTypeOf<Includes<"teczuszka", "uszka">>().toEqualTypeOf<true>();
  expectTypeOf<Includes<"maciuś", "ś">>().toEqualTypeOf<true>();

  expectTypeOf<Includes<"belladonna", "xxx">>().toEqualTypeOf<false>();
  expectTypeOf<Includes<"teczuszka", "nic">>().toEqualTypeOf<false>();
  expectTypeOf<Includes<"maciuś", "s">>().toEqualTypeOf<false>();
});
