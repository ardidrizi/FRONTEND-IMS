import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { usePurchase } from '../context/PurchaseContext';
import { useAuth } from '../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { addPurchase } = usePurchase();
  const { isLoggedIn } = useAuth();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      alert('To make a purchase, you need to authenticate.');
      navigate('/login');
      return;
    }

    if (cartItems.length === 0) return;

    const newPurchase = {
      id: uuidv4(),
      date: new Date().toLocaleDateString(),
      total: parseFloat(getTotalPrice()),
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    addPurchase(newPurchase);
    cartItems.forEach((item) => removeFromCart(item.id)); // Limpia el carrito
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const handleIncreaseQuantity = (item: any) => {
    addToCart({ ...item, quantity: item.quantity + 1 });
  };

  const handleDecreaseQuantity = (item: any) => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: item.quantity - 1 });
    } else {
      removeFromCart(item.id); // Elimina el producto si la cantidad llega a 0
    }
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10 relative">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty!</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-300 pb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain rounded-md"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-gray-600">
                    {item.price.toFixed(2)}€ x {item.quantity} ={' '}
                    {(item.price * item.quantity).toFixed(2)}€
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleDecreaseQuantity(item)}
                  className="bg-[#199aaf] text-white px-2 py-1 rounded hover:bg-[#3ed7d7] transition"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item)}
                  className="bg-[#199aaf] text-white px-2 py-1 rounded hover:bg-[#3ed7d7] transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-6">
            <h2 className="text-2xl font-bold">Total: {getTotalPrice()}€</h2>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-[#199aaf] text-white px-6 py-2 rounded-lg hover:bg-[#3ed7d7] transition font-semibold"
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            animation: 'fade-in 0.5s ease-in-out',
            backgroundImage: 'url(/public/images/fastlogo.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg"
            style={{
              backdropFilter: 'blur(10px)',
              textAlign: 'center',
              maxWidth: '400px',
            }}
          >
            <h2
              className="text-2xl font-semibold text-[#199aaf]"
              style={{
                textShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
              }}
            >
              Purchase successful!
            </h2>
            <p className="mt-4 text-lg" style={{ color: '#3ed7d7' }}>
              Estimated time: <strong>25 min</strong>
            </p>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CartPage;
