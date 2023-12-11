import type { SvgIcon } from "@mui/material";

export {};

declare global {
  interface MenuType {
    label: I18nType;
    path: string;
    children?: MenuType[];
    icon?: SvgIcon;
  }

  interface CommonContext {
    menus: MenuType[];
    setMenus: (menus: MenuType[]) => void;
  }
}
