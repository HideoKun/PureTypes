export type StrictObject = { [key: string]: unknown } & { length?: never };
export type StrictArr = { [key: string]: unknown } & { length: number };
