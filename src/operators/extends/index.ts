/* eslint-disable @typescript-eslint/no-unused-vars */
import type { EX_MODES } from "../../types/other";

type BOX_Extends<A, B> = [A] extends [B] ? true : false;
type CTA_Extends<A, B> = A extends B ? true : false;

// TODO: it might need Validate$
export type _Extends<A, B, Mode extends EX_MODES = "BOX"> = [Mode] extends [
  "BOX",
]
  ? BOX_Extends<A, B>
  : CTA_Extends<A, B>;

type Check = _Extends<never, 1>;
//   ^?

type Box = _Extends<1 | 2, 1, "BOX">;
//   ^?

type CTD = _Extends<1 | 2, 1, "CTD">;
//   ^?
