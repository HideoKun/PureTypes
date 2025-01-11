/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Validate$ } from "validators/validate"
import type { IsTrueArr } from "../../predicates/isArr"
import type { EX_MODES } from "../../types/other"

/*

WIP: currently broken




*/

type BOX_Extends<A, B> = [A] extends [B]
  ? true
  : false
type CTA_Extends<A, B> = A extends B
  ? true
  : false

type _SingleExtends<
  A,
  B,
  Mode extends EX_MODES = "BOX",
> = [Mode] extends ["BOX"]
  ? BOX_Extends<A, B>
  : CTA_Extends<A, B>

type _AllExtends<
  Data extends unknown | unknown[],
  Match,
  Mode extends EX_MODES,
  Acc extends boolean[],
> =
  // distribution and errors
  [Data] extends [Match]
    ? true
    : Data extends [infer First, ...infer Rest]
      ? _AllExtends<
          Rest,
          Match,
          Mode,
          [
            ...Acc,
            _SingleExtends<First, Match, Mode>,
          ]
        >
      : IsTrueArr<Acc>
// : IsTrueArr<Acc> extends true
//   ? // TODO: collect errors here, switch true[] to error[]
//     true
//   : false;

type _Try<
  Err$,
  Data extends unknown | unknown[],
  Match,
  Mode extends EX_MODES = "BOX",
> = Err$
// > = [Err$] extends [never] ? _AllExtends<Data, Match, Mode, []> : Err$;

export type AllExtends<
  Data extends unknown | unknown[],
  Match,
  Mode extends EX_MODES = "BOX",
> = _Try<
  Validate$<[Data, Match, Mode]>,
  //
  Data,
  Match,
  Mode
>

// ----

type TODO_A = AllExtends<[never, 2, 3], number>
//   ^?

type TODO_B = AllExtends<"1", number>
//   ^?

type Check = AllExtends<never, number>
//   ^?

type Box = _SingleExtends<1 | 2, 1, "BOX">
//   ^?

type CTD = _SingleExtends<1 | 2, 1, "CTD">
//   ^?
