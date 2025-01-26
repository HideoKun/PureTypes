import {
  describe,
  it,
  expectTypeOf,
} from "vitest"

import type {
  _IsDigit,
  IsDigit_Back,
} from "./algo"

describe("_IsDigit type tests", () => {
  it("should return true for string literals that match numeric patterns", () => {
    type T1 = _IsDigit<"0"> // "0" extends `${number}` => true
    type T2 = _IsDigit<"123"> // "123" extends `${number}` => true
    type T3 = _IsDigit<"001"> // "001" extends `${number}` => true
    type T4 = _IsDigit<"1.2"> // "1.2" extends `${number}` => true (valid numeric string)
    expectTypeOf<T1>().toEqualTypeOf<true>()
    expectTypeOf<T2>().toEqualTypeOf<true>()
    expectTypeOf<T3>().toEqualTypeOf<true>()
    expectTypeOf<T4>().toEqualTypeOf<true>()
  })

  it("should return false for string literals that are not numeric", () => {
    type T1 = _IsDigit<""> // empty string => not a valid number
    type T2 = _IsDigit<"abc"> // not a numeric string
    type T3 = _IsDigit<"1a2"> // contains non-numeric characters
    type T4 = _IsDigit<"one"> // obviously not numeric
    expectTypeOf<T1>().toEqualTypeOf<false>()
    expectTypeOf<T2>().toEqualTypeOf<false>()
    expectTypeOf<T3>().toEqualTypeOf<false>()
    expectTypeOf<T4>().toEqualTypeOf<false>()
  })

  it("should return false for non-literal or non-string types", () => {
    // For a generic string, TS cannot confirm it's strictly `${number}` literal.
    type T1 = _IsDigit<string>
    type T2 = _IsDigit<number> // definitely not a string literal
    type T3 = _IsDigit<123> // same, not a string
    expectTypeOf<T1>().toEqualTypeOf<false>()
    expectTypeOf<T2>().toEqualTypeOf<false>()
    expectTypeOf<T3>().toEqualTypeOf<false>()
  })
})

describe("IsDigit_Back type tests", () => {
  it("should return true for numeric string literals", () => {
    type T1 = IsDigit_Back<"0">
    type T2 = IsDigit_Back<"123">
    type T3 = IsDigit_Back<"001">
    type T4 = IsDigit_Back<"1.2">
    expectTypeOf<T1>().toEqualTypeOf<true>()
    expectTypeOf<T2>().toEqualTypeOf<true>()
    expectTypeOf<T3>().toEqualTypeOf<true>()
    expectTypeOf<T4>().toEqualTypeOf<true>()
  })

  it("should return false for non-numeric or non-literal strings", () => {
    type T1 = IsDigit_Back<"abc"> // not numeric
    type T2 = IsDigit_Back<"1a2"> // contains letters
    type T3 = IsDigit_Back<""> // empty string => not a valid number
    expectTypeOf<T1>().toEqualTypeOf<false>()
    expectTypeOf<T2>().toEqualTypeOf<false>()
    expectTypeOf<T3>().toEqualTypeOf<false>()
  })

  it("should return false for generic string or non-string types", () => {
    type T1 = IsDigit_Back<string> // not a literal
    type T2 = IsDigit_Back<number> // not a string at all
    type T3 = IsDigit_Back<123> // also not a string
    expectTypeOf<T1>().toEqualTypeOf<false>()
    expectTypeOf<T2>().toEqualTypeOf<false>()
    expectTypeOf<T3>().toEqualTypeOf<false>()
  })

  it("should return false when given a union of string literals (one not digit)", () => {
    // If IsStringLiteral is strictly checking for a single literal type,
    // then a union of two string literals is not "a single literal."
    type T1 = IsDigit_Back<"123" | "abc" | "234">
    expectTypeOf<T1>().toEqualTypeOf<false>()
  })
  it("should return true when given a union of string literals (all digits)", () => {
    // If IsStringLiteral is strictly checking for a single literal type,
    // then a union of two string literals is not "a single literal."
    type T1 = IsDigit_Back<"123" | "345" | "1214">
    expectTypeOf<T1>().toEqualTypeOf<true>()
  })
})
