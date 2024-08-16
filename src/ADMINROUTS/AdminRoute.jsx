
import UseAuth from "../Hooks/UseAuth";
import UseAdmin from "../Hooks/UseAdmin";
import { Navigate, useLocation } from "react-router-dom";

import Loading from "../COMPONENTS/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const [isAdmin, isAdminLoading] = UseAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
