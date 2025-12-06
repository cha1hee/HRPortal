import React, { useState } from "react";
// import employees from "../../data/Employees.json";
import { onboardCall } from "../../services/api";

function Onboarding() {
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    role: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target; // Destructuring to get the name and value of the input field
    // Updating formValues state using the spread operator
    setFormValues({
      ...formValues, // Spread operator: copies all existing key-value pairs from formValues
      [name]: value, // Dynamically updates the key (name) with the new value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior (page reload)
    const result = await onboardCall(
      formValues.email,
      formValues.name,
      formValues.role
    );
    const { email, name, role } = formValues; // mapping email and password variables to formvalues dict (called object destructuring)
    if (result.error) {
      alert(result.error);
      return;
    } else {
      alert("success, notify your new employee to signup");
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          New Hire Credentials
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="name"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="role"
              id="role"
              name="role"
              value={formValues.role}
              onChange={handleChange}
              placeholder="Role"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white py-2 rounded-lg font-semibold"
          >
            Log User
          </button>
        </form>
      </div>
    </div>
  );
}
export default Onboarding;
