interface Error {
  "404": string;
  "500": string;
}

interface Common {
  error: Error;
}

interface Home {}

interface Pages {
  home: Home;
}

interface Validations {
  required: string;
}

declare interface I18nSchema {
  common: Common;
  pages: Pages;
  validations: Validations;
}

// pnpx ts-json-schema-generator --path @types/schema/i18n.d.ts --type I18nSchema
// export interface I18nSchema {
//   common: Common;
//   pages: Pages;
//   validations: Validations;
// }
