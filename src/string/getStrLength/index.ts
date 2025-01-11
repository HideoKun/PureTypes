import type { EitherValidate } from "validators/validate"
import type { ValidateUsableSting$ } from "../../validators/validateUsableSting"
import type { _GetStringLength_Back } from "./algo"

type SafeChain<E, Str> = [E] extends [never]
  ? EitherValidate<
      _GetStringLength_Back<Str>,
      "SafeChain"
    >
  : E

export type GetStringLength<Str extends string> =
  SafeChain<
    //
    ValidateUsableSting$<Str>,
    Str
  >

export type GetStringLength_BACK$<Str> =
  SafeChain<
    //
    ValidateUsableSting$<Str>,
    Str
  >
