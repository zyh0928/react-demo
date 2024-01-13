import { isEmpty } from "lodash-es";
import { createBrowserRouter, redirect } from "react-router-dom";

import Loading from "@/components/Loading";
import Layout from "@/pages";
import { list2tree } from "@/utils/tree";

import { getRoutes } from "$/user";
import NotFound from "%/error";
import { langs } from "~/variables.json";

import type { ElementType } from "react";
import type { RouteObject } from "react-router-dom";

const lng = langs[0].code;

const modules: Recordable<ElementType> = import.meta.glob("%/**/*.tsx", {
  eager: !0,
  import: "default",
});

export const load = createBrowserRouter([
  {
    element: <Loading loading />,
    path: "*",
  },
]);

const tree2routes = (tree: MenuType[]) => {
  const routes: RouteObject[] = [];

  tree.forEach(({ children, path, redirect, route }) => {
    const item: RouteObject = {};

    if (redirect) {
      item.path = route;
      item.element = <Navigate replace to={path ?? ""} />;
    } else {
      item.path = route;

      const Component = modules[`/src/pages/${path}.tsx`];

      if (Component) {
        item.element = <Component />;
      }
    }

    if (children?.length) {
      item.children = tree2routes(children);
    }

    if (isEmpty(item)) return;

    routes.push(item);
  });

  return routes;
};

export const getRouter = async () => {
  const routes = await getRoutes();

  const menus = list2tree<MenuType>(
    routes.filter(({ type }) => type !== "router"),
  );

  const tree = list2tree<MenuType>(
    routes.filter(({ type }) => type !== "menu"),
  );

  const children = tree2routes(tree);

  const content: RouteObject[] = langs.map(({ code }) => ({
    children,
    path: code,
  }));

  const router = createBrowserRouter(
    [
      {
        children: [
          {
            element: <NotFound />,
            loader: ({ params }) => {
              const [locale] = params["*"]?.split("/") ?? [];
              if (langs.some(({ code }) => code === locale)) return null;
              return redirect(`/${lng}/${params["*"] || ""}`);
            },
            path: "*",
          },
          {
            element: <Navigate replace to={`/${lng}`} />,
            path: "/",
          },
          ...content,
        ],
        element: <Layout />,
      },
    ],
    {
      basename: import.meta.env.BASE_URL,
    },
  );

  return {
    menus,
    router,
  };
};
