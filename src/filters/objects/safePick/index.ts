import type { StrictObject } from "../../../types";

export type SafePick<
  O extends StrictObject,
  K extends keyof O,
> = K extends keyof O ? O[K] : never;
