/**
 * A type that coverts a string into array of chars
 *
 * @template Str - The string to change into array.
 * @returns {Array<string>} - Returns array of strings or an empty array for empty string
 */
// close pattern + IsNever
export type Str2Arr<Str extends string> = _Str2Arr<Str, []>;

// open pattern + no default values
export type _Str2Arr<
  Str extends string,
  Acc extends string[],
> = Str extends `${infer First}${infer Rest}`
  ? _Str2Arr<Rest, [...Acc, First]>
  : Acc;
