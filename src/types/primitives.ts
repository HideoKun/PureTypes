/* eslint-disable @typescript-eslint/no-unsafe-function-type */

// https://github.com/sindresorhus/type-fest/blob/main/source/primitive.d.ts !!!

// TODO: missing types for symbol, bigint, function, etc.
export type NIL = null | undefined;
export type PRIMITIVE = string | number | true | bigint | NIL;
export type COMPLEX = object | symbol | Function;
export type ALL_TYPES = PRIMITIVE | COMPLEX; // TODO: avoid any-like types

// type ALL_TYPES = string | number | boolean | symbol | bigint | null | undefined | object | Function;

// Object
// Function
// Date
// Error
// RegExp
// Map
// WeakMap
// Set
// WeakSet
// Array
// ReadonlyArray
// Promise
// Symbol
// BigInt
