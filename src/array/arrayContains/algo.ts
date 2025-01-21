export type _ArrayContains<
  Array extends (string | number | boolean)[],
  Value extends string | number | boolean,
  IndexArr extends number[] = [],
> = IndexArr["length"] extends Array["length"]
  ? false
  : Array[IndexArr["length"]] extends Value
    ? true
    : _ArrayContains<
        Array,
        Value,
        [...IndexArr, 7]
      >
