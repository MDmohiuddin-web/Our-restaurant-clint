import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouts = ({ children }) => {
const location=useLocation()
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }

  return <Navigate to="/Login" state={{form:location}} replace></Navigate>;
};

export default PrivateRouts;
