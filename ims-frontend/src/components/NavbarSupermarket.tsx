import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarSupermarket: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <nav className="shadow fixed top-0 left-0 w-full z-50" style={{ backgroundColor: '#199aaf' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src="../public/images/logo.png"
                alt="Supermarket Logo"
                className="h-14" /* Cambiado a un tamaño más grande */
              />
            </Link>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/supermarket"
              className="hover:text-white transition"
              style={{ color: '#cdedfe' }}
            >
              Home
            </Link>
            <Link
              to="/supermarket/cart"
              className="hover:text-white transition"
              style={{ color: '#cdedfe' }}
            >
              Cart
            </Link>

            {/* Auth Section */}
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="hover:text-white transition"
                  style={{ color: '#cdedfe' }}
                >
                  My Profile
                </Link>
                <span className="text-green-500">•</span>
                <button
                  onClick={handleLogout}
                  className="hover:text-white transition"
                  style={{ color: '#cdedfe' }}
                >
                  Logoff
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="hover:text-white transition"
                style={{ color: '#cdedfe' }}
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
