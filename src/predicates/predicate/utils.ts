import type { NewError } from "../../types";

export type Catch$<T, Match> = T extends Match
  ? never
  : NewError<"MismatchError", "Predicate", T>;
