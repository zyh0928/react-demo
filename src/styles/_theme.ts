import createTheme from "@mui/material/styles/createTheme";

import type { ThemeOptions } from "@mui/material/styles";

const typography: ThemeOptions["typography"] = {
  fontFamily: "Ubuntu, Noto Sans SC, sans-serif",
};

export const light = createTheme({
  palette: {
    background: {
      default: "#f2f2f2",
    },
    error: {
      // 紅
      main: "#cb1b45",
    },
    info: {
      // 空
      main: "#58b2dc",
    },
    primary: {
      // 燕脂
      dark: "#9F353A",
      // 赤紅
      light: "#cb4042",
      // 真朱
      main: "#ab3b3a",
    },
    secondary: {
      // 瑠璃
      main: "#005caf",
    },
    success: {
      // 青竹
      main: "#00896c",
    },
    warning: {
      // 山吹
      main: "#ffb11b",
    },
  },
  typography,
});

export const dark = createTheme({
  palette: {
    mode: "dark",
  },
  typography,
});
