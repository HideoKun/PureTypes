import type { FilterError$ } from "../../filters"
import type { CH_Validate } from "../validate"
import type { CH_ValidateEmptyString$ } from "../validateEmtpyString"
import type { CH_ValidateStringLiteral } from "../validateLiteral"

// prettier-ignore
type Check<T> =
  CH_ValidateEmptyString$<
    CH_ValidateStringLiteral<
      CH_Validate<T>
    >
  >

/**
 * @returns Error | never
 */
export type ValidateUsableSting$<T> = FilterError$<Check<T>>

/**
 * @returns Error | T
 */
export type CH_ValidateUsableSting$<T> = FilterError$<
  Check<T>
>
