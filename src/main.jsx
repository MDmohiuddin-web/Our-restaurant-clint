import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Root from "./ROOT/Root";
import Home from "./COMPONENTS/Home/Home";
import Sigup from "./COMPONENTS/UserAuth/Sigup";
import Signin from "./COMPONENTS/UserAuth/Signin";
import D_Bord from "./COMPONENTS/DASHBOARD/D_Bord";
import Profile from "./COMPONENTS/UserAuth/Profile";
import OurMenu from "./COMPONENTS/Our Menu/OurMenu";
import OurShop from "./COMPONENTS/Our Shop/OurShop";
import AuthProvider from "./AuthContext/AuthProvider";
import CONTACTUS from "./COMPONENTS/UserAuth/CONTACTUS";
import PrivateRouts from "./PRIVATE ROUTS/PrivateRouts";
import Cart from "./COMPONENTS/DASHBOARD/Cart";
import Error from "./COMPONENTS/Error/Error";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/Profile",
        element: (
          <PrivateRouts>
            <Profile></Profile>
          </PrivateRouts>
        ),
      },
    ],
  },
  {
    path: "/DashBoard",
    element: <D_Bord></D_Bord>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/DashBoard/Cart",
        element:<Cart></Cart>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
