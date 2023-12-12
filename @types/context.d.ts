import type { SvgIcon } from "@mui/material";

export {};

declare global {
  type MenuType = Partial<{
    children: MenuType[];
    icon: SvgIcon;
    label: Recordable<string>;
    path: string;
  }>;

  interface CommonContext {
    menus: MenuType[];
    setMenus: (menus: MenuType[]) => void;
  }
}
