import { Outlet } from "react-router-dom";
import Navbar from "../COMPONENTS/NavBar/Navbar";
import Footer from "../COMPONENTS/Footer/Footer";


const Root = () => {
    return (
        <div className="capitalize">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;