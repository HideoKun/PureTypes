import type { Exact$ } from "@transformers"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type EmptyObj = Exact$<{}>
export type EmptyArr = Exact$<[]>

// type EmptyObject = Exact<Record<string, never>>;

// const obj1: EmptyObject = {}; // ✅ Valid
// const obj2: EmptyObject = { key: "value" }; // ❌ Error: Excess property 'key'
