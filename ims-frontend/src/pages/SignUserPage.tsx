        ///src="https://videos.pexels.com/video-files/856760/856760-hd_1920_1080_25fps.mp4"
        //https://pixabay.com/videos/flower-forget-me-not-spring-162124/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUserPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      console.log('User signed up:', userData);
      alert('Account created successfully!');
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[200vw] h-full object-cover"
        //src="https://videos.pexels.com/video-files/856760/856760-hd_1920_1080_25fps.mp4"
      ></video>

      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Form Container */}
      <div
        className="relative max-w-md w-full p-6 rounded-lg shadow-lg z-10"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Blanco casi transparente
          backdropFilter: "blur(10px)", // Efecto de desenfoque para mayor legibilidad
        }}
      >
        <h2
          className="text-2xl font-semibold text-center text-[#199aaf] mb-6"
          style={{
            textShadow: "0 1px 1px rgba(0, 0, 0, 0.1)", // Agrega un leve contorno para resaltar el texto
            WebkitFontSmoothing: "antialiased", // Mejora la nitidez en navegadores WebKit
            MozOsxFontSmoothing: "grayscale", // Mejora la nitidez en Firefox
            textRendering: "optimizeLegibility", // Fuerza un renderizado más claro del texto
          }}
        >
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-[#199aaf] focus:outline-none focus:ring-2 focus:ring-[#3ed7d7]"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-[#199aaf] focus:outline-none focus:ring-2 focus:ring-[#3ed7d7]"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-[#199aaf] focus:outline-none focus:ring-2 focus:ring-[#3ed7d7]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#199aaf] text-white rounded-full hover:bg-[#3ed7d7] transition-all"
          >
            Sign Up
          </button>
          <div className="text-center mt-4">
            <span>Already have an account? </span>
            <Link to="/login" className="text-[#3ed7d7] hover:text-[#199aaf] transition-all">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUserPage;
