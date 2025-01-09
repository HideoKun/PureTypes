import type { InferPost, InferPre } from "../../../string";
import type { DecrementDepth, GetObjPaths } from "../utils/getObjectPaths";

type HasMiddleDot<T extends string> = T extends `${string}.${string}`
  ? T
  : never;

// TODO: add array support? - adjust tests
// TODO: add union support? - adjust tests
// TODO: rename to SafeGet or Get
export type TODO_SafePick<
  Obj extends Record<string, any>,
  Keys extends GetObjPaths<Obj, Depth>,
  Depth extends number = 10,
> =
  Keys extends HasMiddleDot<Keys>
    ? {
        [K in InferPre<Keys>]: TODO_SafePick<
          Obj[K],
          Extract<InferPost<Keys>, GetObjPaths<Obj[K], DecrementDepth[Depth]>>,
          DecrementDepth[Depth]
        >;
      }[InferPre<Keys>] // remove mid objects
    : // Final Object Reading
      {
        [K in Keys]: Obj[K];
      }[Keys];
