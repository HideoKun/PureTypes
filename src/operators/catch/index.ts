import type { Validate$ } from "../../validators/validate"

/*
TODO: ?
- HasError
- FilterError

- fix with PTA, compute Validate$ errors with context
*/

type _Catch<E$, T> = [E$] extends [never] ? T : E$

// TODO: rethink, quite close to FilterError
export type Catch<T> = _Catch<Validate$<T>, T>
// export type Catch<T> = Validate$<T>

// export type Catch<T, Context extends string = "$Catch"> = [
//   Validate$<T>,
// ] extends [never]
//   ? T
//   : NewError<"OutputError", Context, T>;
