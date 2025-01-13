/* eslint-disable @typescript-eslint/no-unused-vars */

import type { _Wide$ } from "@operators"
import type { ALL_TYPES } from "../../types"
import type { IsEqual } from "../isEqual"

// TODO: this is broken, isHomogenic vs isWideHomogenic
/*
- collect all types
- try to assign to each type
*/

export type IsHomogenic<All, T> =
  All extends _Wide$<T> // 'a'
    ? // TODO: add Wider<T> for boolean -> true | false, so conditional type dist can be removed
      IsEqual<All, _Wide$<T>>
    : never

type X = IsHomogenic<string | number, string>
//   ^?

type XB = IsHomogenic<
  string | number | boolean,
  true | "number"
>
//   ^?

type Z = IsEqual<
  string | number | boolean,
  "string" | "number"
>
//   ^?

type XBT = IsHomogenic<
  string | number | boolean,
  boolean
>
//   ^?

type Y = _Wide$<true>
type XX = IsHomogenic<
  string | number,
  Exclude<ALL_TYPES, string>
>
//   ^?
