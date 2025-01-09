import type { IsStringLiteral } from "../../predicates/isLiteral";

/**
 * A type that checks if the string literal type `S` starts with the string literal type `T`.
 * Type `T` could be single or multiple letter.
 * If `S` starts with `T`, it returns `T`. Otherwise, it returns `never`.
 * If either `S` or `T` is not a string literal type, it returns `never`.
 * Type StartsWith is case sensitive.
 *
 * @template Str - The string literal type to check.
 * @template Match - The prefix string literal type to match.
 * @returns {Match | never} - Returns `T` if `S` starts with `T`, otherwise `never`.
 *                        Returns `never` if `S` or `T` is not a string literal type.
 *
 * @example
 * type CheckStartsWith1 = StartsWith<"Hello, World!", "Hello">; // Result: "Hello"
 * type CheckStartsWith2 = StartsWith<"Hello, World!", "World">; // Result: never
 */

// TODO: case insensitive flag?
export type StartsWith<Str extends string, Match extends string> =
  IsStringLiteral<Match> extends never
    ? never
    : // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Str extends `${Match}${infer Rest}`
      ? Match
      : never;
