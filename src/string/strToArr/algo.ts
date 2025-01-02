export type _StrToArr<
  Str extends string,
  Acc extends string[],
> = Str extends `${infer First}${infer Rest}`
  ? _StrToArr<Rest, [...Acc, First]>
  : Acc;

export type _StrToArr_Back$<Str> = Str extends string
  ? _StrToArr<Str, []>
  : never;
