import { createBrowserRouter, redirect } from "react-router-dom";

import App from "@/pages";
import children from "@/routes";

import NotFound from "%/error";
import { langs } from "~/variables.json";

const lng = langs[0].code;

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
        ...langs.map(({ code }) => ({
          children,
          path: code,
        })),
      ],
      element: <App />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default router;
