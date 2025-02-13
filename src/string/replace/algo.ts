import type { _StrToArr } from "../strToArr/algo"

export type _ReplaceString<
  Str extends string,
  StrToReplace extends string,
  Replacement extends string,
> = StrToReplace extends ""
  ? Str // replacement can be "" to remove a word
  : Str extends `${infer First}${StrToReplace}`
    ? `${First}${Replacement}`
    : Str extends `${infer First}${StrToReplace}${infer Rest}`
      ? `${First}${Replacement}${Rest}`
      : Str extends `${StrToReplace}${infer Rest}`
        ? `${Replacement}${Rest}`
        : Str
