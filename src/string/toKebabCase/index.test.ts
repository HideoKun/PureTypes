import {
  describe,
  it,
  expectTypeOf,
} from "vitest"
import type { _ToKebabCase } from "./algo"

describe("_ToKebabCase type tests", () => {
  it("should convert camelCase to kebab-case", () => {
    type T1 = _ToKebabCase<"camelCase">
    type T2 = _ToKebabCase<"thisIsATest">
    type T3 = _ToKebabCase<"anotherExampleHere">
    expectTypeOf<T1>().toEqualTypeOf<"camel-case">()
    expectTypeOf<T2>().toEqualTypeOf<"this-is-a-test">()
    expectTypeOf<T3>().toEqualTypeOf<"another-example-here">()
  })

  it("should handle strings with separators (space, underscore, hyphen)", () => {
    type T1 = _ToKebabCase<"hello world">
    type T2 = _ToKebabCase<"hello_world">
    type T3 = _ToKebabCase<"hello-world">
    expectTypeOf<T1>().toEqualTypeOf<"hello-world">()
    expectTypeOf<T2>().toEqualTypeOf<"hello-world">()
    expectTypeOf<T3>().toEqualTypeOf<"hello-world">()
  })

  it("should handle uppercase letters properly", () => {
    type T1 = _ToKebabCase<"HelloWorld">
    type T2 = _ToKebabCase<"UpperCase">
    expectTypeOf<T1>().toEqualTypeOf<"hello-world">()
    expectTypeOf<T2>().toEqualTypeOf<"upper-case">()
  })

  it("should handle strings with mixed separators and cases", () => {
    type T1 =
      _ToKebabCase<"MixOf_Separators And-Cases">
    type T2 =
      _ToKebabCase<"another_Example-Here Today">
    expectTypeOf<T1>().toEqualTypeOf<"mix-of-separators-and-cases">()
    expectTypeOf<T2>().toEqualTypeOf<"another-example-here-today">()
  })

  it("should handle strings without any uppercase letters or separators", () => {
    type T1 = _ToKebabCase<"lowercase">
    type T2 = _ToKebabCase<"already-kebab">
    type T3 = _ToKebabCase<"plain">
    expectTypeOf<T1>().toEqualTypeOf<"lowercase">()
    expectTypeOf<T2>().toEqualTypeOf<"already-kebab">()
    expectTypeOf<T3>().toEqualTypeOf<"plain">()
  })

  it("should handle empty strings and strings without transformations", () => {
    type T1 = _ToKebabCase<"">
    type T2 = _ToKebabCase<"simple">
    expectTypeOf<T1>().toEqualTypeOf<"">()
    expectTypeOf<T2>().toEqualTypeOf<"simple">()
  })

  it("should handle strings with leading or trailing separators", () => {
    type T1 = _ToKebabCase<"trailing-space ">
    type T2 = _ToKebabCase<"trailing-hyphen-">
    expectTypeOf<T1>().toEqualTypeOf<"trailing-space-">()
    expectTypeOf<T2>().toEqualTypeOf<"trailing-hyphen-">()
  })

  it("should handle uppercase strings", () => {
    type T1 = _ToKebabCase<"UPPERCASE">
    type T2 = _ToKebabCase<"MIXEDUppercase">
    expectTypeOf<T1>().toEqualTypeOf<"u-p-p-e-r-c-a-s-e">()
    expectTypeOf<T2>().toEqualTypeOf<"m-i-x-e-d-uppercase">()
  })

  it("should handle strings with multiple separators in sequence", () => {
    type T1 =
      _ToKebabCase<"string__with__multiple__underscores">
    type T2 =
      _ToKebabCase<"string--with--multiple--hyphens">
    type T3 =
      _ToKebabCase<"string  with  multiple  spaces">
    expectTypeOf<T1>().toEqualTypeOf<"string-with-multiple-underscores">()
    expectTypeOf<T2>().toEqualTypeOf<"string-with-multiple-hyphens">()
    expectTypeOf<T3>().toEqualTypeOf<"string-with-multiple-spaces">()
  })

  it("should preserve existing kebab-case", () => {
    type T1 = _ToKebabCase<"already-kebab-case">
    type T2 = _ToKebabCase<"more-kebab-case-here">
    expectTypeOf<T1>().toEqualTypeOf<"already-kebab-case">()
    expectTypeOf<T2>().toEqualTypeOf<"more-kebab-case-here">()
  })
})
