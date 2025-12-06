import { useContext } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const RoleRoute = ({ children, allowed }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (!allowed.includes(user.role)) return <Navigate to="/unauthorized" />;

  return children;
};

export default RoleRoute;
