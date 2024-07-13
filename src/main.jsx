import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./ROOT/Root";
import Home from "./Home/Home";
import ContactUs from "./CONTACT Us/ContactUs";
import OurMenu from "./Our Menu/OurMenu";
import OurShop from "./Our Shop/OurShop";
import D_Bord from "./DASHBOARD/D_Bord";
import Signin from "./signinorregister/Signin";
import Sigup from "./signinorregister/Sigup";

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
        element: <ContactUs></ContactUs>,
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
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/Sigup",
        element: <Sigup></Sigup>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
