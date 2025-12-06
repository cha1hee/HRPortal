import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";

const AdminPage = () => {
  const { adminID } = useParams();
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleNavigation = () => {
    // Navigate to the '/about' route defined in main.jsx
    navigate("/profile/ceo/newUser");
  };

  return (
    <div>
      <h2>page for Admin only</h2>
      <p>we only do this for Admin</p>
      <button onClick={handleNavigation}>Create New User</button>
    </div>
  );
};

export default AdminPage;
