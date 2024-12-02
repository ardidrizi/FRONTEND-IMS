import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarAdmin from "./components/NavbarAdmin";
import NavbarSupermarket from "./components/NavbarSupermarket";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Suppliers from "./pages/Suppliers";
import Orders from "./pages/OrdersPage";
import Login from "./pages/Login";
import LoginUserPage from "./pages/LoginUserPage";
import SignUserPage from "./pages/SignUserPage";
import HomePage from "./pages/HomePage";
import SupermarketPage from "./pages/SupermarketPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import MyProfilePage from "./pages/MyProfilePage";
import { CartProvider } from "./context/CartContext";
import { PurchaseProvider } from "./context/PurchaseContext";
import { AuthProvider } from "./context/AuthContext";
import LoginComponent from "./components/LoginComponent";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const toggleAuth = () => setIsLoggedIn(!isLoggedIn);

  // Mostrar NavbarSupermarket o NavbarAdmin según la ruta
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isNavbarRequired = !isAdminRoute && location.pathname !== "/";

  return (
    <AuthProvider>
      <CartProvider>
        <PurchaseProvider>
          <div className="min-h-screen bg-white">
            {/* Mostrar navbar según la ruta */}
            {isNavbarRequired && <NavbarSupermarket />}
            {isAdminRoute && (
              <NavbarAdmin isLoggedIn={isLoggedIn} toggleAuth={toggleAuth} />
            )}

            {/* Contenido principal */}
            <div
              className={
                isAdminRoute
                  ? "max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8"
                  : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              }
            >
              <Routes>
                {/* Rutas de Admin */}
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/suppliers" element={<Suppliers />} />
                <Route
                  path="/admin/login"
                  element={<Login login={toggleAuth} />}
                />
                <Route path="/admin/orders" element={<Orders />} />

                {/* Rutas del supermercado */}
                <Route path="/supermarket" element={<SupermarketPage />} />
                <Route
                  path="/supermarket/:category"
                  element={<CategoryPage />}
                />
                <Route path="/supermarket/cart" element={<CartPage />} />
                <Route path="/profile" element={<MyProfilePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginUserPage />} />

                {/* Rutas de autenticación */}
                <Route path="/admin/login" element={<LoginComponent />} />
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
