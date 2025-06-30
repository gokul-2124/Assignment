import React from "react";

const PairHeader = () => {
  return (
    <div className="bg-[#121212] text-white p-4 flex justify-around items-center text-sm border-b border-[#282828]">

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-lg font-semibold">
          <span>⭐</span>
          <span>BTC/USDT</span>
        </div>
        <div className="text-[#FF5C5C] text-lg font-semibold">67,012.00</div>
        <div className="text-xs text-gray-400">$67,012</div>
      </div>

      <div className="flex flex-col items-start text-xs text-green-400">
        <div className="flex gap-2">
          <span>POW</span>
          <span>|</span>
          <span>VOL &gt;</span>
        </div>
      </div>

      <div className="flex flex-col items-start text-xs">
        <span className="text-gray-400">24h Change</span>
        <span className="text-[#FF5C5C]">-334.02 -0.50%</span>
      </div>

      <div className="flex flex-col items-start text-xs">
        <span className="text-gray-400">24h High</span>
        <span className="text-white">65,777.00</span>
      </div>

      <div className="flex flex-col items-start text-xs">
        <span className="text-gray-400">24h Low</span>
        <span className="text-white">68,474.55</span>
      </div>

      <div className="flex flex-col items-start text-xs">
        <span className="text-gray-400">24h Volume (BTC)</span>
        <span className="text-white">27,306.67</span>
      </div>

      <div className="flex flex-col items-start text-xs">
        <span className="text-gray-400">24h Volume (USDT)</span>
        <span className="text-white">1,839,020,199.75</span>
      </div>
    </div>
  );
};

export default PairHeader;
