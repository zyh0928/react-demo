/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DEMO_CAT_API: string;
  readonly DEMO_DOG_API: string;
  readonly DEMO_OVOOA_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
