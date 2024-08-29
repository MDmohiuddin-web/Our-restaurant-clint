import React from "react";
import UseAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";

import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import {  FaJediOrder, FaTruck, FaUsers, FaWallet } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";

const AdminHome = () => {
  const { user } = UseAuth();

  const axiosSecure = UseAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-status"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-status");
      return res.data;
    },
  });

  return (
    <div className="h-svh p-10">
      <div>
        {/* <img
          className="rounded-lg h-96"
          defaultValue={user?.photoURL}
          src={user?.photoURL}
        /> */}

        <h2 className="text-3xl my-5">
          <span>Hi, Welcome </span>
          {user?.displayName ? user.displayName : "Back"}
        </h2>
      </div>
      {/* status */}
      <div className="stats ">
        <div className="stat">
          <div className="stat-figure text-secondary text-4xl">
         <FaWallet></FaWallet>
          </div>
          <div className="stat-title">revenue</div>
          <div className="stat-value">{stats?.revenue}</div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary text-4xl">
             <FaUsers  />
          </div>
          <div className="stat-title"> Customers</div>
          <div className="stat-value">{stats?.user}</div>
          {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary text-4xl">
          <SiCodechef />
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats?.menuItems}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary text-4xl">
          <FaTruck />
          </div>
          <div className="stat-title">orders</div>
          <div className="stat-value">{stats?.orders}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>

      
      </div>
    </div>
  );
};

export default AdminHome;
