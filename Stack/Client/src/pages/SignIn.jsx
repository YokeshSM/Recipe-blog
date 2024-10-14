import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
// import { useUser } from "../context/userContext.jsx";
import { useUser } from "../context/UserContext";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/auth/signin", {
        email,
        password,
      });
      console.log("Response:", response.data);
      setUser(response.data.user);
      nav("/");
      toast("Sign Up Successful!");
    } catch (error) {
      console.error("Error during sign up:", error);
      toast(
        "Sign Up Failed: " +
          (error.response?.data.message || "An error occurred")
      );
    }

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter mail"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
