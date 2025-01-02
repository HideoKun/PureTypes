import type { NewError } from "../../types";
import type { Validate$ } from "../../validators/validate";

/*
TODO: ?
- HasError
- FilterError

- fix with PTA, compute Validate$ errors with context
*/

export type Catch<T, Context extends string = "$Catch"> = [
  Validate$<T, "flat">,
] extends [never]
  ? T
  : NewError<"OutputError", Context, T>;
