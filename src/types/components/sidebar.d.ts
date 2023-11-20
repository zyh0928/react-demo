import type { SvgIcon } from "@mui/material";
import type { ReactNode } from "react";

export {};

declare global {
  interface MenuType {
    children?: MenuType[];
    icon?: SvgIcon;
    label?: ReactNode;
    path?: string;
  }
}
