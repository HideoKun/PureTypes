/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

export type _Wide$<T> =
  // PRIMITIVES
  T extends string
    ? string
    : T extends number
      ? number
      : T extends boolean
        ? boolean
        : T extends null
          ? null
          : T extends undefined
            ? undefined
            : // OBJECTS
              T extends (infer A)[]
              ? any[]
              : T extends Function
                ? Function
                : T extends object
                  ? object
                  : never

// TESTS
type a = _Wide$<"a">
//   ^?
type b = _Wide$<0>
//   ^?
type c = _Wide$<true>
//   ^?
type d = _Wide$<{ a: 1 }>
//   ^?
type e = _Wide$<string[]>
//   ^?
type f = _Wide$<Array<string[]>>
//   ^?
type g = _Wide$<() => "x">
//   ^?
