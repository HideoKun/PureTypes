import type { FilterError$ } from "../../filters"
import type { Validate$ } from "../validate"

export type ValidateAll$<Data extends unknown[], Acc = never> = Data extends [
  infer First,
  ...infer Rest,
]
  ? ValidateAll$<Rest, Acc | Validate$<First, "flat">>
  : FilterError$<Acc>
