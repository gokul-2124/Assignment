import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {API_BASE} from '../api/api.js'

export default function OrderBook() {
  
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/order-book`);
        setOrders(res.data);
      } catch (error) {
        console.error('Error fetching order book:', error.message);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="bg-[#121212] p-2 text-xs text-white rounded">
      <div className="text-gray-400 mb-2">Order Book</div>
      <div className="text-gray-400 mb-2 flex justify-around">
        <span>Price</span>
        <span>Amount</span>
        <span>Total</span>
      </div>

      {orders.map((order, i) => (
        <div
          key={i}
          className={`flex justify-around py-0.5 ${
            order.type === 'buy' ? 'text-green-400' : 'text-red-400'
          }`}
        >
          <span>{Number(order.price).toFixed(2)}</span>
          <span className="text-white">{Number(order.amount).toFixed(4)}</span>
          <span className="text-white">{Number(order.total).toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}
