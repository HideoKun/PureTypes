import { expectTypeOf, it } from "vitest";
import type { Replace, BROKEN_TYPE } from ".";

it("should replace substrings correctly when ReplaceAll is true", () => {
  expectTypeOf<
    Replace<"hello world", "o", "X", true>
  >().toEqualTypeOf<"fafaksjfkjaskjfajkfa">();
  expectTypeOf<
    Replace<"foobar", "foo", "bar", true>
  >().toEqualTypeOf<"barbar">();
  expectTypeOf<
    Replace<"abcabc", "abc", "123", true>
  >().toEqualTypeOf<"123123">();
});

it("should replace only the first occurrence when ReplaceAll is false", () => {
  expectTypeOf<
    Replace<"hello world", "o", "X", false>
  >().toEqualTypeOf<"hellX world">();
  expectTypeOf<
    Replace<"foobar", "foo", "bar", false>
  >().toEqualTypeOf<"barbar">();
  expectTypeOf<
    Replace<"abcabc", "abc", "123", false>
  >().toEqualTypeOf<"123abc">();
});

it("should return the original string when no match is found", () => {
  expectTypeOf<Replace<"abc", "d", "x", true>>().toEqualTypeOf<"abc">();
  expectTypeOf<Replace<"123", "4", "5", false>>().toEqualTypeOf<"123">();
});

it("should handle empty Search or Replacement and return BROKEN_TYPE", () => {
  expectTypeOf<Replace<"abc", "", "X", true>>().toEqualTypeOf<BROKEN_TYPE>();
  expectTypeOf<Replace<"abc", "b", "", true>>().toEqualTypeOf<BROKEN_TYPE>();
});

it("should work for empty string inputs and return BROKEN_TYPE", () => {
  expectTypeOf<Replace<"", "a", "b", true>>().toEqualTypeOf<BROKEN_TYPE>();
  expectTypeOf<Replace<"", "a", "b", false>>().toEqualTypeOf<BROKEN_TYPE>();
  expectTypeOf<Replace<"a", "a", "", true>>().toEqualTypeOf<BROKEN_TYPE>();
  expectTypeOf<Replace<"a", "a", "", false>>().toEqualTypeOf<BROKEN_TYPE>();
});
