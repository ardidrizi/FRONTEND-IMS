import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarSupermarket: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link to="/supermarket" className="text-2xl font-bold text-blue-600">
              Supermarket
            </Link>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/supermarket"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/supermarket/cart"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Cart
            </Link>

            {/* Auth Section */}
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition">
                  My Profile
                </Link>
                <span className="text-green-500">•</span>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Logoff
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={handleLogin}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSupermarket;

