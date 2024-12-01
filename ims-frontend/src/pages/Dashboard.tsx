import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin'; // Asegúrate de importar correctamente

const Dashboard: React.FC = () => {
  const isLoggedIn = true; // O puedes obtenerlo de tu estado global/contexto
  const toggleAuth = () => {
    console.log('Logoff clicked'); // Implementa la lógica de cierre de sesión
  };

  return (
    <div className="bg-accent min-h-screen">
      {/* Navbar */}
      <NavbarAdmin isLoggedIn={isLoggedIn} toggleAuth={toggleAuth} />

      {/* Dashboard Content */}
      <div className="pt-16 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Welcome to IMS Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-primary">Products</h2>
            <p className="mt-2 text-gray-600">Track your inventory easily.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-primary">Suppliers</h2>
            <p className="mt-2 text-gray-600">Manage your suppliers here.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-primary">Reports</h2>
            <p className="mt-2 text-gray-600">Analyze your data effectively.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


