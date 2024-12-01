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
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setQuantity(existingItem.quantity);
      setShowControls(true); // Mostrar controles si el producto está en el carrito
    } else {
      setQuantity(0);
      setShowControls(false); // Ocultar controles si el producto no está en el carrito
    }
  }, [cartItems, product.id]);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: newQuantity,
    });
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: newQuantity,
      });
    } else {
      setQuantity(0);
      setShowControls(false); // Ocultar controles cuando la cantidad llegue a 0
      removeFromCart(product.id); // Eliminar el producto del carrito
    }
  };

  const handleShowControls = () => {
    setShowControls(true);
    setQuantity(1); // Inicia con cantidad 1 al mostrar controles
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition relative">
      <div className="w-full h-48 overflow-hidden flex items-center justify-center">
        <img src={product.image} alt={product.title} className="object-contain w-full h-full" />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-gray-800 font-bold">{product.price.toFixed(2)}€</p>

        {showControls ? (
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button
              onClick={handleDecrease}
              className="bg-[#199aaf] text-white px-4 py-2 rounded hover:bg-[#3ed7d7] transition"
            >
              -
            </button>
            <span className="text-gray-800 font-semibold">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-[#199aaf] text-white px-4 py-2 rounded hover:bg-[#3ed7d7] transition"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleShowControls}
            className="absolute bottom-4 right-4 bg-[#199aaf] text-white px-4 py-2 rounded hover:bg-[#3ed7d7] transition"
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default GenericCard;

