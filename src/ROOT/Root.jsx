import { Outlet } from "react-router-dom";
import Navbar from "../COMPONENTS/NavBar/Navbar";
import Footer from "../COMPONENTS/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="capitalize">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Root;
