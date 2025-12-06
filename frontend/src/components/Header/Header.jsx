import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext/AuthContext";
const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const loggingOut = () => {
    logout();
    navigate(`../login`);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-wide">My Website</h1>

        <nav>
          <ul className="flex items-center space-x-6 text-gray-700">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    to="/profile/:userID"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <button onClick={loggingOut} className="hover:text-blue-500">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
