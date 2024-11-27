import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">IMS</h1>
        <ul className="flex space-x-6">
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
      </div>
    </nav>
  );
};

export default Navbar;

