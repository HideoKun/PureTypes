import type { BLANK_SIGN } from "../../types";

type SplitBySingleLetter<
  Str extends string,
  Acc extends string[] = []
> = Str extends `${infer FirstLetter}${infer Rest}`
    ? SplitBySingleLetter<Rest, [...Acc, FirstLetter]>
    : Acc;

type SplitBySeparator<
  Str extends string,
  Separator extends string,
  Acc extends string[] = [],
> = Str extends `${infer Pre}${Separator}${infer Post}`
    ? SplitBySeparator<Post, Separator, [...Acc, Pre]>
    : Str extends `${infer Post}`
    ? [...Acc, Post]
    : Acc;

export type _SplitString<
  Str extends string,
  Separator extends string,
> = Separator extends BLANK_SIGN
    ? SplitBySingleLetter<Str>
    : SplitBySeparator<Str, Separator>

export type _SplitString_BACK<Str, Separator> = Str extends string
  ? Separator extends string
    ? _SplitString<Str, Separator>
    : never
  : never;
