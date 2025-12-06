import React, { useState } from "react";
// import employees from "../../data/Employees.json";
import { signupCall } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
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
    const { email, name, password, confirmPassword } = formValues;
    if (password !== confirmPassword) {
      alert("passwords not matching please try again");
    } else {
      const result = await signupCall(email, name, password);

      if (result.error) {
        alert(result.error);
        return;
      } else {
        alert("success! please log in");
        navigate(`../login`);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Create Your Account
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
          {/* Name */}
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
          {/* Password */}
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white py-2 rounded-lg font-semibold"
          >
            Sign Up
          </button>
        </form>

        {/* Optional: Already have an account */}
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
export default SignUpPage;
