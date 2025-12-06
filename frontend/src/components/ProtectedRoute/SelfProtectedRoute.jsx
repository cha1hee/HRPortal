import { useContext } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { Navigate, useParams } from "react-router-dom";

const SelfProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const { userID } = useParams();

  if (!user) {
    return <Navigate to="/login" />;
  }

  // Only allow if the logged-in user's ID matches the URL parameter
  else if (String(user.id) !== String(userID)) {
    return <Navigate to={`/profile/${user.id}`} />;
  }
  return children;
};

export default SelfProtectedRoute;
