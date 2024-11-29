import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10">
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
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-6">
            <h2 className="text-2xl font-bold">Total: ${getTotalPrice()}</h2>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
