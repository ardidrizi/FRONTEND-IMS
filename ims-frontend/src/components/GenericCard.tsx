import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface GenericCardProps {
  product: Product;
}

const GenericCard: React.FC<GenericCardProps> = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  // Maintain the state of quantity if the product is already in the cart
  useEffect(() => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setQuantity(existingItem.quantity);
    }
  }, [cartItems, product.id]);

  useEffect(() => {
    handleAddOrUpdateCart()
  }, [quantity]);


  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => Math.max(prev - 1, 0));

  const handleAddOrUpdateCart = () => {
    if (quantity > 0) {
      // Replace the existing quantity in the cart with the new quantity
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity, // This replaces the existing quantity
      });
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition">
      <div className="w-full h-48 overflow-hidden flex items-center justify-center">
        <img src={product.image} alt={product.title} className="object-contain w-full h-full" />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-gray-800 font-bold">{product.price.toFixed(2)}€</p>

        <div className="flex items-center justify-center space-x-4 mt-4">
          <>
            <button
              onClick={handleDecrease}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
            >
              -
            </button>
            <span className="text-gray-800 font-semibold">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
            >
              +
            </button>
          </>
        </div>
        {/* {quantity > 0 && (
          <button
            onClick={handleAddOrUpdateCart}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-400 transition"
          >
            {cartItems.some((item) => item.id === product.id) ? 'Update Cart' : 'Add to Cart'}
          </button>
        )} */}
      </div>
    </div>
  );
};

export default GenericCard;

