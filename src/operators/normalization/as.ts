/**
 * If booth types are equal use second arg as type definition/ pointer
 *
 * @template A - The first type to compare.
 * @template B - The second type to compare.
 */

export type _As<A, B> = [A] extends [B] ? ([B] extends [A] ? B : A) : A;

// TESTS

type A = { x: string; y: number };
type B = { z?: boolean };
type C = { a: number };

type ABC = A & B & C;

type ReplacementType = {
  x: string;
  y: number;
  z?: boolean;
  a: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TestUpdatedReference = _As<ABC, ReplacementType>;
//   ^?
