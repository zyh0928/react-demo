export {};

declare global {
  type MenuType = Partial<{
    children: MenuType[];
    icon: string;
    label: Recordable<string>;
    path: string;
  }>;

  interface CommonContext {
    menus: MenuType[];
    setMenus: (menus: MenuType[]) => void;
  }
}
