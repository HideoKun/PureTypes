import type { FilterError$ } from "../../filters"
import type { EitherValidate } from "../validate"
import type { EitherValidate_EmptyString$ } from "../validateEmtpyString"
import type { EitherValidate_StringLiteral } from "../validateLiteral"

// prettier-ignore
type Check<T> =
  EitherValidate_EmptyString$<
    EitherValidate_StringLiteral<
      EitherValidate<T>
    >
  >

/**
 * @returns Error | never
 */
export type ValidateUsableSting$<T> =
  FilterError$<Check<T>>

/**
 * @returns Error | T
 */
export type CH_ValidateUsableSting$<T> =
  FilterError$<Check<T>>
