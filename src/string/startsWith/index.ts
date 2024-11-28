import type { IsStringLiteral } from "../isStringLiteral";

/**
 * A type that checks if the string literal type `S` starts with the string literal type `T`.
 * Type `T` could be single or multiple letter.
 * If `S` starts with `T`, it returns `T`. Otherwise, it returns `never`.
 * If either `S` or `T` is not a string literal type, it returns `never`.
 * Type StartsWith is case sensitive.
 *
 * @template S - The string literal type to check.
 * @template T - The prefix string literal type to match.
 * @returns {T | never} - Returns `T` if `S` starts with `T`, otherwise `never`.
 *                        Returns `never` if `S` or `T` is not a string literal type.
 *
 * @example
 * type CheckStartsWith1 = StartsWith<"Hello, World!", "Hello">; // Result: "Hello"
 * type CheckStartsWith2 = StartsWith<"Hello, World!", "World">; // Result: never
 */

// TODO: case insensitive flag?
export type StartsWith<S extends string, T extends string> = IsStringLiteral<S> extends never
  ? never
  : IsStringLiteral<T> extends never
  ? never
  : S extends `${T}${infer Rest}`
  ? T
  : never;
