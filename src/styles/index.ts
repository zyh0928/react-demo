import { dark, light } from "./_theme";

import type { Theme } from "@mui/material/styles";

export const root = {
  "html,body,#root": {
    height: "100%",
  },
};

export const themes: Record<ThemeMode, Theme> = {
  dark,
  light,
};
