/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IsTrueArr } from "../../predicates/isArr";
import type { EX_MODES } from "../../types/other";
import type { ValidateAll$ } from "../../validators/validateAll";
import type { _Extends } from "../extends";

type _AllExtends<
  Data extends unknown[],
  Match,
  Mode extends EX_MODES,
  Acc extends boolean[],
> = Data extends [infer First, ...infer Rest]
  ? _AllExtends<Rest, Match, Mode, [...Acc, _Extends<First, Match, Mode>]>
  : IsTrueArr<Acc> extends true
    ? // TODO: collect errors here, switch true[] to error[]
      true
    : false;

type _Try<
  Err$,
  Data extends unknown[],
  Match,
  Mode extends EX_MODES = "BOX",
> = [Err$] extends [never] ? _AllExtends<Data, Match, Mode, []> : Err$;

// TODO: join this func with extends -> T | T[]
export type AllExtends<
  Data extends unknown[],
  Match,
  Mode extends EX_MODES = "BOX",
> = _Try<
  ValidateAll$<[Data, Match, Mode]>,
  //
  Data,
  Match,
  Mode
>;

type TODO = _AllExtends<[never, 2, 3], number, "BOX", []>;
//   ^?
