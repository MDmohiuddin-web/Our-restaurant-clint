import { NavLink, Outlet } from "react-router-dom";

import logo from "../../assets/Resources/nav-logo.svg";
import { FaHome, FaShoppingCart, FaUsers } from "react-icons/fa";
import { MdBookmarkAdd, MdEmail } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

import {

  FaBookmark,
  FaCalendar,
  FaList,
  FaMessage,
 
  FaWallet,
} from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { RiMenuFold2Line } from "react-icons/ri";

const D_Bord = () => {
// for common user
  const common=(<><li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
    <FaHome></FaHome>

    <NavLink to="/DashBoard/Cart">User Home</NavLink>
  </li>
  <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
    <FaCalendar></FaCalendar>
    <NavLink to="/DashBoard/Cart">Reservation</NavLink>
  </li>

  <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
    <FaWallet></FaWallet>
    <NavLink to="/DashBoard/Cart">Payment History</NavLink>
  </li>

  <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
    <MdBookmarkAdd />

    <NavLink to="/DashBoard/Cart">my cart</NavLink>
  </li>

  <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
    <FaMessage></FaMessage>
    <NavLink to="/DashBoard/Cart">Add Review</NavLink>
  </li>

  <li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
    <FaList></FaList>

    <NavLink to="/DashBoard/Cart">my booking</NavLink>
  </li></>)

//for admin user
const admin=(<>
<li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
  <FaHome></FaHome>

  <NavLink to="/DashBoard/Cart">Admin Home</NavLink>
</li>


<li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
<ImSpoonKnife />
  <NavLink to="/DashBoard/Cart">add items</NavLink>
</li>

<li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
  
<RiMenuFold2Line />
  <NavLink to="/DashBoard/Cart">manage items</NavLink>
</li>

<li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
<FaBookmark />
  <NavLink to="/DashBoard/Cart">Manage bookings</NavLink>
</li>

<li className="flex items-center  gap-2 hover:text-white duration-300 text-xl">
<FaUsers />

  <NavLink to="/DashBoard/Cart">all users</NavLink>
</li></>)




  // todo: get isAdmin from Database
  const isAdmin=true;
  return (
    <div className="flex capitalize">
      {/* sidebar */}
      <div className="m-auto w-[20%] h-svh bg-[#D1A054] p-5">
        <img src={logo} alt="" loading="lazy" className="my-5" />

        <ul className="space-y-2 uppercase">
          {
            isAdmin ?<>{admin}</>:<>{common}</>
          }

          {/*  */}

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
