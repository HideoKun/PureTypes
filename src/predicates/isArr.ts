// TODO: validations is missing
export type isArrOfType<Arr extends unknown[], Match> = [Arr] extends [[]] // solution true for empty arr
  ? false
  : [Arr] extends [Match[]]
    ? true
    : false;

export type IsTrueArr<T extends boolean[]> = isArrOfType<T, true>;
