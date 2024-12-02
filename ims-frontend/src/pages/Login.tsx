import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  login: () => void;
}

const Login: React.FC<LoginProps> = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username && password) {
      login(); // Trigger login functionz
      navigate("/admin/dashboard"); // Redirect to Admin Dashboard
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/fastlogo.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Form Container */}
      <div
        className="relative bg-white shadow-lg rounded-lg p-8 max-w-md w-full animate-fade-in"
        style={{
          backdropFilter: "blur(10px)", // Efecto de desenfoque opcional
        }}
      >
        <h2
          className="text-2xl font-bold mb-4 text-[#199aaf]"
          style={{
            textShadow: "0 1px 1px rgba(0, 0, 0, 0.1)", // Contorno sutil
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            textRendering: "optimizeLegibility",
          }}
        >
          Log In
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#199aaf]">Email</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-[#199aaf] rounded-md bg-transparent text-[#199aaf] focus:outline-none focus:ring-2 focus:ring-[#3ed7d7]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#199aaf]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-[#199aaf] rounded-md bg-transparent text-[#199aaf] focus:outline-none focus:ring-2 focus:ring-[#3ed7d7]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#199aaf] text-white py-2 rounded hover:bg-[#3ed7d7] transition"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-[#199aaf]">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#3ed7d7] underline">
            Sign Up
          </a>
        </p>
      </div>

      {/* Animación de entrada */}
      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
