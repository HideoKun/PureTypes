type _isEmptyString<
    Str extends string
> = Str extends "" 
    ? true 
    : false;

export type _isEmptyString_BACK<Str> = Str extends string 
    ? _isEmptyString<Str> 
    : never;