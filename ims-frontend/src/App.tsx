import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavbarAdmin from './components/NavbarAdmin';
import NavbarSupermarket from './components/NavbarSupermarket';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Suppliers from './pages/Suppliers';
import LoginUserPage from './pages/LoginUserPage';
import SignUserPage from './pages/SignUserPage';
import SupermarketPage from './pages/SupermarketPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const toggleAuth = () => setIsLoggedIn(!isLoggedIn);

  // Determine which navbar to show based on the route
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isSupermarketRoute = location.pathname.startsWith('/supermarket');
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        {/* Show appropriate navbar */}
        {isAdminRoute && <NavbarAdmin isLoggedIn={isLoggedIn} toggleAuth={toggleAuth} />}
        {(isSupermarketRoute || isAuthRoute) && <NavbarSupermarket />}

        <div
          className={
            isAdminRoute
              ? 'max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8'
              : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
          }
        >
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/suppliers" element={<Suppliers />} />
            <Route path="/admin/login" element={<LoginUserPage />} />
            <Route path="/admin/signup" element={<SignUserPage />} />

            {/* Supermarket Routes */}
            <Route path="/supermarket" element={<SupermarketPage />} />
            <Route path="/supermarket/:category" element={<CategoryPage />} />
            <Route path="/supermarket/cart" element={<CartPage />} />

            {/* Authentication Routes */}
            <Route path="/login" element={<LoginUserPage />} />
            <Route path="/signup" element={<SignUserPage />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;












