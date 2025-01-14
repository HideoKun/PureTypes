type Trace<
  A extends string,
  B extends string,
> = `${A}->${B}`

/**
 * !!! UNSAFE !!!
 *
 * @returns string
 */
export type TX<
  CX extends string,
  Name extends string,
  Next extends string = "",
> = Next extends ""
  ? Trace<CX, Name>
  : Trace<CX, Trace<Name, Next>>
