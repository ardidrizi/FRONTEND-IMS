// src/components/Header/Header.tsx

const Header: React.FC = () => (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Supermarket</h1>
        <nav>
          <button className="text-cyan-600 hover:text-cyan-800 transition">
            Cart
          </button>
        </nav>
      </div>
    </header>
  );
  
  export default Header;
  