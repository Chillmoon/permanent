import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { RootState } from "../../app/store";

const ProtectedRoutes = () => {
  const user = useSelector((state: RootState) => state.user.user);
  console.log(user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
