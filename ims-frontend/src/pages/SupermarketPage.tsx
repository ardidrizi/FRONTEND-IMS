import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import '../styles/supermarket.css';

const categories = [
  { name: 'Discounts', image: '/assets/categories/discounts.png' },
  { name: 'Fruits', image: '/assets/categories/fruits.png' },
  { name: 'Vegetables', image: '/assets/categories/vegetables.png' },
  { name: 'Dairy & Eggs', image: '/assets/categories/dairy.png' },
  { name: 'Meat & Fish', image: '/assets/categories/meat.png' },
  { name: 'Oil, Vinegar & Condiments', image: '/assets/categories/oil.png' },
  { name: 'Legumes, Pasta & Misc.', image: '/assets/categories/legumes.png' },
  { name: 'Coffee, Cereals & Sweets', image: '/assets/categories/coffee.png' },
  { name: 'Fresh & Ready', image: '/assets/categories/fresh.png' },
  { name: 'Aufschnitt & Brotaufstriche', image: '/assets/categories/coldcuts.png' },
  { name: 'Bakery', image: '/assets/categories/bakery.png' },
  { name: 'Frozen Foods', image: '/assets/categories/frozen.png' },
  { name: 'Snacks', image: '/assets/categories/snacks.png' },
  { name: 'Water & Beverages', image: '/assets/categories/beverages.png' },
  { name: 'Alcohol', image: '/assets/categories/alcohol.png' },
  { name: 'Wine & Beer', image: '/assets/categories/winebeer.png' },
  { name: 'Cleaning Supplies', image: '/assets/categories/cleaning.png' },
  { name: 'Health & Beauty', image: '/assets/categories/health.png' },
  { name: 'Baby', image: '/assets/categories/baby.png' },
  { name: 'Cat & Dog', image: '/assets/categories/pets.png' },
];

const SupermarketPage: React.FC = () => (
  <div className="supermarket-page bg-white w-screen min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow py-8 px-4 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
            onClick={() => console.log(`Navigating to ${category.name}`)}
          />
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default SupermarketPage;
