export type SafeExtract<
  Match,
  T extends Match,
> = Match extends T ? Match : never

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type test = SafeExtract<
  "a" | "b" | "c" | "d",
  "a"
>
