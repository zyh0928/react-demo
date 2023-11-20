import GlobalStyles from "@mui/material/GlobalStyles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "@/router";
import { root } from "@/styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles styles={root} />

    <RouterProvider fallbackElement={<p>Loading...</p>} router={router} />
  </StrictMode>,
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
