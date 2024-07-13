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
import Signin from "./COMPONENTS/signinorregister/Signin";
import Sigup from "./COMPONENTS/signinorregister/Sigup";



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
        path:'/ContactUs',
        element:<ContactUs></ContactUs>
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
        element:<D_Bord></D_Bord>
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path:'/Sigup',
        element:<Sigup></Sigup>
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
