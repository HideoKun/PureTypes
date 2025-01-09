import { expectTypeOf, it } from "vitest";
import type { ReverseString } from ".";

it("should work", () => {
  // expectTypeOf<''>().toEqualTypeOf<ReverseString<''>>()
  expectTypeOf<"A">().toEqualTypeOf<ReverseString<"A">>();
  expectTypeOf<"AB">().toEqualTypeOf<ReverseString<"BA">>();
  expectTypeOf<"ABC">().toEqualTypeOf<ReverseString<"CBA">>();

  // expectTypeOf<ReverseString<string>>().toBeNever()

  // type x = ReverseString<string>
  //   ^?
});

it("should add suffix to sliced part", () => {
  // expectTypeOf<'CBA-suffix'>().toEqualTypeOf<ReverseString<'ABC''>>()
});
