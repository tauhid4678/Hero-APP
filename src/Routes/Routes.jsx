import { createBrowserRouter } from "react-router-dom";

import MainLayOuts from "../Layouts/MainLayOuts";
import Installation from "../Pages/Installation";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Allapps from "../Pages/Allapps";
import Appdetails from "../Pages/Appdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("./Appdata.json"),
      },
      {
        path: "/apps",
        element: <Allapps />,
        loader: () => fetch("./Appdata.json"),
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/appdetails",
        element: <Appdetails />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
