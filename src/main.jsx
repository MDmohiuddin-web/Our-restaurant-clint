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
import PrivateRouts from "./PRIVATE ROUTS/PrivateRouts";
import Cart from "./COMPONENTS/DASHBOARD/Cart";
import Error from "./COMPONENTS/Error/Error";
import AdminHome from "./COMPONENTS/DASHBOARD/Admin/AdminHome";
import AddItem from "./COMPONENTS/DASHBOARD/Admin/AddItem";
import ManageItems from "./COMPONENTS/DASHBOARD/Admin/ManageItems";
import Managebookings from "./COMPONENTS/DASHBOARD/Admin/Managebookings";
import Allusers from "./COMPONENTS/DASHBOARD/Admin/All Users/Allusers";
import ContactUs from "./COMPONENTS/CONTACT Us/ContactUs";
import AdminRoute from "./ADMINROUTS/AdminRoute";
import UpdateItem from "./COMPONENTS/DASHBOARD/Admin/All Users/UpdateItem";
import Payment from "./COMPONENTS/DASHBOARD/PAYMENT/Payment";
import PaymentHistory from "./COMPONENTS/DASHBOARD/PaymentHistory/PaymentHistory";
import UserHome from "./COMPONENTS/DASHBOARD/User/UserHome";
import Reservation from "./COMPONENTS/DASHBOARD/User/Reservation";
import AddReview from "./COMPONENTS/DASHBOARD/User/AddReview";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        element:<ContactUs></ContactUs> ,
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
    element:<PrivateRouts><D_Bord></D_Bord></PrivateRouts> ,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/DashBoard/Cart",
        element: <Cart></Cart>,
      },
      {
        path:'/DashBoard/UserHome',
        element:<PrivateRouts><UserHome></UserHome></PrivateRouts>
      },
      {
        path:'/DashBoard/AddReview',
        element:<PrivateRouts><AddReview></AddReview></PrivateRouts>
      },
      {
        path:'/DashBoard/Payment',
        element:<PrivateRouts><Payment></Payment></PrivateRouts>
      },{
        path:'/DashBoard/Reservation',
        element:<PrivateRouts><Reservation></Reservation></PrivateRouts>
      },{
        path:'/DashBoard/PaymentHistory',
        element:<PrivateRouts><PaymentHistory></PaymentHistory></PrivateRouts>
      },
      {
        path: "/DashBoard/AdminHome",
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute> ,
      },{
        path:'/DashBoard/addItems',
        element:<AdminRoute><AddItem></AddItem></AdminRoute>
      },
      
      {
        path:'/DashBoard/UpdateItem/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader:({params})=>fetch(`http://localhost:9585/menu/${params.id}`),
        
        
      },
      {
        path:'/DashBoard/manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'/DashBoard/Managebookings',
        element:<AdminRoute><Managebookings></Managebookings></AdminRoute>
      },
      {
        path:'/DashBoard/allUsers',
        element:<AdminRoute><Allusers></Allusers></AdminRoute>
      }
    ],
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
