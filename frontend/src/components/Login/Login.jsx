import React, { useState } from "react"; // Importing React and the useState hook for managing state
import { useNavigate, Link } from "react-router-dom";
// import employees from "../../data/Employees.json";
import { useAuth } from "../AuthContext/AuthContext";
import { loginCall } from "../../services/api";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  // useState initializes two pieces of state: formValues and errors
  const [formValues, setFormValues] = useState({
    inputEmail: "", // Initial value for the "email" input field
    inputPassword: "", // Initial value for the "password" input field
  });

  // Function to handle changes in input fields
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
    // const { inputEmail, inputPassword } = formValues;
    const result = await loginCall(
      formValues.inputEmail,
      formValues.inputPassword
    );
    if (result.error) {
      alert(result.error);
      return;
    }
    navigate(`../profile/${result.user.id}`);
    login(result.user);

    // Save logged-in user
    localStorage.setItem("user", JSON.stringify(result.user));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              id="email"
              name="inputEmail"
              value={formValues.inputEmail}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Password */}
          <div>
            <input
              type="password"
              id="password"
              name="inputPassword"
              value={formValues.inputPassword}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="text-white">
            Submit
          </button>{" "}
          {/* Submit button */}
          <Link to={`/sign-up`}>Sign Up Now</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
