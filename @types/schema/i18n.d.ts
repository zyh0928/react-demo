// pnpx ts-json-schema-generator --path @types/schema/i18n.d.ts --type I18nSchema
export interface I18nSchema {
  common: {
    error: {
      "404": string;
      "500": string;
    };
  };
  // pages: {
  //   home: {
  //   };
  // };
  validations: {
    required: string;
  };
}
