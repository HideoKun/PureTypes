/* eslint-disable @typescript-eslint/no-unused-vars */
// tslint:disable

/*
- FALSE: Always 0.
- A AND B.
- A AND NOT B.
- A.
- NOT A AND B.
- B.
- A XOR B.
- A OR B.
- NOT(A OR B) (NOR).
- A XNOR B.
- NOT B.
- A → B (Implication).
- NOT A.
- B → A.
- A NAND B.
- TRUE: Always 1.

+ MUX!!! or only mux implantation
+ DEMUX!!! or only demux implantation

*/

// Type-level representation of boolean values

export type $T<> = true;
export type $F<> = false;

// NOT operation
type $Not$<T extends boolean> = T extends true ? false : true;

// AND operation
export type $And$<A extends boolean, B extends boolean> = [A] extends [true]
  ? [B] extends [true]
    ? true
    : false
  : false;

// OR operation
type $Or$<A extends boolean, B extends boolean> = A extends true
  ? true
  : B extends true
    ? true
    : false;

// XOR (Exclusive OR) operation
type Xor<A extends boolean, B extends boolean> = A extends B ? false : true;

// NAND (Not AND) operation
type Nand<A extends boolean, B extends boolean> = $Not$<$And$<A, B>>;

// NOR (Not OR) operation
type Nor<A extends boolean, B extends boolean> = $Not$<$Or$<A, B>>;

// Demonstration of usage - add truth tables for each operator
type TestNot1 = $Not$<true>; // false
type TestNot2 = $Not$<false>; // true

type TestAnd1 = $And$<true, true>; // true
type TestAnd2 = $And$<true, false>; // false

type TestOr1 = $Or$<true, false>; // true
type TestOr2 = $Or$<false, false>; // false

type TestXor1 = Xor<true, false>; // true
type TestXor2 = Xor<true, true>; // false

type TestNand1 = Nand<true, true>; // false
type TestNor1 = Nor<false, false>; // true
