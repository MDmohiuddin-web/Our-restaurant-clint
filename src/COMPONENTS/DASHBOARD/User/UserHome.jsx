import React from "react";
import UseAuth from "../../../Hooks/UseAuth";

const UserHome = () => {
  const { user } = UseAuth();
  console.log(user);
  return (
    <div className="h-svh p-10">
      <img
        className="rounded-lg h-96"
        defaultValue={user?.photoURL}
        src={user?.photoURL}
      />

      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
    </div>
  );
};

export default UserHome;
