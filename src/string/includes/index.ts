import type { Str2Arr } from "../str2arr";

/**
 * A type that checkes if a substring is a part of a string
 *
 * @template Str - The string type to check against.
 * @template SearchStr - The substring to check for or substring with wildcard.
 * @returns {true | false} - Returns true if search string is a part of the string or false if its not
 */

export type Includes<
  Str extends string,
  SearchStr extends string,
  MatchAccumulator extends string = "",
  ReferenceArray extends string[] = [],
> = SearchStr extends MatchAccumulator
  ? true
  : Str extends `${infer First}${infer Rest}`
    ? First extends Str2Arr<SearchStr>[ReferenceArray["length"]]
      ? Includes<
          Rest,
          SearchStr,
          `${MatchAccumulator}${First}`,
          [...ReferenceArray, First]
        >
      : Includes<Rest, SearchStr, "", []>
    : false;
