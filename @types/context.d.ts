import type { Dispatch, SetStateAction } from "react";

export {};

declare global {
  type MenuType = {
    id: GenericScalar;
    route: string;
    children?: MenuType[];
    icon?: string;
    label?: Recordable<string>;
    parentId?: GenericScalar;
    path?: string;
    redirect?: boolean;
    type?: "all" | "menu" | "router";
  };

  interface CommonContext {
    loadRoutes: () => Promise<void>;
    loading: boolean;
    menus: MenuType[];
    setLoading: Dispatch<SetStateAction<boolean>>;
    setMenus: Dispatch<SetStateAction<MenuType[]>>;
  }
}
