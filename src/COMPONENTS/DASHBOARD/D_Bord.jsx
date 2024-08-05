import { NavLink, Outlet } from "react-router-dom";

import logo from "../../assets/Resources/nav-logo.svg";
import { FaHome, FaShoppingCart, FaUsers } from "react-icons/fa";
import { MdBookmarkAdd, MdEmail } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { BsMenuButtonWideFill } from "react-icons/bs";

const D_Bord = () => {
  return (
    <div className="flex capitalize">
      {/* sidebar */}
      <div className="m-auto w-[20%] h-svh bg-[#D1A054] p-5">
        <img src={logo} alt="" loading="lazy" className="my-5" />

        <ul className="space-y-2">
          

          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <FaHome></FaHome>

            <NavLink to="/DashBoard/Cart">Admin Home</NavLink>
          </li>

          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <FaShoppingCart></FaShoppingCart>

            <NavLink to="/DashBoard/Cart">add items</NavLink>
          </li>

          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <BsMenuButtonWideFill />
            <NavLink to="/DashBoard/Cart">manage items</NavLink>
          </li>

          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <MdBookmarkAdd />

            <NavLink to="/DashBoard/Cart">Manage bookings</NavLink>
          </li>

          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <FaUsers></FaUsers>

            <NavLink to="/DashBoard/Cart">all users</NavLink>
          </li>

          <hr />
          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <FaHome></FaHome>
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <TiThMenu />
            <NavLink to="/OurMenu">Menu</NavLink>
          </li>

          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <FaShoppingCart></FaShoppingCart>

            <NavLink to="/OurShop">Shop</NavLink>
          </li>

          <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
            <MdEmail />
            <NavLink to="/ContactUs">Contact</NavLink>
          </li>
        </ul>
      </div>
      {/* sidebar end */}
      <div className="m-auto  flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default D_Bord;
