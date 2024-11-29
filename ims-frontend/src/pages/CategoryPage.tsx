import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [quantity, setQuantity] = useState(0); // Estado local para cada tarjeta

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => Math.max(prev - 1, 0));

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition">
      <div className="w-full h-48 overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full"
        />
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
                className="bg-skyblue text-white px-4 py-2 rounded hover:bg-blue-400 transition"
              >
                -
              </button>
              <span className="text-gray-800 font-semibold">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="bg-skyblue text-white px-4 py-2 rounded hover:bg-blue-400 transition"
              >
                +
              </button>
            </>
          ) : (
            <button
              onClick={handleIncrease}
              className="bg-skyblue text-white px-4 py-2 rounded hover:bg-blue-400 transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>(); // Captura la categoría desde la URL
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await import(`../mockData/mock${category?.toLowerCase()}.json`);
        setProducts(response.default); // Carga los productos desde el JSON
      } catch (error) {
        console.error('Error loading category data:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 capitalize">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
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

