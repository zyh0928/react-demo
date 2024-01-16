/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly DEMO_CAT_API: string;
  readonly DEMO_DOG_API: string;
  readonly DEMO_OVOOA_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.yaml" {
  const data: KVMap;
  export default data;
}

declare module "@@/locales/*.yaml" {
  const data: StrMap<string | StrMap>;
  export default data;
}
