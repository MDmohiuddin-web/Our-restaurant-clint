import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./COMPONENTS/Home/Home";
import ContactUs from "./COMPONENTS/CONTACT Us/ContactUs";
import OurMenu from "./COMPONENTS/Our Menu/OurMenu";
import OurShop from "./COMPONENTS/Our Shop/OurShop";
import D_Bord from "./COMPONENTS/DASHBOARD/D_Bord";
import Root from "./ROOT/Root";
import Signin from "./COMPONENTS/UserAuth/Signin";
import Sigup from "./COMPONENTS/UserAuth/Sigup";
import AuthProvider from "./AuthContext/AuthProvider";
import Profile from "./COMPONENTS/UserAuth/Profile";
import CONTACTUS from "./COMPONENTS/UserAuth/CONTACTUS";
import PrivateRouts from "./PRIVATE ROUTS/PrivateRouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ContactUs",
        element: <CONTACTUS></CONTACTUS>,
      },
      {
        path: "/OurMenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/OurShop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/DashBoard",
        element: <D_Bord></D_Bord>,
      },
      {
        path: "/Login",
        element: <Signin></Signin>,
      },
      {
        path: "/Signup",
        element: <Sigup></Sigup>,
      },
      {
        path: "/Profile",
        element:<PrivateRouts> <Profile></Profile></PrivateRouts>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
