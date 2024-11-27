import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="pt-16 bg-accent min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
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
