import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Suppliers from './pages/Suppliers';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SupermarketPage from './pages/SupermarketPage';
import CategoryPage from './pages/CategoryPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const toggleAuth = () => setIsLoggedIn(!isLoggedIn);

  // Show Navbar only on /admin routes
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-white">
      {isAdminRoute && <Navbar isLoggedIn={isLoggedIn} toggleAuth={toggleAuth} />}
      <div className={isAdminRoute ? 'max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/suppliers" element={<Suppliers />} />
          <Route path="/admin/login" element={<Login login={() => setIsLoggedIn(true)} />} />
          <Route path="/admin/signup" element={<Signup />} />

          {/* Supermarket Routes */}
          <Route path="/supermarket" element={<SupermarketPage />} />
          <Route path="/supermarket/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;










