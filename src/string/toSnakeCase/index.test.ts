import {
  describe,
  it,
  expectTypeOf,
} from "vitest"
import type { _ToSnakeCase } from "./algo"

describe("_ToSnakeCase type tests", () => {
  it("should convert camelCase to snake_case", () => {
    type T1 = _ToSnakeCase<"camelCase">
    type T2 = _ToSnakeCase<"thisIsATest">
    type T3 = _ToSnakeCase<"anotherExampleHere">
    expectTypeOf<T1>().toEqualTypeOf<"camel_case">()
    expectTypeOf<T2>().toEqualTypeOf<"this_is_a_test">()
    expectTypeOf<T3>().toEqualTypeOf<"another_example_here">()
  })

  it("should handle strings with separators (space, underscore, hyphen)", () => {
    type T1 = _ToSnakeCase<"hello world">
    type T2 = _ToSnakeCase<"hello_world">
    type T3 = _ToSnakeCase<"hello-world">
    expectTypeOf<T1>().toEqualTypeOf<"hello_world">()
    expectTypeOf<T2>().toEqualTypeOf<"hello_world">()
    expectTypeOf<T3>().toEqualTypeOf<"hello_world">()
  })

  it("should handle uppercase letters properly", () => {
    type T1 = _ToSnakeCase<"HelloWorld">
    type T2 = _ToSnakeCase<"UpperCase">
    expectTypeOf<T1>().toEqualTypeOf<"hello_world">()
    expectTypeOf<T2>().toEqualTypeOf<"upper_case">()
  })

  it("should handle strings with mixed separators and cases", () => {
    type T1 =
      _ToSnakeCase<"MixOf_Separators And-Cases">
    type T2 =
      _ToSnakeCase<"another_Example-Here Today">
    expectTypeOf<T1>().toEqualTypeOf<"mix_of_separators_and_cases">()
    expectTypeOf<T2>().toEqualTypeOf<"another_example_here_today">()
  })

  it("should handle strings without any uppercase letters or separators", () => {
    type T1 = _ToSnakeCase<"lowercase">
    type T2 = _ToSnakeCase<"already_snake">
    type T3 = _ToSnakeCase<"plain">
    expectTypeOf<T1>().toEqualTypeOf<"lowercase">()
    expectTypeOf<T2>().toEqualTypeOf<"already_snake">()
    expectTypeOf<T3>().toEqualTypeOf<"plain">()
  })

  it("should handle empty strings and strings without transformations", () => {
    type T1 = _ToSnakeCase<"">
    type T2 = _ToSnakeCase<"simple">
    expectTypeOf<T1>().toEqualTypeOf<"">()
    expectTypeOf<T2>().toEqualTypeOf<"simple">()
  })

  it("should handle strings with leading or trailing separators", () => {
    type T1 = _ToSnakeCase<"trailing space ">
    type T2 = _ToSnakeCase<"trailing-hyphen-">
    expectTypeOf<T1>().toEqualTypeOf<"trailing_space_">()
    expectTypeOf<T2>().toEqualTypeOf<"trailing_hyphen_">()
  })

  it("should handle uppercase strings", () => {
    type T1 = _ToSnakeCase<"UPPERCASE">
    type T2 = _ToSnakeCase<"MIXEDUppercase">
    expectTypeOf<T1>().toEqualTypeOf<"u_p_p_e_r_c_a_s_e">()
    expectTypeOf<T2>().toEqualTypeOf<"m_i_x_e_d_uppercase">()
  })

  it("should handle strings with multiple separators in sequence", () => {
    type T1 =
      _ToSnakeCase<"string__with__multiple__underscores">
    type T2 =
      _ToSnakeCase<"string--with--multiple--hyphens">
    type T3 =
      _ToSnakeCase<"string  with  multiple  spaces">
    expectTypeOf<T1>().toEqualTypeOf<"string_with_multiple_underscores">()
    expectTypeOf<T2>().toEqualTypeOf<"string_with_multiple_hyphens">()
    expectTypeOf<T3>().toEqualTypeOf<"string_with_multiple_spaces">()
  })

  it("should preserve existing snake_case", () => {
    type T1 = _ToSnakeCase<"already_snake_case">
    type T2 = _ToSnakeCase<"more_snake_case_here">
    expectTypeOf<T1>().toEqualTypeOf<"already_snake_case">()
    expectTypeOf<T2>().toEqualTypeOf<"more_snake_case_here">()
  })
})
