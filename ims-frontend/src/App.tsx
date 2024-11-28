import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Suppliers from './pages/Suppliers';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const toggleAuth = () => setIsLoggedIn(!isLoggedIn);

  // Show Navbar only on /admin routes
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      {isAdminRoute && <Navbar isLoggedIn={isLoggedIn} toggleAuth={toggleAuth} />}
      <div className={isAdminRoute ? 'pt-16' : ''}>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/suppliers" element={<Suppliers />} />
          <Route path="/admin/login" element={<Login login={() => setIsLoggedIn(true)} />} />
          <Route path="/admin/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;










