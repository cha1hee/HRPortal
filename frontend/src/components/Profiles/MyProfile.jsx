import { useParams } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const MyProfile = () => {
  /**
   * TODO: EDIT TO MAKE IT LOOK BETTER OR A PROFILE PAGE, MAYBE AN UPLOAD PHOTO/EDIT PROFILE PAGE
   */
  const navigate = useNavigate();
  const currUser = useAuth().user;
  const { userID } = useParams();

  const handleCEOClick = () => {
    navigate(`/profile/${userID}/ceo`);
  };
  return (
    <div>
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center">
        <img
          src={currUser.pic}
          alt={currUser.name}
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200 group-hover:border-blue-500 transition-all"
        />

        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
          {currUser.name}
        </h3>

        <p className="text-gray-500 mt-1">{currUser.role}</p>
        <p className="text-gray-500 mt-1">ID: {currUser.id}</p>
      </div>
      {currUser.role === "ceo" || currUser.role === "manage" ? (
        <div className="bg-white rounded-xl shadow-md p-6  mt-[100px] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center">
          Admin Capabilities
          <button onClick={handleCEOClick} className="text-gray-100">
            Add a New Employee
          </button>
        </div>
      ) : currUser.role === "employee" ? (
        <div></div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MyProfile;
