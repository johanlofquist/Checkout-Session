import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./pages/Layout";
import { Shop } from "./pages/Shop";
import { SignIn } from "./pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/shop",
        element: <Shop />,
        index: true,
      },
      {
        path: "/signin",
        element: <SignIn />,
        index: true,
      },
    ],
  },
]);
