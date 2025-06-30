import React from "react";

const mockOrders = [
  {
    id: 1,
    date: "2025-06-30",
    pair: "BTC/USDT",
    price: "67000.00",
    side: "Buy",
    type: "Limit",
    amount: "0.5"
  },
  {
    id: 2,
    date: "2025-06-30",
    pair: "ETH/USDT",
    price: "3500.00",
    side: "Sell",
    type: "Market",
    amount: "1.2"
    },
  {
    id: 3,
    date: "2025-06-30",
    pair: "ETH/USDT",
    price: "3500.00",
    side: "Sell",
    type: "Market",
    amount: "1.2"
  },{
    id: 4,
    date: "2025-06-30",
    pair: "ETH/USDT",
    price: "3500.00",
    side: "Sell",
    type: "Market",
    amount: "1.2"
  },{
    id: 5,
    date: "2025-06-30",
    pair: "ETH/USDT",
    price: "2500.00",
    side: "Buy",
    type: "Market",
    amount: "1.2"
  },{
    id: 6,
    date: "2025-06-30",
    pair: "ETH/USDT",
    price: "3570.00",
    side: "Sell",
    type: "Market",
    amount: "1.2"
  },{
    id: 7,
    date: "2025-06-30",
    pair: "ETH/USDT",
    price: "3000.00",
    side: "Buy",
    type: "Market",
    amount: "1.2"
  }
];

const OpenOrderTable = () => {
  return (
    <div className="bg-[#121212] p-4 rounded-xl text-white mt-4 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-2">Open Orders</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="py-2">Date</th>
            <th>Pair</th>
            <th>Price</th>
            <th>Side</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mockOrders.map(order => (
            <tr key={order.id} className="text-center border-b border-gray-700">
              <td className="py-2">{order.date}</td>
              <td>{order.pair}</td>
              <td>{order.price}</td>
              <td className={order.side === "Buy" ? "text-green-500" : "text-red-500"}>{order.side}</td>
              <td>{order.type}</td>
              <td>{order.amount}</td>
              <td>
                <button className="text-red-400 hover:underline">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OpenOrderTable;
