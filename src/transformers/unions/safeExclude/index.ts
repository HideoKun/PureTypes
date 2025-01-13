// TODO: today
export type SafeExclude$<
  Match,
  T extends Match, //TODO: is it CTA or not?
> = Match extends T ? never : Match

// swap
