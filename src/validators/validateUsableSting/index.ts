import type { _FilterError$ } from "../../filters";
import type { Validate$ } from "../validate";
import type { _ValidateEmptyString } from "../validateEmtpyString";
import type { _ValidateStringLiteral } from "../validateLiteral";

export type _ValidateUsableSting$<T> = _FilterError$<
  _ValidateEmptyString<_ValidateStringLiteral<Validate$<T>>>
>;
