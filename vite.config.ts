import { resolve } from "path";

import React from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import Unfonts from "unplugin-fonts/vite";
import { defineConfig, loadEnv } from "vite";

import mui from "./build/resolvers/mui";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: loadEnv(mode, process.cwd(), "BASE_URL").BASE_URL,
  envPrefix: "DEMO_",
  plugins: [
    AutoImport({
      dts: "types/auto-imports.d.ts",
      eslintrc: {
        enabled: !0,
        globalsPropValue: "readonly",
      },
      imports: [
        "react",
        {
          "@mui/material": mui,
          "@mui/material/styles": ["styled", "useTheme"],
          "react-use": ["useUpdateEffect", "useToggle", "useTitle"],
        },
      ],
    }),
    React(),
    Unfonts({
      google: {
        display: "block",
        families: [
          {
            name: "Ubuntu",
            styles: "wght@300;400;500;700",
          },
          {
            name: "Noto Sans SC",
            styles: "wght@100;300;400;500;700;900",
          },
        ],
        injectTo: "body",
        preconnect: !0,
      },
    }),
  ],
  resolve: {
    alias: {
      "#": resolve(__dirname, "src/components"),
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
