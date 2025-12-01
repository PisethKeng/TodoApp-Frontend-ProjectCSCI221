// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ use react-router-dom

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Get existing users (or empty array)
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = storedUsers.some((user) => user.email === email);
    if (userExists) {
      setError("Email is already registered.");
      return;
    }

    // Add new user
    const newUser = { email, password };
    const updatedUsers = [...storedUsers, newUser];

    // Save users array back to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 w-full max-w-md rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>

        <form onSubmit={handleRegister}>
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-md mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded-md mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="block text-sm font-semibold">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded-md mb-4"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
