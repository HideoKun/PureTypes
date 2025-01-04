import type { FilterError$ } from "../../filters"
import type { NewError } from "../../types/errors"

type LocValidateType<T, Match> = [T] extends [Match]
  ? never
  : NewError<"MismatchError", "LocValidateType", T>

type TryValidate$<Err$, T, Match> = [Err$] extends [never]
  ? LocValidateType<T, Match>
  : Err$

export type ValidateType$<T$, Match> = TryValidate$<FilterError$<T$>, T$, Match>
