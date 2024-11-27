import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isLoggedIn: boolean;
  toggleAuth: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, toggleAuth }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold tracking-tight">IMS</h1>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/dashboard" className="hover:text-highlight transition">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-highlight transition">
              Products
            </Link>
          </li>
          <li>
            <Link to="/suppliers" className="hover:text-highlight transition">
              Suppliers
            </Link>
          </li>
        </ul>

        {/* Authentication Section */}
        <ul className="flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              <li className="flex items-center">
                <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                Online
              </li>
              <li>
                <button
                  onClick={toggleAuth}
                  className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition"
                >
                  Logoff
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => navigate('/login')}
                className="bg-highlight px-4 py-2 rounded text-white hover:bg-blue-600 transition"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
