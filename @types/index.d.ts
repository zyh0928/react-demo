export {};

declare global {
  type FC<P = Record<string, never>> = React.FC<P>;

  type ReactNode = React.ReactNode;

  type GenericScalar = number | string;

  type Recordable<T = unknown> = Record<GenericScalar, T>;

  type Nullable<T = string> = T | null | undefined;
}
