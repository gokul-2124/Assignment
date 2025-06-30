import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from '../api/api.js'

const TradeForm = () => {
  const [buyPrice, setBuyPrice] = useState("66871.99");
  const [buyAmount, setBuyAmount] = useState("0.001");
  const [buyRange, setBuyRange] = useState(0);

  const [sellPrice, setSellPrice] = useState("66871.99");
  const [sellAmount, setSellAmount] = useState("0.001");
  const [sellRange, setSellRange] = useState(0);

  const calculateTotal = (price, amount) =>
    (parseFloat(price) * parseFloat(amount)).toFixed(2);

  const handleOrder = async (type, price, amount) => {
    try {
      const total = parseFloat(price) * parseFloat(amount);
      await axios.post(`${API_BASE}/api/order-book`, {
        price: parseFloat(price),
        amount: parseFloat(amount),
        total,
        type,
      });
      alert(`${type.toUpperCase()} order placed successfully!`);
    } catch (err) {
      console.error("Order failed:", err);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="bg-[#1F1F1F] text-white p-5 rounded-xl flex justify-between gap-6 w-full max-w-5xl mx-auto">
      
      <div className="flex flex-col gap-3 w-1/2">
        <div className="flex items-center gap-4 text-sm border-b border-[#282828] pb-2">
          <span className="text-green-500 font-semibold">Limit</span>
          <span>Market</span>
          <span className="flex items-center gap-1">Stop-limit <span className="text-xs">▼</span></span>
        </div>
        <span className="text-xs text-gray-400">Avbl - 0.000000 USDT</span>

        <div className="bg-[#2a2a2a] p-3 rounded-md flex justify-between items-center text-sm">
          <input
            className="bg-transparent outline-none w-full text-white"
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
            placeholder="Enter price"
          />
          <span className="text-[#6EE7B7]">USDT</span>
        </div>

        <div className="bg-[#2a2a2a] p-3 rounded-md flex justify-between items-center text-sm">
          <input
            className="bg-transparent outline-none w-full text-white"
            value={buyAmount}
            onChange={(e) => setBuyAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <span className="text-[#6EE7B7]">BTC</span>
        </div>

        <input
          type="range"
          className="w-full accent-green-500"
          value={buyRange}
          onChange={(e) => setBuyRange(e.target.value)}
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
        </div>

        <div className="bg-[#2a2a2a] px-3 py-2 rounded-md flex justify-between text-sm text-white">
          <span>Total</span>
          <span>{calculateTotal(buyPrice, buyAmount)}</span>
        </div>

        <div className="flex justify-between text-xs text-gray-400">
          <div>
            <p>Avbl</p>
            <p className="text-white">0.00000000 USDT</p>
          </div>
          <div className="text-right">
            <p>Max Buy</p>
            <p className="text-white">0.00000000 BTC</p>
          </div>
        </div>

        <button
          className="bg-green-600 hover:bg-green-700 transition text-black py-2 rounded-md font-semibold"
          onClick={() => handleOrder("buy", buyPrice, buyAmount)}
        >
          Buy
        </button>
      </div>

      <div className="flex flex-col gap-3 w-1/2">
        <div className="flex items-center gap-4 text-sm border-b border-[#282828] pb-2">
          <span className="text-green-500 font-semibold">Limit</span>
          <span>Market</span>
          <span className="flex items-center gap-1">Stop-limit <span className="text-xs">▼</span></span>
        </div>
        <span className="text-xs text-gray-400">Avbl - 0.000000 BTC</span>

        <div className="bg-[#2a2a2a] p-3 rounded-md flex justify-between items-center text-sm">
          <input
            className="bg-transparent outline-none w-full text-white"
            value={sellPrice}
            onChange={(e) => setSellPrice(e.target.value)}
            placeholder="Enter price"
          />
          <span className="text-[#6EE7B7]">USDT</span>
        </div>

        <div className="bg-[#2a2a2a] p-3 rounded-md flex justify-between items-center text-sm">
          <input
            className="bg-transparent outline-none w-full text-white"
            value={sellAmount}
            onChange={(e) => setSellAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <span className="text-[#6EE7B7]">BTC</span>
        </div>

        <input
          type="range"
          className="w-full accent-red-500"
          value={sellRange}
          onChange={(e) => setSellRange(e.target.value)}
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
        </div>

        <div className="bg-[#2a2a2a] px-3 py-2 rounded-md flex justify-between text-sm text-white">
          <span>Total</span>
          <span>{calculateTotal(sellPrice, sellAmount)}</span>
        </div>

        <div className="flex justify-between text-xs text-gray-400">
          <div>
            <p>Avbl</p>
            <p className="text-white">0.00000000 BTC</p>
          </div>
          <div className="text-right">
            <p>Max Sell</p>
            <p className="text-white">0.00000000 USDT</p>
          </div>
        </div>

        <button
          className="bg-red-600 hover:bg-red-700 transition text-black py-2 rounded-md font-semibold"
          onClick={() => handleOrder("sell", sellPrice, sellAmount)}
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default TradeForm;
