import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./pages/Layout";
import { Shop } from "./pages/Shop";
import { SignIn } from "./pages/User";
import { Success } from "./pages/Success";

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
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);
