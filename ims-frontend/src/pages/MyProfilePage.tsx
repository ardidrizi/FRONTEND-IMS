import React from 'react';
import { usePurchase } from '../context/PurchaseContext';

const MyProfilePage: React.FC = () => {
  const { purchases } = usePurchase();

  // Datos ficticios del perfil
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinedDate: 'January 15, 2023',
  };

  return (
    <div
      className="min-h-screen px-8 py-10"
      style={{
        backgroundImage: `url(/public/images/fastlogo.png)`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // Efecto Parallax
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Contenedor principal con animación de entrada */}
      <div
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-20 animate-fade-in"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.4)', // Fondo blanco con transparencia
        }}
      >
        {/* Sección del perfil */}
        <div className="flex items-center border-b pb-6" style={{ borderColor: '#199aaf' }}>
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl"
            style={{
              backgroundColor: '#199aaf', // Fondo del círculo
              color: '#3ed7d7', // Color de la inicial
            }}
          >
            {userProfile.name.charAt(0)}
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold" style={{ color: '#199aaf' }}>
              {userProfile.name}
            </h1>
            <p className="text-gray-600">{userProfile.email}</p>
            <p className="text-sm" style={{ color: '#199aaf' }}>
              Joined on {userProfile.joinedDate}
            </p>
          </div>
        </div>

        {/* Historial de compras */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#199aaf' }}>
            Purchase History
          </h2>
          {purchases.length === 0 ? (
            <p className="text-gray-600">You have no purchases yet.</p>
          ) : (
            <div className="space-y-6">
              {purchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="border rounded-lg p-4 shadow-sm"
                  style={{
                    backgroundColor: 'rgba(205, 237, 254, 0.6)', // Fondo azul clarito más claro
                    borderColor: '#199aaf', // Bordes más visibles
                  }}
                >
                  <p className="text-lg font-semibold" style={{ color: '#199aaf' }}>
                    <strong>Date:</strong> {purchase.date}
                  </p>
                  <p className="text-lg font-semibold" style={{ color: '#199aaf' }}>
                    <strong>Total:</strong> {purchase.total.toFixed(2)}€
                  </p>
                  <h3 className="text-md font-bold mt-4" style={{ color: '#3ed7d7' }}>
                    Items:
                  </h3>
                  <ul className="list-disc list-inside">
                    {purchase.items.map((item) => (
                      <li key={item.id} style={{ color: '#199aaf' }}>
                        <strong>{item.title}</strong> - {item.quantity} x {item.price.toFixed(2)}€
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Animación de entrada */}
      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default MyProfilePage;
