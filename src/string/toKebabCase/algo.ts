import type { ArrayContains } from "array/arrayContains"
import type { _StrToArr } from "string/strToArr/algo"

type Separators = [" ", "_", "-"]

type Saintize<Result extends string> =
  Result extends `-${infer Rest}`
    ? Saintize<Rest>
    : Result extends `${infer P}--${infer Q}`
      ? Saintize<`${P}-${Q}`>
      : Uncapitalize<Result>

export type _ToKebabCase<
  Str extends string,
  Builder extends string = "",
> = Str extends `${infer First}${infer Rest}`
  ? ArrayContains<Separators, First> extends true
    ? _ToKebabCase<Rest, `${Builder}-`>
    : First extends Uppercase<First>
      ? _ToKebabCase<
          Rest,
          `${Builder}-${Lowercase<First>}`
        >
      : _ToKebabCase<Rest, `${Builder}${First}`>
  : Saintize<Builder>
