import { createContext } from "react";

export default createContext<CommonContext>({
  menus: [],
  setMenus: () => void 0,
});
