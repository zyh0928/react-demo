/// <reference types="vite/client" />
/// <reference types="@modyfi/vite-plugin-yaml/modules" />

import type { I18nextProviderProps } from "i18next";

interface ImportMetaEnv {
  readonly DEMO_CAT_API: string;
  readonly DEMO_DOG_API: string;
  readonly DEMO_OVOOA_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "react-i18next" {
  interface CustomTypeOptions extends I18nextProviderProps {
    resources: Recordable<I18nSchema>;
  }
}

declare module "@@/locales/*.yaml" {
  const data: I18nSchema;
  export default data;
}
