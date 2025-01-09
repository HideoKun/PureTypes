import type { _StrToArr } from "../strToArr/algo";

/**
 * A type that checkes if a substring is a part of a string
 *
 * @template Str - The string type to check against.
 * @template MatchStr - The substring to check for or substring with wildcard.
 * @returns {true | false} - Returns true if search string is a part of the string or false if its not
 */
export type Includes<MatchStr extends string, Str extends string> = _Includes<
  MatchStr,
  Str,
  ""
>;

type UpdateAcc<
  Str extends string,
  Match extends string,
  Acc extends string,
> = Match extends _StrToArr<Str, []>[_StrToArr<Acc, []>["length"]]
  ? `${Acc}${Match}`
  : "";

export type _Includes<
  SearchStr extends string,
  MatchStr extends string,
  MatchAccumulator extends string,
> = SearchStr extends MatchAccumulator
  ? true
  : MatchStr extends `${infer MatchFirst}${infer MatchRest}`
    ? _Includes<
        SearchStr,
        MatchRest,
        UpdateAcc<SearchStr, MatchFirst, MatchAccumulator>
      >
    : false;
