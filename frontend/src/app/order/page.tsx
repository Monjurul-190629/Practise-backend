import React from 'react';

type OrderItem = {
  id: number;
  price: number;
};

const orders: OrderItem[] = [
  { id: 1, price: 19.99 },
  { id: 2, price: 29.99 },
  { id: 3, price: 9.99 },
  { id: 4, price: 49.99 },
  { id: 5, price: 15.99 },
  { id: 6, price: 24.99 },
  { id: 7, price: 39.99 },
  { id: 8, price: 12.99 },
];

const OrderPage: React.FC = () => {
  const handleOrder = (id: number): void => {
    alert(`Order placed for product ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Order Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl shadow p-5 text-center">
            <h2 className="text-xl font-semibold">Product #{order.id}</h2>
            <p className="text-gray-600 mb-4">${order.price.toFixed(2)}</p>
            <button
              onClick={() => handleOrder(order.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
