import { expectTypeOf, it } from "vitest";
import type { $Maybe } from ".";

const str: $Maybe<string> = "hello";

it("should work", () => {
  expectTypeOf(str).toEqualTypeOf<string>();
  expectTypeOf(str).toMatchTypeOf<$Maybe<string>>();

  // assertType(mount({ name: 42 }))
});
