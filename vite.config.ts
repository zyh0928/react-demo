import { resolve } from "path";

import React from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig, loadEnv } from "vite";

import mui from "./build/resolvers/mui";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: loadEnv(mode, process.cwd(), "BASE_URL").BASE_URL,
  build: {
    outDir: "react-demo",
  },
  envPrefix: "DEMO_",
  plugins: [
    React(),
    AutoImport({
      dts: "./src/types/auto-imports.d.ts",
      eslintrc: {
        enabled: !0,
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
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 9029,
    proxy: {
      "/cat-api": {
        changeOrigin: !0,
        rewrite: (path) => path.replace(/^\/cat-api/, ""),
        target: "https://api.thecatapi.com",
      },
      "/dog-api": {
        changeOrigin: !0,
        rewrite: (path) => path.replace(/^\/dot-api/, ""),
        target: "http://shibe.online/api",
      },
      "/ovooa-api": {
        changeOrigin: !0,
        rewrite: (path) => path.replace(/^\/ovooa-api/, ""),
        target: "https://ovooa.com/API",
      },
    },
    strictPort: !0,
  },
}));
