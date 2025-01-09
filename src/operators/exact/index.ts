/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ConsistentSimpleObject } from "../../testData/index";

// or ExactObj
// TODO: move to transformers (cant take never, specialized for objects)
export type $Exact<T extends object> = T & { [K in keyof T]: T[K] };

// TESTS

const fn = () => {};

// @ts-expect-error
const a: $Exact<ConsistentSimpleObject> = { a: "a", b: 1, c: true, d: "d" };
const b: $Exact<[]> = [];
// @ts-expect-error
const c: $Exact<typeof fn> = [];
// @ts-expect-error
const d: $Exact<""> = { a: "a", b: 1, c: true, d: "d" };
