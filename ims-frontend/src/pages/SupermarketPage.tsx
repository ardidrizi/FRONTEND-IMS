import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import '../styles/supermarket.css';

const categories = [
  { name: 'Discounts', image: '/assets/images/categories/discounts.png' },
  { name: 'Fruits', image: '/src/assets/images/categories/fruits.png' },
  { name: 'Vegetables', image: '/assets/images/categories/vegetables.png' },
  { name: 'Dairy & Eggs', image: '/assets/images/categories/dairy.png' },
  { name: 'Meat & Fish', image: '/assets/images/categories/meat.png' },
  { name: 'Oil, Vinegar & Condiments', image: '/assets/images/categories/oil.png' },
  { name: 'Legumes, Pasta & Misc.', image: '/assets/images/categories/legumes.png' },
  { name: 'Coffee, Cereals & Sweets', image: '/assets/images/categories/coffee.png' },
  { name: 'Fresh & Ready', image: '/assets/images/categories/fresh.png' },
  { name: 'Aufschnitt & Brotaufstriche', image: '/assets/images/categories/coldcuts.png' },
  { name: 'Bakery', image: '/assets/images/categories/bakery.png' },
  { name: 'Frozen Foods', image: '/assets/images/categories/frozen.png' },
  { name: 'Snacks', image: '/assets/images/categories/snacks.png' },
  { name: 'Water & Beverages', image: '/assets/images/categories/beverages.png' },
  { name: 'Alcohol', image: '/assets/images/categories/alcohol.png' },
  { name: 'Wine & Beer', image: '/assets/images/categories/winebeer.png' },
  { name: 'Cleaning Supplies', image: '/assets/images/categories/cleaning.png' },
  { name: 'Health & Beauty', image: '/assets/images/categories/health.png' },
  { name: 'Baby', image: '/assets/images/categories/baby.png' },
  { name: 'Cat & Dog', image: '/assets/images/categories/pets.png' },
];

const SupermarketPage: React.FC = () => (
    <div className="supermarket-page bg-white w-screen min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 px-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-screen-lg mx-auto">
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
