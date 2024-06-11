import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Homepage from "../Pages/Home/Homepage/Homepage";
import ErrorElement from "../ErrorElement/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
