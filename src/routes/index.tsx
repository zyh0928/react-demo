import About from "%/about";
import Home from "%/home";
import Node, { NodeChild } from "%/node";

import type { RouteObject } from "react-router-dom";

export default [
  {
    element: <Home />,
    // index 与 path 互斥
    path: "home",
  },
  {
    element: <Navigate replace to="home" />,
    path: "",
  },
  {
    element: <About />,
    path: "about",
  },
  {
    children: [
      {
        element: <NodeChild />,
        path: ":title",
      },
      {
        element: <Navigate replace to="two" />,
        path: "",
      },
    ],
    element: <Node />,
    path: "node",
  },
] satisfies RouteObject[];
