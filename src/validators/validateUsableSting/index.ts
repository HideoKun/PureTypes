import type { _FilterError$ } from "../../filters";
import type { Validate$ } from "../validate";
import type { _ValidateEmptyString$ } from "../validateEmtpyString";
import type { ValidateStringLiteral } from "../validateLiteral";

export type ValidateUsableSting$<T> = _FilterError$<
  _ValidateEmptyString$<ValidateStringLiteral<Validate$<T>>>
>;
