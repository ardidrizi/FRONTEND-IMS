import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Order {
  id: number;
  customerName: string;
  orderDate: string;
  status: string;
  totalAmount: number;
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    axios
      .get<Order[]>('http://localhost:3000/orders')
      .then((response) => setOrders(response.data))
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="pt-16 bg-accent min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-8">Orders</h1>
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-700">Order ID</th>
              <th className="px-4 py-2 text-left text-gray-700">Customer Name</th>
              <th className="px-4 py-2 text-left text-gray-700">Order Date</th>
              <th className="px-4 py-2 text-left text-gray-700">Status</th>
              <th className="px-4 py-2 text-left text-gray-700">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-100 transition">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customerName}</td>
                <td className="px-4 py-2">{new Date(order.orderDate).toLocaleDateString()}</td>
                <td className="px-4 py-2">{order.status}</td>
                <td className="px-4 py-2">${order.totalAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
