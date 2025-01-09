import { expectTypeOf, it } from "vitest";
import type { GetStringLength } from ".";

it("should not work for non string", () => {
  // @ts-expect-error
  expectTypeOf<string>().toEqualTypeOf<GetStringLength<string, 1>>();
});

it("should return never for non string literal", () => {
  // expectTypeOf<GetStringLength<string>>().toBeNever();
});

it("should work with string literals", () => {
  // expectTypeOf<0>().toEqualTypeOf<GetStringLength<"">>();
  expectTypeOf<1>().toEqualTypeOf<GetStringLength<"A">>();
  expectTypeOf<2>().toEqualTypeOf<GetStringLength<"AB">>();
  expectTypeOf<3>().toEqualTypeOf<GetStringLength<"ABC">>();

  // expectTypeOf<GetStringLength<string>>().toBeNever();
});
