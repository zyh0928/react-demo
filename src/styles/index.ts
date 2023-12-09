import { dark, light } from "./_theme";

import type { ThemeOptions } from "@mui/material/styles";
import type { CSSProperties } from "react";

export const root: Recordable<CSSProperties> = {
  "html,body,#root": {
    height: "100%",
  },
};

export const themes: Recordable<ThemeOptions> = {
  dark,
  light,
};
