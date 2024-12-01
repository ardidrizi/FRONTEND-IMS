///src="https://videos.pexels.com/video-files/6869006/6869006-uhd_3840_2160_30fps.mp4"
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
    <div
      className="min-h-screen flex flex-col w-full"
      style={{
        backgroundColor: "#E0F7FA",
        margin: "0",
        padding: "0",
        overflowX: "hidden", // Evita cualquier scroll horizontal
      }}
    >
      {/* Header Section */}
      <header
        style={{ backgroundColor: "#199aaf" }}
        className="text-white py-4 px-4 shadow-lg w-full"
      >
        <div className="text-center w-full">
          <img
            src="/public/images/logo.png" // Replace with the correct path if necessary
            alt="FastGroceries Logo"
            className="mx-auto h-24 w-auto"
          />
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow relative w-full">
        {/* Video Section */}
        <section className="relative w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-auto"
            style={{ objectFit: "cover" }}
            src="https://videos.pexels.com/video-files/6869006/6869006-uhd_3840_2160_30fps.mp4"
          ></video>

          {/* Subtitle */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center">
            <p
              className="text-xl font-semibold opacity-0 animate-fade-in"
              style={{
                background: "linear-gradient(90deg, #ffffff, #d4d4d4, #ffffff)", // Efecto plateado brillante
                WebkitBackgroundClip: "text", // Clipa el degradado al texto
                WebkitTextFillColor: "transparent", // Fondo transparente para mostrar el gradiente
                animation: "fade-in 2s forwards",
              }}
            >
              You order, we deliver — faster than you can imagine!
            </p>
          </div>
        </section>

        {/* Floating Postal Code Form */}
        <div
          className="absolute inset-x-0 mx-auto rounded-lg shadow-md p-4 animate-fade-in"
          style={{
            bottom: "2rem",
            width: "200px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)", // Desenfoque del fondo
          }}
        >
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter your ZIP"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                fontSize: "0.9rem",
              }}
              className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:[#199aaf] text-gray-800 mb-2 text-center"
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
      </main>

      {/* Sustainability Section */}
      <section className="py-4 w-full">
        <div className="flex flex-col items-center w-full">
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
      <footer
        style={{ backgroundColor: "#199aaf" }}
        className="text-white py-2 w-full"
      >
        <div className="text-center w-full">
          <p
            className="text-sm cursor-pointer"
            onClick={() => navigate("/admin/login")}
          >
            &copy; 2024 FastGroceries. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Animation Keyframes */}
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

export default HomePage;

