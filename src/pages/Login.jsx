import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validEmail = "test@example.com";
  const validPassword = "123456";

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    if (email === validEmail && password === validPassword) {
      localStorage.setItem("user", email);
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 w-full max-w-md rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back 👋</h2>

        <form onSubmit={handleLogin}>
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

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
