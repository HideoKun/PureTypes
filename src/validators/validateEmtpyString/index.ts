import type { _FilterError$ } from "../../filters";
import type { NewError } from "../../types/errors";

type LocalValidateEmptyString<
  T,
  ErrContext extends string = "_ValidateEmptyString",
> = T extends "" ? NewError<"EmptyStringError", ErrContext, T> : T;

type Try<Err$, Str> = [Err$] extends [never]
  ? LocalValidateEmptyString<Str>
  : Err$;

export type _ValidateEmptyString$<T> = Try<_FilterError$<T>, T>;
