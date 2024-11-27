import React from 'react';
import { useNavigate } from 'react-router-dom';

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
            <button
              onClick={() => {
                if (isLoggedIn) {
                  toggleAuth(); // Logoff
                } else {
                  navigate('/login'); // Redirect to Login page
                }
              }}
              className={`px-4 py-2 rounded transition ${
                isLoggedIn
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-highlight hover:bg-blue-600'
              }`}
            >
              {isLoggedIn ? 'Logoff' : 'Login'}
            </button>
          </li>

          {/* Online Status Indicator */}
          {isLoggedIn && (
            <li className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
              Online
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
