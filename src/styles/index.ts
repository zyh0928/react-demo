import { dark, light } from "./_theme";

import type { Theme } from "@mui/material/styles";
import type { CSSProperties } from "react";

export const root: Recordable<CSSProperties> = {
  "html,body,#root": {
    height: "100%",
  },
};

export const themes: Record<ThemeMode, Theme> = {
  dark,
  light,
};
