import { GlobalStyles } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";

import Common from "./context/common";
import i18n from "./plugin/i18n";
import { getRouter, load } from "./plugin/router";
import { root } from "./styles";

const App: FC = () => {
  const [menus, setMenus] = useState<MenuType[]>([]);
  const [router, setRouter] = useState(load);
  const [loading, setLoading] = useState(!1);

  const init = async () => {
    router.dispose();

    const { menus, router: result } = await getRouter();

    setMenus(menus);
    setRouter(result);
  };

  useEffectOnce(() => {
    init();
  });

  return (
    <Common.Provider
      value={{ loadRoutes: init, loading, menus, setLoading, setMenus }}
    >
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </Common.Provider>
  );
};

createRoot(document.getElementById("root")!).render(
  // double-call render-phase lifecycles in development only
  <StrictMode>
    <GlobalStyles styles={root} />
    <App />
  </StrictMode>,
);

// if (import.meta.hot) {
//   import.meta.hot.dispose(router.dispose);
// }
