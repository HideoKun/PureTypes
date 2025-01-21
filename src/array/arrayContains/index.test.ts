import {
  describe,
  it,
  expectTypeOf,
} from "vitest"
import type { _ArrayContains } from "./algo"

describe("ArrayContains type tests", () => {
  it("should return true if the array contains the element", () => {
    type T1 = _ArrayContains<[1, 2, 3], 2> // 2 is in the array
    type T2 = _ArrayContains<["a", "b", "c"], "b"> // "b" is in the array
    type T3 = _ArrayContains<
      [true, false, true],
      true
    > // true is in the array
    expectTypeOf<T1>().toEqualTypeOf<true>()
    expectTypeOf<T2>().toEqualTypeOf<true>()
    expectTypeOf<T3>().toEqualTypeOf<true>()
  })

  it("should return false if the array does not contain the element", () => {
    type T1 = _ArrayContains<[1, 2, 3], 4> // 4 is not in the array
    type T2 = _ArrayContains<["a", "b", "c"], "d"> // "d" is not in the array
    type T3 = _ArrayContains<
      [true, false, true],
      false
    > // false is in the array
    type T4 = _ArrayContains<[], "anything"> // empty array, always false
    expectTypeOf<T1>().toEqualTypeOf<false>()
    expectTypeOf<T2>().toEqualTypeOf<false>()
    expectTypeOf<T3>().toEqualTypeOf<true>()
    expectTypeOf<T4>().toEqualTypeOf<false>()
  })

  it("should handle arrays of mixed types correctly", () => {
    type T1 = _ArrayContains<[1, "a", true], 1> // 1 is in the array
    type T2 = _ArrayContains<[1, "a", true], "a"> // "a" is in the array
    type T3 = _ArrayContains<
      [1, "a", true],
      false
    > // false is not in the array
    type T4 = _ArrayContains<[1, "a", true], "b"> // "b" is not in the array
    expectTypeOf<T1>().toEqualTypeOf<true>()
    expectTypeOf<T2>().toEqualTypeOf<true>()
    expectTypeOf<T3>().toEqualTypeOf<false>()
    expectTypeOf<T4>().toEqualTypeOf<false>()
  })

  it("should return false for incompatible types", () => {
    type T1 = _ArrayContains<[1, 2, 3], "1"> // string "1" is not the same as number 1
    type T2 = _ArrayContains<["a", "b", "c"], 1> // numbers are not in a string array
    type T3 = _ArrayContains<
      [true, false],
      "true"
    > // string "true" is not the same as boolean true
    expectTypeOf<T1>().toEqualTypeOf<false>()
    expectTypeOf<T2>().toEqualTypeOf<false>()
    expectTypeOf<T3>().toEqualTypeOf<false>()
  })

  it("should handle arrays of a single type", () => {
    type T1 = _ArrayContains<
      ["apple", "banana", "cherry"],
      "banana"
    > // "banana" is in the array
    type T2 = _ArrayContains<[1, 2, 3], 3> // 3 is in the array
    type T3 = _ArrayContains<[true, false], true> // true is in the array
    type T4 = _ArrayContains<[true, false], false> // false is in the array
    expectTypeOf<T1>().toEqualTypeOf<true>()
    expectTypeOf<T2>().toEqualTypeOf<true>()
    expectTypeOf<T3>().toEqualTypeOf<true>()
    expectTypeOf<T4>().toEqualTypeOf<true>()
  })

  it("should handle arrays with duplicate values", () => {
    type T1 = _ArrayContains<[1, 2, 2, 3], 2> // 2 appears multiple times, still true
    type T2 = _ArrayContains<
      ["a", "b", "a", "c"],
      "a"
    > // "a" appears multiple times, still true
    type T3 = _ArrayContains<
      [true, false, true],
      false
    > // false is present, still true
    expectTypeOf<T1>().toEqualTypeOf<true>()
    expectTypeOf<T2>().toEqualTypeOf<true>()
    expectTypeOf<T3>().toEqualTypeOf<true>()
  })

  it("should return false for arrays that do not match the specified type", () => {
    type T1 = _ArrayContains<
      ["a", "b", "c"],
      number
    > // numbers are not in a string array
    type T2 = _ArrayContains<[1, 2, 3], boolean> // booleans are not in a number array
    type T3 = _ArrayContains<
      [true, false],
      string
    > // strings are not in a boolean array
    expectTypeOf<T1>().toEqualTypeOf<false>()
    expectTypeOf<T2>().toEqualTypeOf<false>()
    expectTypeOf<T3>().toEqualTypeOf<false>()
  })
})
