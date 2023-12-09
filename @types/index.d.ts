export {};

declare global {
  type GenericScalar = number | string;

  type Recordable<T = unknown> = Record<GenericScalar, T>;

  type Nullable<T = string> = T | null | undefined;

  interface I18nType {
    en: string;
    zh: string;
  }

  type I18nCodeType = keyof I18nType;
}
