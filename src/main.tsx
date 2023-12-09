import { GlobalStyles } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";

import { root } from "@/styles";

import i18n from "./plugin/i18n";
import router from "./plugin/router";

createRoot(document.getElementById("root")!).render(
  // double-call render-phase lifecycles in development only
  <StrictMode>
    <GlobalStyles styles={root} />

    <I18nextProvider i18n={i18n}>
      <RouterProvider fallbackElement="Loading..." router={router} />
    </I18nextProvider>
  </StrictMode>,
);

if (import.meta.hot) {
  import.meta.hot.dispose(router.dispose);
}
