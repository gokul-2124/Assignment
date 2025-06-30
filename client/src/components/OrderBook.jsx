import React from 'react';
export default function OrderBook() {
  const mockData = Array.from({ length: 45 }, (_, i) => ({
    price: 66700 + i * 5,
    amount: 0.26548,
    total: (66700 + i * 5) * 0.26548,
    type: i < 5 ? 'sell' : 'buy'
  }));

  return (
    <div className="bg-[#121212] p-2 text-xs text-white rounded">
          <div className="text-gray-400 mb-2">Order Book</div>
          <div className="text-gray-400 mb-2 flex justify-around">
              <span>Price</span>
              <span>Amount</span>
              <span>Total</span>
          </div>
      {mockData.map((order, i) => (
        <div key={i} className={`flex justify-around py-0.5 ${order.type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
          <span>{order.price.toFixed(2)}</span>
          <span className='text-white'>{order.amount}</span>
          <span className='text-white'>{order.total.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}