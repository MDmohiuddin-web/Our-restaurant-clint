
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../COMPONENTS/Loading/Loading";

const PrivateRouts = ({ children }) => {
const location=useLocation()
// console.log(location)
const {user, loading} = UseAuth();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/Login" state={{from: location}} replace></Navigate> ;
};

export default PrivateRouts;
