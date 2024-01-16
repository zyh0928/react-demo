import type { Dispatch, SetStateAction } from "react";

export {};

declare global {
  type MenuType = Partial<{
    children: MenuType[];
    icon: string;
    id: StrNum;
    label: StrMap;
    parentId: StrNum;
    path: string;
    redirect: boolean;
    route: string;
    type: "all" | "menu" | "router";
  }>;

  interface CommonContext {
    loadRoutes: () => Promise<void>;
    loading: boolean;
    menus: MenuType[];
    setLoading: Dispatch<SetStateAction<boolean>>;
    setMenus: Dispatch<SetStateAction<MenuType[]>>;
  }
}
