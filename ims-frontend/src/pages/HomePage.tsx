import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const validPostalCodes = ["10001", "10002", "10003", "10004", "10005"]; // Example postal codes

const HomePage: React.FC = () => {
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePostalCodeCheck = () => {
    if (validPostalCodes.includes(postalCode.trim())) {
      setMessage("🎉 Congratulations! We deliver in your area.");
      setTimeout(() => navigate("/supermarket"), 2000); // Redirect after 2 seconds
    } else {
      setMessage("❌ Sorry, we currently do not deliver in your area.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#E0F7FA" }}>
      {/* Header Section */}
      <header
        style={{ backgroundColor: "#199aaf" }}
        className="text-white py-4 px-4 shadow-lg"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <img
            src="/public/images/logo.png" // Replace with the correct path if necessary
            alt="FastGroceries Logo"
            className="mx-auto h-24 w-auto"
          />
        </div>
      </header>

      {/* Video Section */}
      <section className="relative w-full overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          className="w-full h-auto"
          style={{ objectFit: "cover" }}
          src="https://videos.pexels.com/video-files/6869006/6869006-uhd_3840_2160_30fps.mp4"
        ></video>

        {/* Subtitle with animation */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center">
          <p
            className="text-xl font-semibold text-white opacity-0 animate-fade-in"
            style={{ animation: "fade-in 2s forwards" }}
          >
            You order, we deliver — faster than you can imagine!
          </p>
        </div>

        {/* Floating Postal Code Form */}
        <div
          className="absolute inset-x-0 bottom-4 mx-auto bg-white bg-opacity-70 rounded-lg shadow-md p-2"
          style={{
            width: "200px", // Adjusted the width of the container to be more narrow
            transform: "translateY(0%)",
          }}
        >
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter your ZIP"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              style={{
                backgroundColor: "rgba(224, 247, 250, 0.6)",
                fontSize: "0.9rem",
              }}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-2 text-center"
            />
            <button
              onClick={handlePostalCodeCheck}
              style={{
                backgroundColor: "#199aaf",
                fontSize: "0.9rem",
              }}
              className="w-full text-white py-1 px-3 rounded-lg hover:bg-blue-400 transition font-semibold"
            >
              Check
            </button>
          </div>
          {message && (
            <p
              className={`mt-2 text-xs font-medium text-center ${
                message.includes("Congratulations") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </section>

      {/* Sustainability Section */}
      <section
        className="py-4" // Reduced vertical padding to make the section less tall
        style={{
          backgroundColor: "#cdedfe", // Sky blue
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <p
            className="text-lg font-medium text-center leading-relaxed"
            style={{ color: "#199aaf" }}
          >
            🚴‍♂️ <strong>Committed to sustainability</strong>
            <br />
            Delivering fast with minimal impact on the environment.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#199aaf" }} className="text-white py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">&copy; 2024 FastGroceries. All rights reserved.</p>
        </div>
      </footer>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
