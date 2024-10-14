import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useUser } from "../context/UserContext.jsx";

const SignUp = () => {
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the signup request
      const response = await axios.post(
        "http://localhost:4000/auth/signup",
        formData
      );
      console.log("---------------------------------------------");
      console.log(response.data);
      console.log("---------------------------------------------");

      toast.success("Successfully submitted");
      setUser(response.data.user);
      console.log("Form submitted:", formData);

      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit"); // Notify failure
      if (error.response) {
        // If there's a response, show specific error message
        console.error("Response error:", error.response.data);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Name"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
