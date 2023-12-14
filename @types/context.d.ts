export {};

declare global {
  type MenuType = Partial<{
    children: MenuType[];
    icon: string;
    label: Recordable<string>;
    path: string;
  }>;

  interface CommonContext {
    loading: boolean;
    menus: MenuType[];
    setLoading: (value: boolean) => void;
    setMenus: (value: MenuType[]) => void;
  }
}
