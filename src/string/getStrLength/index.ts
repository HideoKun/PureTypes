import type { Catch } from "../../operators/catch";
import type { ValidateUsableSting$ } from "../../validators/validateUsableSting";
import type { _GetStringLength_Back } from "./algo";

type _Try<Err$, Str> = [Err$] extends [never]
  ? Catch<_GetStringLength_Back<Str>, "GetStringLength_Try">
  : Err$;

export type GetStringLength<Str extends string> = _Try<
  ValidateUsableSting$<Str>,
  Str
>;
export type GetStringLength_BACK$<Str> = _Try<ValidateUsableSting$<Str>, Str>;
