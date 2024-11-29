import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import GenericCard from '../components/GenericCard';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await import(`../mockData/mock${category?.toLowerCase()}.json`);
        setProducts(response.default); // Load products dynamically from the JSON file
      } catch (error) {
        console.error('Error loading category data:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [category]);

  const handleAddToCart = (product: Product) => {
    addToCart(product); // Add product to the cart context
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 capitalize">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <GenericCard
            key={product._id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
            quantity={cartItems[product._id]?.quantity || 0}
          />
        ))}
        {products.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">
            No products found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;


