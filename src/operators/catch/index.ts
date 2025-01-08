import type { Trace } from "operators/trace"
import type { Validate$ } from "validators/validate"

/*
TODO: ?
- HasError
- FilterError

- fix with PTA, compute Validate$ errors with context
*/

type Name = "Catch"

type TX<CX extends string, A extends string = ""> = Trace<
  CX,
  A extends "" ? Name : Trace<Name, A>
>

type _Catch<E$, T> = [E$] extends [never] ? T : E$

// TODO: rethink, quite close to FilterError
/**
 * @returns Error | T
 */
export type Catch<T, CX extends string> = _Catch<
  Validate$<T, TX<CX>>,
  T
>
// export type Catch<T> = Validate$<T>

// export type Catch<T, Context extends string = "$Catch"> = [
//   Validate$<T>,
// ] extends [never]
//   ? T
//   : NewError<"OutputError", Context, T>;
