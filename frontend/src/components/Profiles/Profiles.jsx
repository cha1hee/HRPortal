import { Link } from "react-router-dom";
// import employeesPublic from "../../../data/EmployeesPublic.json";
import { getProfiles } from "../../services/api";
import { useEffect, useState } from "react";
const Profiles = () => {
  const [employees, setEmpProfiles] = useState(null);
  useEffect(() => {
    (async () => {
      const profData = await getProfiles();
      setEmpProfiles(profData.message);
    })();
  }, []);

  return (
    <div className="pt-28 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
        Meet The Team
      </h1>

      <p className="text-gray-600 text-center mb-10">
        Welcome to The Best Company Ever — get to know our amazing team here.
      </p>

      {/* Grid of profile cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {employees ? (
          Object.entries(employees).map(([email, emp]) => (
            <div key={email} className="block group">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center">
                <img
                  src={emp.pic}
                  alt={emp.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200 group-hover:border-blue-500 transition-all"
                />

                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {emp.name}
                </h3>

                <p className="text-gray-500 mt-1">{emp.role}</p>
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Profiles;
