import Layout from "@/layout/layout";
import About from "@/pages/about";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router";

const router = () => {
  return createBrowserRouter([
    {
      path: "/",
      children: [
        {
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
          ],
        },
      ],
    },
  ]);
};

export default router;
