// TODO: ./utils?
type NonNullableObj<T> = {
  [K in keyof T as T[K] extends undefined | null ? never : K]: T[K];
};
