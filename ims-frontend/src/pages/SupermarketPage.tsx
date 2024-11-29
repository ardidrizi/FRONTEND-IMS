import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Discounts', image: '/src/assets/images/categories/discounts.png' },
  { name: 'Fruits', image: '/src/assets/images/categories/fruits.png' },
  { name: 'Vegetables', image: '/src/assets/images/categories/vegetables.png' },
  { name: 'Dairy', image: '/src/assets/images/categories/dairy.png' },
  { name: 'Meat', image: '/src/assets/images/categories/meat.png' },
  { name: 'Oil', image: '/src/assets/images/categories/oil.png' },
  { name: 'Legumes', image: '/src/assets/images/categories/legumes.png' },
  { name: 'Coffee', image: '/src/assets/images/categories/coffee.png' },
  { name: 'Fresh', image: '/src/assets/images/categories/fresh.png' },
  { name: 'ColdCuts', image: '/src/assets/images/categories/coldcuts.png' },
  { name: 'Bakery', image: '/src/assets/images/categories/bakery.png' },
  { name: 'Frozen', image: '/src/assets/images/categories/frozen.png' },
  { name: 'Snacks', image: '/src/assets/images/categories/snacks.png' },
  { name: 'Beverages', image: '/src/assets/images/categories/beverages.png' },
  { name: 'Alcohol', image: '/src/assets/images/categories/alcohol.png' },
  { name: 'WineBeer', image: '/src/assets/images/categories/winebeer.png' },
  { name: 'Cleaning', image: '/src/assets/images/categories/cleaning.png' },
  { name: 'Health', image: '/src/assets/images/categories/health.png' },
  { name: 'Baby', image: '/src/assets/images/categories/baby.png' },
  { name: 'Pets', image: '/src/assets/images/categories/pets.png' },
];

const SupermarketPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">   </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate(`/supermarket/${category.name.toLowerCase()}`)}
          >
            <div className="w-full h-48 overflow-hidden flex items-center justify-center">
              <img
                src={category.image}
                alt={category.name}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SupermarketPage;
