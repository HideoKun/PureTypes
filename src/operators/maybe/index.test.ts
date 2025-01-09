import { expectTypeOf, it } from "vitest";
import type { _Maybe } from ".";

const str: _Maybe<string> = "hello";

it("should work", () => {
  expectTypeOf(str).toEqualTypeOf<string>();
  expectTypeOf(str).toMatchTypeOf<_Maybe<string>>();

  // assertType(mount({ name: 42 }))
});
