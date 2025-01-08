/**
 * !!! UNSAFE !!!
 *
 * @returns string
 */
export type Trace<
  A extends string,
  B extends string,
> = `${A}-->${B}`
