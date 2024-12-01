import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavbarAdmin from './components/NavbarAdmin';
import NavbarSupermarket from './components/NavbarSupermarket';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Suppliers from './pages/Suppliers';
import Orders from './pages/OrdersPage'
import Login from './pages/Login'
import LoginUserPage from './pages/LoginUserPage';
import SignUserPage from './pages/SignUserPage';
import HomePage from './pages/HomePage';
import SupermarketPage from './pages/SupermarketPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import MyProfilePage from './pages/MyProfilePage';
import { CartProvider } from './context/CartContext';
import { PurchaseProvider } from './context/PurchaseContext';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const toggleAuth = () => setIsLoggedIn(!isLoggedIn);

  // Mostrar navbar en todas las rutas excepto las de admin y la principal '/'
  const isNavbarRequired =
    !location.pathname.startsWith('/admin') && location.pathname !== '/';

  return (
    <AuthProvider>
      <CartProvider>
        <PurchaseProvider>
          <div className="min-h-screen bg-white">
            {/* Mostrar navbar según la ruta */}
            {isNavbarRequired && <NavbarSupermarket />}

            {/* Contenido principal */}
            <div
              className={
                location.pathname.startsWith('/admin')
                  ? 'max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8'
                  : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
              }
            >
              <Routes>
                {/* Rutas de Admin */}
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/suppliers" element={<Suppliers />} />
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin/orders" element={<Orders />} />

                {/* Rutas del supermercado */}
                <Route path="/supermarket" element={<SupermarketPage />} />
                <Route path="/supermarket/:category" element={<CategoryPage />} />
                <Route path="/supermarket/cart" element={<CartPage />} />
                <Route path="/profile" element={<MyProfilePage />} />
                <Route path="/" element={<HomePage />} />

                {/* Rutas de autenticación */}
                <Route path="/login" element={<LoginUserPage />} />
                <Route path="/signup" element={<SignUserPage />} />
              </Routes>
            </div>
          </div>
        </PurchaseProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
