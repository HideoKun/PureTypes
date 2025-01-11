// TODO: today
export type SafeExclude$<
  T,
  Match extends T, //TODO: is it CTA or not?
> = T extends Match ? never : T
