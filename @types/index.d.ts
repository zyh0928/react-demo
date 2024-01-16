export {};

declare global {
  type FC<P = Record<string, never>> = React.FC<P>;

  type ReactNode = React.ReactNode;

  type StrNum = string | number;

  type KVMap<T = unknown> = Record<StrNum, T>;

  type StrMap<T = string> = Record<string, T>;

  type Nullable<T = string> = T | null | undefined;

  type OptionType<
    ValueType = StrNum,
    V extends string | undefined = "value",
    L extends string | undefined = "label",
  > = { [key in V]: ValueType } & { [K in L]: string } & {
    disabled?: boolean;
  };
}
