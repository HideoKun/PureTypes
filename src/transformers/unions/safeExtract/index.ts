
export type SafeExtract<U, M extends U> = U extends M ? U : never;

type test = SafeExtract<"z" | "b" | "c" | "d", "z">;
