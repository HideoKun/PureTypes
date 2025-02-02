import type { Validate$ } from "@validators"
import type { _isEmptyString_BACK } from "./algo";


type Try<Err$, String> = [Err$] extends [never]
  ? _isEmptyString_BACK<String>
  : Err$


export type isEmptyString<Str extends string> = Try<Validate$<Str>, Str>;




// temp testing 
type Test1 = isEmptyString<""> 
//   ^?    

type Test2 = isEmptyString<" "> 
//   ^?    

type Test3 = isEmptyString<never> 
//   ^?    

type Test4 = isEmptyString<[1, 1, 3]> 
//   ^?    