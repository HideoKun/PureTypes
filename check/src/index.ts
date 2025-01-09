/* eslint-disable @typescript-eslint/no-unused-vars */
type Heavy<T> = {
  // Example of a complex type transformation
  [K in keyof T]: T[K] extends object
    ? Heavy<T[K]>
    : T[K] extends string
      ? Uppercase<T[K]>
      : T[K];
};

// Define input type
interface Input {
  name: string;
  nested: {
    value: string;
    number: number;
  };
}

// Pre-compute types
export type ComputedType = Heavy<Input>;

// You can also export multiple pre-computed variants
export type AnotherComputedType = Heavy<{ different: string }>;

const x = (y: ComputedType) => x;
