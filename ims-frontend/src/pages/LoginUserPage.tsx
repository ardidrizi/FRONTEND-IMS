import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginUserPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Simula un login exitoso
      if (email === 'test@example.com' && password === 'password') {
        navigate('/supermarket'); // Redirige al supermercado tras un login exitoso
      } else {
        throw new Error('Invalid credentials. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
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
        ///src="https://videos.pexels.com/video-files/855135/855135-hd_1280_720_24fps.mp4"
      ></video>

      {/* Form Container */}
      <div className="relative max-w-md w-full p-6 bg-white bg-opacity-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
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
    </div>
  );
};

export default LoginUserPage;
