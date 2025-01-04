//TODO:  move it to static types

export type DEBUG = "DEBUG"
export type BOOL = "BOOLEAN"
export type PRED_MODE = DEBUG | BOOL

export type BOX = { mode: "BOX" }
export type CTA = { mode: "CTA" }
export type COND_MODE = BOX | CTA

// add exact
