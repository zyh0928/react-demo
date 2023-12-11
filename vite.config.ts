import { resolve } from "path";

import ViteYaml from "@modyfi/vite-plugin-yaml";
import React from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig, loadEnv } from "vite";

import mui from "./build/resolvers/mui";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: loadEnv(mode, process.cwd(), "BASE_URL").BASE_URL,
  envPrefix: "DEMO_",
  esbuild: {
    drop: mode === "production" ? ["console", "debugger"] : void 0,
  },
  plugins: [
    Unfonts({
      google: {
        families: [
          {
            name: "Raleway",
            styles: "wght@300;400;500;700",
          },
          {
            name: "Noto Sans SC",
            styles: "wght@300;400;500;700",
          },
        ],
        injectTo: "body",
      },
    }),
    ViteYaml(),
    React(),
    AutoImport({
      dts: "@types/auto-imports.d.ts",
      eslintrc: {
        enabled: !0,
        globalsPropValue: "readonly",
      },
      imports: [
        "react",
        "react-router-dom",
        "react-i18next",
        {
          "@mui/material": mui,
          "@mui/material/styles": ["styled", "useTheme"],
          "react-use": ["useToggle", "useUpdateEffect", "useEffectOnce"],
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "#": resolve(__dirname, "src/context"),
      $: resolve(__dirname, "src/service"),
      "%": resolve(__dirname, "src/pages"),
      "@": resolve(__dirname, "src"),
      "@@": resolve(__dirname, "."),
      "~": resolve(__dirname, "src/assets"),
    },
  },
  server: {
    host: !0,
    port: 9029,
    strictPort: !0,
  },
}));
