import React, { useEffect, useState } from 'react';
import mockFruits from '../../mockData/mockFruits.json';

interface Fruit {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

const FruitCard: React.FC<{ fruit: Fruit }> = ({ fruit }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => Math.max(prev - 1, 0));

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition">
      {/* Imagen con tamaño fijo */}
      <div className="w-full h-48 overflow-hidden flex items-center justify-center">
        <img
          src={fruit.image}
          alt={fruit.title}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{fruit.title}</h2>
        <p className="text-gray-600">{fruit.description}</p>
        <p className="text-gray-800 font-bold">${fruit.price.toFixed(2)}</p>

        {/* Botones */}
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

const FruitsPage: React.FC = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setFruits(mockFruits); // Simula la carga de datos
      }, 500);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Fruits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fruits.map((fruit) => (
          <FruitCard key={fruit._id} fruit={fruit} />
        ))}
      </div>
    </div>
  );
};

export default FruitsPage;


