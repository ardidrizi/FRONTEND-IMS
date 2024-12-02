import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/login_api";

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from submitting the traditional way
    setError(""); // Clear previous errors

    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const data = await login(email, password);
      console.log("Login successful:", data);
      navigate("/admin/dashboard"); // Redirect to Admin Dashboard
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/855135/855135-hd_1280_720_24fps.mp4"
      ></video>

      {/* Form Container */}
      <div
        className="relative max-w-md w-full p-6 bg-white bg-opacity-50 rounded-lg shadow-lg animate-fade-in"
        style={{
          backdropFilter: "blur(10px)", // Efecto de desenfoque
        }}
      >
        <h2
          className="text-2xl font-semibold text-center text-[#199aaf] mb-6"
          style={{
            textShadow: "0 1px 1px rgba(0, 0, 0, 0.1)", // Contorno sutil
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            textRendering: "optimizeLegibility",
          }}
        >
          Log In
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-[#199aaf] focus:outline-none focus:ring-2 focus:ring-[#3ed7d7]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-[#199aaf] focus:outline-none focus:ring-2 focus:ring-[#3ed7d7]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#199aaf] text-white rounded-full hover:bg-[#3ed7d7] transition-all"
          >
            Log In
          </button>
          <div className="text-center mt-4">
            <span>Don't have an account? </span>
            <Link
              to="/signup"
              className="text-[#3ed7d7] hover:text-[#199aaf] transition-all"
            >
              Sign Up
            </Link>
          </div>
        </form>
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

export default LoginComponent;
