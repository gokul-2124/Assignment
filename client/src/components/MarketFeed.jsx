import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE} from '../api/api.js'
const MarketFeed = () => {
  const [activeTab, setActiveTab] = useState('market');
  const [marketTrades, setMarketTrades] = useState([]);
  const [myTrades, setMyTrades] = useState([]);

  useEffect(() => {
    const fetchMarketFeeds = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/market-feeds`);
        setMarketTrades(res.data);
      } catch (err) {
        console.error('Error fetching market feeds:', err.message);
      }
    };

    fetchMarketFeeds();
  }, []);

  return (
    <div className="bg-[#121212] rounded-xl p-4 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4 text-sm">
          <button
            onClick={() => setActiveTab('market')}
            className={`px-3 py-1 rounded-md font-medium ${
              activeTab === 'market'
                ? 'bg-[#2a2a2a] text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Market Trades
          </button>
          <button
            onClick={() => setActiveTab('my')}
            className={`px-3 py-1 rounded-md font-medium ${
              activeTab === 'my'
                ? 'bg-[#2a2a2a] text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            My Trades
          </button>
        </div>
        <span className="text-gray-400 text-xs">Time / Price / Amount</span>
      </div>

      <div className="h-64 overflow-y-auto space-y-2 text-sm">
        {(activeTab === 'market' ? marketTrades : myTrades).map((trade, index) => (
          <div
            key={index}
            className="flex justify-between text-gray-300 hover:bg-[#2a2a2a] px-2 py-1 rounded"
          >
            <span className="text-xs">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span className={`font-semibold ${parseFloat(trade.change) > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {trade.price || '0.00'}
            </span>
            <span>{trade.volume || '0.00'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketFeed;
