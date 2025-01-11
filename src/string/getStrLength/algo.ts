/* eslint-disable @typescript-eslint/no-explicit-any */

export type _GetStringLength<
  Str extends string,
  Acc extends any[] = [],
> = Str extends `${infer _StrFirst}${infer StrRest}`
  ? _GetStringLength<StrRest, [...Acc, any]>
  : Acc["length"]

export type _GetStringLength_Back<Str> =
  Str extends string
    ? _GetStringLength<Str, []>
    : never
