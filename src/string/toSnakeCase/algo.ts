import type { ArrayContains } from "array/arrayContains"
import type { _StrToArr } from "string/strToArr/algo"

type Separators = [" ", "_", "-"]

type Saintize<Result extends string> =
  Result extends `_${infer Rest}`
    ? Saintize<Rest>
    : Result extends `${infer P}__${infer Q}`
      ? Saintize<`${P}_${Q}`>
      : Uncapitalize<Result>

export type _ToSnakeCase<
  Str extends string,
  Builder extends string = "",
> = Str extends `${infer First}${infer Rest}`
  ? ArrayContains<Separators, First> extends true
    ? _ToSnakeCase<Rest, `${Builder}_`>
    : First extends Uppercase<First>
      ? _ToSnakeCase<
          Rest,
          `${Builder}_${Lowercase<First>}`
        >
      : _ToSnakeCase<Rest, `${Builder}${First}`>
  : Saintize<Builder>
