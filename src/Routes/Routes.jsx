import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayOuts from "../Layouts/MainLayOuts";
import Installation from "../Pages/Installation";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },
]);

export default router;
