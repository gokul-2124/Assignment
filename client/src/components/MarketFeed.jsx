import React, { useState } from "react";

const trades = [
  { price: "12,358.47", amount: "0.26548", time: "20:55:36", positive: true },
  { price: "12,358.47", amount: "0.26548", time: "20:55:36", positive: false },
  { price: "12,358.47", amount: "0.26548", time: "20:55:36", positive: true },
  { price: "12,358.47", amount: "0.26548", time: "20:55:36", positive: false },
  { price: "12,358.47", amount: "0.26548", time: "20:55:36", positive: true },
  { price: "12,358.47", amount: "0.26548", time: "20:55:36", positive: false },
  { price: "12,358.47", amount: "0.26548", time: "20:55:36", positive: true },
  { price: "12,358.47", amount: "0.26548", time: "20:55:36", positive: false },
  { price: "12,358.47", amount: "0.26548", time: "20:55:36", positive: true },
  { price: "12,358.47", amount: "0.26548", time: "20:55:36", positive: true },
];

const MarketFeed = () => {
  const [activeTab, setActiveTab] = useState("market");

  return (
    <div className="bg-[#121212] p-4 text-white rounded-md text-sm">
      {/* Tabs */}
      <div className="flex items-center border-b border-[#282828] mb-2">
        <button
          className={`mr-4 pb-2 ${
            activeTab === "market"
              ? "text-white border-b-2 border-[#00C896] font-semibold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("market")}
        >
          Market Trades
        </button>
        <button
          className={`pb-2 ${
            activeTab === "my"
              ? "text-white border-b-2 border-[#00C896] font-semibold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("my")}
        >
          My Trades
        </button>
      </div>

      <div className="grid grid-cols-3 text-[#999] pb-1 text-xs border-b border-[#282828]">
        <div>Price (USDT)</div>
        <div className="text-center">Amount (BTC)</div>
        <div className="text-right">Time</div>
      </div>

      {activeTab === "market" &&
        trades.map((trade, idx) => (
          <div
            key={idx}
            className="grid grid-cols-3 py-1 border-b border-[#1a1a1a] text-sm"
          >
            <div className={`${trade.positive ? "text-green-400" : "text-red-400"}`}>
              {trade.price}
            </div>
            <div className="text-center">{trade.amount}</div>
            <div className="text-right">{trade.time}</div>
          </div>
        ))}

      {activeTab === "my" && (
        <div className="text-center text-gray-500 py-4">
          No recent trades yet.
        </div>
      )}
    </div>
  );
};

export default MarketFeed;
