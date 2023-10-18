import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/Our Menu/OurMenu";
import Shop from "../Pages/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Secret/Secret";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <OurMenu />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path:'/secret',
          element: <PrivateRoute><Secret /></PrivateRoute>
        }
      ],
    },
  ]);