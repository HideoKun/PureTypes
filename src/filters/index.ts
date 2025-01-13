import type { IsError_ } from "@algo"

// INFO: no BOX mode here, CTA is only mode for filtering
export type _Filter$<A, B> = A extends B
  ? A
  : never

export type FilterError$<T> =
  IsError_<T> extends true ? T : never
