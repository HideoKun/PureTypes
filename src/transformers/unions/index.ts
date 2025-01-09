// TODO: not safe due to union unstability?
type ReversUnion<T, Acc = never> = T extends `${infer First}${infer Last}` ? ReversUnion<Last, Acc | First>
  : Acc;

type test = ReversUnion<"z" | "b" | "c" | "d">;
