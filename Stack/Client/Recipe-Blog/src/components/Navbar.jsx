import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { LogOut } from "lucide-react";
import { toast } from "react-toastify";
import chef from "../assets/images/chefbg.gif";
const CookingNavbar = () => {
  const { user, setUser } = useUser();
  const handleLogout = async () => {
    setUser(null);
    toast("logged out successfully");
  };
  return (
    <nav className="bg-green-600 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavLink to="/" className="text-white text-2xl font-bold">
          <div className="flex flex-row hover:cursor-default">
            <h4>Ungal Unavu</h4>
            <img className="h-10 w-10 ml-2" src={chef} alt="chef" />
          </div>
        </NavLink>

        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold"
                  : "text-green-200 hover:text-white transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold"
                  : "text-green-200 hover:text-white transition duration-300"
              }
            >
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold"
                  : "text-green-200 hover:text-white transition duration-300"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold"
                  : "text-green-200 hover:text-white transition duration-300"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            {user ? (
              <span className="text-black bg-white p-3 rounded-2xl">
                {user.username}
              </span>
            ) : (
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold"
                    : "text-green-200 hover:text-white transition duration-300"
                }
              >
                Sign Up
              </NavLink>
            )}
          </li>
          <li>
            {user ? (
              <span onClick={handleLogout} className="text-white">
                <LogOut />
              </span>
            ) : (
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold"
                    : "text-green-200 hover:text-white transition duration-300"
                }
              >
                Sign In
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CookingNavbar;
