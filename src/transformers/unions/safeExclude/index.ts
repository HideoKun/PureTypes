// TODO: how to check is it union?
export type SafeExclude<U, M extends U> = U extends M ? never : U;
