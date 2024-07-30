import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouts = ({ children }) => {
const location=useLocation()
console.log(location)
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }

  return <Navigate to="/Login" state={location.state?.pathname} replace></Navigate> ;
};

export default PrivateRouts;
