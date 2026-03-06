import Layout from "@/layout/layout";
import About from "@/pages/about";
import CookiePolicy from "@/pages/cookie-policy";
import Home from "@/pages/home";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
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
            {
              path: "privacy-policy",
              element: <PrivacyPolicy />,
            },
            {
              path: "terms-of-service",
              element: <TermsOfService />,
            },
            {
              path: "cookie-policy",
              element: <CookiePolicy />,
            },
          ],
        },
      ],
    },
  ]);
};

export default router;
