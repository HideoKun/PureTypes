/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export type _GetStringLength<
  Str extends string,
  Acc extends any[] = [],
> = Str extends `${infer StrFirst}${infer StrRest}`
  ? _GetStringLength<StrRest, [...Acc, any]>
  : Acc["length"];

export type _GetStringLength_Back<Str> = Str extends string
  ? _GetStringLength<Str, []>
  : never;
