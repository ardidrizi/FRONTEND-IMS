import React, { useContext, useState } from 'react';
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
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => Math.max(prev - 1, 0));

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity,
      });
      setQuantity(0); // Reset quantity after adding
      alert(`${quantity} ${product.title}(s) added to cart!`);
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
        <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>

        <div className="flex items-center justify-center space-x-4 mt-4">
          {quantity > 0 ? (
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
          ) : (
            <button
              onClick={handleIncrease}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
            >
              Add to Cart
            </button>
          )}
        </div>
        {quantity > 0 && (
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-400 transition"
          >
            Add {quantity} to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default GenericCard;
