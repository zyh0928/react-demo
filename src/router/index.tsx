import { Navigate, createBrowserRouter } from "react-router-dom";

import App from "@/App";

import About from "%/about";
import NotFound from "%/error/NotFound";
import Home from "%/home";
import Node, { NodeOne, NodeTwo } from "%/node";

import type { RouteObject } from "react-router-dom";

const children: RouteObject[] = [
  {
    element: <NotFound />,
    path: "*",
  },
  {
    element: <Home />,
    path: "home",
  },
  {
    element: <Navigate replace={!0} to="/home" />,
    path: "",
  },
  {
    element: <About />,
    path: "about",
  },
  {
    children: [
      {
        element: <NodeOne />,
        path: "one",
      },
      {
        element: <NodeTwo />,
        path: "two",
      },
      {
        element: <Navigate replace={!0} to="/node/two" />,
        path: "",
      },
    ],
    element: <Node />,
    path: "node",
  },
];

const routes = createBrowserRouter(
  [
    {
      children,
      element: <App />,
      path: "/",
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default routes;
