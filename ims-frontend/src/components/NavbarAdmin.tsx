import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isLoggedIn: boolean;
  toggleAuth: () => void;
}

const NavbarAdmin: React.FC<NavbarProps> = ({ isLoggedIn, toggleAuth }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Button for Supermarket */}
        <div>
          <Link to="/supermarket">
            <img
              src="../public/images/logo.png"
              alt="Supermarket Logo"
              className="h-14" /* Cambiado a un tamaño más grande */
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="/admin/dashboard"
              className="text-[#cdedfe] hover:text-highlight transition"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/products"
              className="text-[#cdedfe] hover:text-highlight transition"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/admin/suppliers"
              className="text-[#cdedfe] hover:text-highlight transition"
            >
              Suppliers
            </Link>
          </li>
          <li>
            <Link
              to="/admin/orders"
              className="text-[#cdedfe] hover:text-highlight transition"
            >
              Orders
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
                  className="bg-[#3ed7d7] text-white px-4 py-2 rounded hover:bg-red-500 transition"
                >
                  Logoff
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => navigate('/admin/login')}
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

export default NavbarAdmin;
