<!-- Build & Test Workflow Status -->

[![Build & Test](https://github.com/HideoKun/TypeHubUtils/actions/workflows/node.js.yml/badge.svg)](https://github.com/HideoKun/TypeHubUtils/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/HideoKun/PureTypes/branch/main/graph/badge.svg)](https://codecov.io/gh/HideoKun/PureTypes)

<!-- Additional Badges -->

[![License](https://img.shields.io/github/license/HideoKun/TypeHubUtils)](https://github.com/HideoKun/TypeHubUtils/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/HideoKun/TypeHubUtils)](https://github.com/HideoKun/TypeHubUtils/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/HideoKun/TypeHubUtils)](https://github.com/HideoKun/TypeHubUtils/pulls)
[![Last Commit](https://img.shields.io/github/last-commit/HideoKun/TypeHubUtils)](https://github.com/HideoKun/TypeHubUtils/commits/main)

<p align="center">
  <img src="logo.svg" width="200px" align="center" alt="Pure Types Logo" />
  <h1 align="center">PureTypes</h1>
</p>

## Goals

- make it friendly
- allow user to grow via helpful api
- edu first

## Architecture

### Core Ideas

- Great Docs
- `strict` is not enough
- `OpenType` (`any`, `unknown`, `never`) exclusion
- **use pre-computed types** (TailWind style) - { "declaration": true,"emitDeclarationOnly": true}
- **ERROR AS A FEATURE**: use it to communicate with user
- module as 'never' boundary -> solve all never related issues at module level

### Other Ideas

#### SM: TS standards and micro patterns:

- E | T
- variadic functions
- PTA
- upstream computation
- $ for never (funcs, static types)
- pipe vs chain(possible with objet config/ values lookup)
- replace branching wih predates and other funcs
- naming: func validation -> front/ back/ middle validation
- in/out validation
- recurrence as snippet/ pattern
- type function composition

#### Snippets

- assertion
- validator
- recurrence

### Structure/ Convention

- Standard: Progressive Type Application (PTA): close pattern (no default values), open pattern (default values)
- Standard: name: safe/ guard/ check vs safe/ front/ back (flag or func name?)
- Standard: name/mode: CTD, BOX
- Standard: singleton? `[Mode] extends ["BOX"]`

#### Directories

```ts
Type/
- name: only in uppercase -> All_CAPS
- only static types (no functions here)

Operators/
- in: might use OpenType as input
- out: non error (should recover from open type)
- front validation: none
- middle validation: minimal
- check: errors
- name: simple and short, prefix wih $ => $Maybe
- simple, language like, single argument functions
- universal/ not specialized (for arr, obj, func etc)
  - what to do with $ExactObj ?

Validators/
- in: T (all types)
- out: T | error
- front validation: none
- check: openType, errors
- name: ValidateXXX/ InValidateXXX

Predicates/
- in: T (all types)
- out: boolean | error
- front validation: none
- middle validation: full
- check: openType, errors
- conditional: [], helpers could use CTD
- name: use is/has as prefix => IsString

Filters/
- Pick, Omit, Non, Extract

Transformers/
  String/
  Number/
  Object/
  etc/
- name: action + Type => ReverseString, StringToArr, ArrToString
- name: safe/ guard/ check vs safe/ front/ back (flag or func name?)
- in: Non-OpenType, provide validation => Test<Str extends string>
- front validation: full
- middle validation: full
- all real challenges (mapped obj, recurrence)
```

#### Module

```ts
module/
  ./index.ts
    - pattern: in/ logic/ out
    - use composition when possible:  C<B<A<T>>>
  ./index.tests.ts
    - test: open type, wrong values (type mismatch), empty values, func exploration

```

## GuideLines

### Code

#### Static Types

```ts
type BOOL
// TODO: what about func args?
```

#### Throwable Type Functions (safe/ unsafe)

level of validation should be depented on usage
so, front validation is somehow OPTIONAL!!!

- union approach is missing -> BOX, CTD

```ts
type ReverseString // throwable, front validation
type ReverseString_Back // throwable, back validation
```

#### Non-Throwable Type Functions

```ts
type _ReverseString // non-throwable, front validation
type _ReverseString_Back // non-throwable, back validation
```

#### Returning `never` from func

```ts
type Func$ // $ - possibly returns never exclusively

type _ReturnNever$ //  non-throwable, might returns never, possible front validation
type _ReverseString_Back // back validation, non-throwable,  might returns never
```

### Other

- ignore performance, praise readability!!!
- always use Safe/Close front func wrapper (ex `Func<'x'>`) and UnSafe/Open main func (ex `Func<T, '', []>`) -> Partial Type Application
- when logic is messy extract it to new named func, avoid [this](https://github.com/sindresorhus/type-fest/blob/main/source/paths.d.ts#L123)
- if there is to many args in one func, try to use props object to

Bad - non meaningful type names

```ts
type Test<T extends string, U extends number, V extends boolean>
```

Good - para [Hungarian_notation](https://en.wikipedia.org/wiki/Hungarian_notation)

```ts
type Test<
  Str extends string,
  Num extends number,
  Bool extends boolean,
  Match extends string
>
```

### Files

- one func per file + tests
- always add js doc (describe usage and input)

### Dirs

```
/someDir
  /safe
  /unSafe
```

vs

```
Func/Safe
_Func/UnSafeFunc
_Helpers/Utils
```

## Usage

- make it work
- test it with abstract stuff
- hack it -> new usages (SliceFront + prefix)

### Refs

TODO: String Methods from:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- https://ramdajs.com/docs/#toString
- https://lodash.com/docs/4.17.15#camelCase
- https://github.com/panzerdp/voca?tab=readme-ov-file#functions
- https://vocajs.pages.dev/#last

## tests

- consistent
- inconsistent
- with consts literal
- with @ts-expect-error
- with never

## other

- definition of done
