import { Link, NavLink } from "react-router-dom";
// import navlogo from "../assets/Resources/nav-logo.svg";
import navlogo from "../../assets/Resources/nav-logo.svg";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import UseCart from "../../Hooks/UseCart";
 
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart]=UseCart()

  
  const logout = () => {
    logOut()
      .then(() => {
        toast.success("sign out success full");
        // window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        toast.error("User logOut Unsuccessfully")
        // alert("User logOut successfully");
      });
  };

  const links = (
    <>
      <li className="hover:text-my_color-400">
        <NavLink to="/" className="hover:text-yellow-400">
          Home{" "}
        </NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="/OurMenu" className="hover:text-yellow-400">
          OurMenu
        </NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="/OurShop" className="hover:text-yellow-400">
          OurShop
        </NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="/ContactUs" className="hover:text-yellow-400">
          Contact Us
        </NavLink>
      </li>
      <li className="hover:text-my_color-400">
        <NavLink to="/DashBoard" className="hover:text-yellow-400">
          DashBoard
        </NavLink>
      </li>

      {user?.email ? (
        <>
          {/* <li className="hover:text-my_color-400">
            <NavLink to="/Profile">Profile</NavLink>
          </li> */}
        </>
      ) : (
        <li className="hover:text-my_color-400">
          <NavLink to="/Login">Log in</NavLink>
        </li>
      )}
      {/*  */}
    </>
  );
  return (
    <div className="navbar  text-white bg-black bg-opacity-30 mx-auto  fixed z-10        ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <img src={navlogo} alt="" />
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/*  */}
        <div className="flex gap-5 text-black">
          <div className="dropdown dropdown-end">
            <Link 
            to='/DashBoard'
              tabIndex={0}
              role="button"
              
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item text-white bg-transparent border-none">
                  {`+${cart?.length || 0}`}
                </span>
              </div>
            </Link>
            
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  // className="tooltip tooltip-left" data-tip={user?.displayName}
                  title={user?.displayName}
                  src={
                    user?.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.email ? (
                <>
                  <li className="hover:text-my_color-400">
                    <NavLink to="/Profile">Profile</NavLink>
                  </li>
                  <li>
                    <Link onClick={logout}>Logout</Link>
                  </li>
                </>
              ) : (
                <li className="hover:text-my_color-400">
                  <NavLink to="/Login">Log in</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
