import React, { useState } from "react";

const moversData = [
  { pair: "PHB/BTC", change: "-6.64%", time: "12:51:02", label: "New 24hr Low", direction: "down" },
  { pair: "CVX/USDT", change: "+6.64%", time: "12:51:02", label: "New 24hr High", direction: "up" },
  { pair: "PHB/BTC", change: "-6.64%", time: "12:51:02", label: "New 7day Low", direction: "down" },
  { pair: "PHB/BTC", change: "-6.64%", time: "12:51:02", label: "New 7day Low", direction: "down" },
  { pair: "PHB/BTC", change: "-6.64%", time: "12:51:02", label: "New 7day Low", direction: "down" },
    { pair: "CVX/USDT", change: "+6.64%", time: "12:51:02", label: "New 24hr High", direction: "up" },
  
    { pair: "CVX/USDT", change: "+6.64%", time: "12:51:02", label: "New 24hr High", direction: "up" },
  
    { pair: "CVX/USDT", change: "+6.64%", time: "12:51:02", label: "New 24hr High", direction: "up" },
  
    { pair: "CVX/USDT", change: "+6.64%", time: "12:51:02", label: "New 24hr High", direction: "up" },
  
  { pair: "CVX/USDT", change: "+6.64%", time: "12:51:02", label: "New 24hr High", direction: "up" },
];

const TopMovers = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredData = moversData.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "high") return item.label.includes("High");
    if (activeTab === "low") return item.label.includes("Low");
    return true;
  });

  return (
    <div className="bg-[#121212] p-4 rounded-md text-white text-sm">
      <div className="flex items-center justify-between border-b border-[#282828] pb-2 mb-2">
        <h2 className="font-semibold">Top Movers</h2>
        <div className="flex gap-3 text-xs text-gray-400">
          <button
            onClick={() => setActiveTab("all")}
            className={`${activeTab === "all" ? "text-[#00C896] border-b-2 border-[#00C896]" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("high")}
            className={`${activeTab === "high" ? "text-[#00C896] border-b-2 border-[#00C896]" : ""}`}
          >
            New High
          </button>
          <button
            onClick={() => setActiveTab("low")}
            className={`${activeTab === "low" ? "text-[#00C896] border-b-2 border-[#00C896]" : ""}`}
          >
            New Low
          </button>
        </div>
      </div>

      {filteredData.map((item, idx) => (
        <div key={idx} className="flex justify-between items-start py-2 border-b border-[#1a1a1a]">
          <div>
            <p className="font-semibold">{item.pair}</p>
            <p className="text-xs text-gray-400">{item.time}</p>
          </div>
          <div className="text-right">
            <p
              className={`text-sm font-semibold ${
                item.change.startsWith("+") ? "text-green-400" : "text-red-400"
              }`}
            >
              {item.change}
            </p>
            <div className="flex items-center justify-end gap-2 text-xs text-gray-300">
              <span>{item.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  item.direction === "up" ? "bg-[#00C896]" : "bg-[#FF5C5C]"
                }`}
              >
                {item.direction === "up" ? "⇡" : "⇣"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopMovers;
