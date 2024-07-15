import { Outlet } from "react-router-dom";
import Navbar from "../COMPONENTS/NavBar/Navbar";
import Footer from "../COMPONENTS/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="capitalize">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Root;
