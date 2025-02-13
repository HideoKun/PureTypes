import {
  describe,
  it,
  expectTypeOf,
} from "vitest"
import type { _ReplaceString } from "./algo"

describe("ReplaceString type tests", () => {
  it("should replace the string at the beginning", () => {
    type T1 = _ReplaceString<
      "hello world",
      "hello",
      "goodbye"
    >
    expectTypeOf<T1>().toEqualTypeOf<"goodbye world">()
  })

  it("should replace the string in the middle", () => {
    type T2 = _ReplaceString<
      "hello world",
      "world",
      "universe"
    >
    expectTypeOf<T2>().toEqualTypeOf<"hello universe">()
  })

  it("should replace the string at the end", () => {
    type T3 = _ReplaceString<
      "hello world",
      "world",
      "universe"
    >
    expectTypeOf<T3>().toEqualTypeOf<"hello universe">()
  })

  it("should not replace if the string is not found", () => {
    type T5 = _ReplaceString<
      "hello world",
      "goodbye",
      "universe"
    >
    expectTypeOf<T5>().toEqualTypeOf<"hello world">()
  })

  it("should handle special characters", () => {
    type T9 = _ReplaceString<
      "hello.world",
      ".",
      "_"
    >
    expectTypeOf<T9>().toEqualTypeOf<"hello_world">()
  })

  it("should handle special characters in replacement", () => {
    type T10 = _ReplaceString<
      "hello world",
      "world",
      "universe!"
    >
    expectTypeOf<T10>().toEqualTypeOf<"hello universe!">()
  })

  it("should handle strings with multibyte characters", () => {
    type T11 = _ReplaceString<
      "你好世界",
      "世界",
      "地球"
    >
    expectTypeOf<T11>().toEqualTypeOf<"你好地球">()
  })

  it("should handle cases where the replacement string is longer", () => {
    type T12 = _ReplaceString<
      "short",
      "short",
      "very long string"
    >
    expectTypeOf<T12>().toEqualTypeOf<"very long string">()
  })

  it("should handle cases where the replacement string is shorter", () => {
    type T13 = _ReplaceString<
      "long string",
      "long string",
      "short"
    >
    expectTypeOf<T13>().toEqualTypeOf<"short">()
  })
  it("should handle empty replacement string", () => {
    type T6 = _ReplaceString<
      "hello world",
      "world",
      ""
    >
    expectTypeOf<T6>().toEqualTypeOf<"hello ">() // this would make sense if user would like to remove a word from literal, than he can do it again for tailing space
  })

  it("should handle empty string", () => {
    type T7 = _ReplaceString<
      "",
      "world",
      "universe"
    >
    expectTypeOf<T7>().toEqualTypeOf<"">()
  })

  it("should handle empty search string", () => {
    type T8 = _ReplaceString<
      "hello world",
      "",
      "universe"
    >
    expectTypeOf<T8>().toEqualTypeOf<"hello world">() // this would make no sense
  })
})
