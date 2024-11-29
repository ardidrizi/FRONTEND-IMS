import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const categories = [
  { name: 'Discounts', image: '/src/assets/images/categories/discounts.png' },
  { name: 'Fruits', image: '/src/assets/images/categories/fruits.png' },
  { name: 'Vegetables', image: '/src/assets/images/categories/vegetables.png' },
  { name: 'Dairy & Eggs', image: '/src/assets/images/categories/dairy.png' },
  { name: 'Meat & Fish', image: '/src/assets/images/categories/meat.png' },
  { name: 'Oil, Vinegar & Condiments', image: '/src/assets/images/categories/oil.png' },
  { name: 'Legumes, Pasta & Misc.', image: '/src/assets/images/categories/legumes.png' },
  { name: 'Coffee, Cereals & Sweets', image: '/src/assets/images/categories/coffee.png' },
  { name: 'Fresh & Ready', image: '/src/assets/images/categories/fresh.png' },
  { name: 'Aufschnitt & Brotaufstriche', image: '/src/assets/images/categories/coldcuts.png' },
  { name: 'Bakery', image: '/src/assets/images/categories/bakery.png' },
  { name: 'Frozen Foods', image: '/src/assets/images/categories/frozen.png' },
  { name: 'Snacks', image: '/src/assets/images/categories/snacks.png' },
  { name: 'Water & Beverages', image: '/src/assets/images/categories/beverages.png' },
  { name: 'Alcohol', image: '/src/assets/images/categories/alcohol.png' },
  { name: 'Wine & Beer', image: '/src/assets/images/categories/winebeer.png' },
  { name: 'Cleaning Supplies', image: '/src/assets/images/categories/cleaning.png' },
  { name: 'Health & Beauty', image: '/src/assets/images/categories/health.png' },
  { name: 'Baby', image: '/src/assets/images/categories/baby.png' },
  { name: 'Cat & Dog', image: '/src/assets/images/categories/pets.png' },
];

const SupermarketPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-10">
      <Header />
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Supermarket Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition"
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

