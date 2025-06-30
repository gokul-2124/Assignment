import React from "react";

const mockData = [
  { pair: "1000SATS / USDT", price: "0.0002742", change: "+7.18%", positive: true },
  { pair: "1000SATS / USDT", price: "0.0002742", change: "+7.18%", positive: true },
  { pair: "1000SATS / USDT", price: "0.0002742", change: "+7.18%", positive: true },
  { pair: "1000SATS / USDT", price: "0.0002742", change: "+7.18%", positive: true },
  { pair: "1000SATS / USDT", price: "0.0002742", change: "+7.18%", positive: true },
  { pair: "1000SATS / USDT", price: "0.0002742", change: "+7.18%", positive: true },
];

const tabs = ["USDT", "FDUSD", "USDC", "TUSD", "BNB", "BTC"];

const TokenChangeList = () => {
  return (
    <div className="bg-[#121212] p-4 text-white rounded-md border-b border-[#282828]">

      <div className="mb-3">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#2a2a2a] text-sm text-white px-3 py-2 rounded-md outline-none"
        />
      </div>

      <div className="flex gap-3 mb-3 text-sm overflow-x-auto">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`px-2 py-1 ${
              tab === "USDT"
                ? "text-white border-b-2 border-[#00C896] font-semibold"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="text-xs font-medium">
        {mockData.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between py-1 border-b border-[#282828] text-sm"
          >
            <div className="flex gap-1 items-center">
              <span>⭐</span>
              <span>{item.pair}</span>
            </div>
            <div className={`text-right ${item.positive ? "text-green-400" : "text-red-400"}`}>
              <p>{item.price}</p>
              <p>{item.change}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenChangeList;
