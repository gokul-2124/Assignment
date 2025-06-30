import React from 'react';
import { FaUserCircle, FaBell, FaDownload } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Navbar() {
  return (
    <div className="bg-[#121212] px-6 py-3 flex justify-between items-center border-b border-gray-700 text-sm">
      

      <div className="flex items-center space-x-6">
        <div className="flex items-center text-white font-semibold text-lg">
          <span className="text-green-500 text-2xl font-bold">G</span>
          <span className="ml-1">roww</span>
          <span className="text-gray-400 ml-1 text-xs">PARK</span>
        </div>

        <div className="flex items-center space-x-4 text-gray-300">
          <div className="flex items-center hover:text-white cursor-pointer">
            Trade <MdKeyboardArrowDown className="ml-1" />
          </div>
          <div className="hover:text-white cursor-pointer">Markets</div>
          <div className="hover:text-white cursor-pointer">Earn</div>
          <div className="flex items-center hover:text-white cursor-pointer">
            Blog <MdKeyboardArrowDown className="ml-1" />
          </div>
          <div className="hover:text-white cursor-pointer">Invite & Earn</div>
          <div className="hover:text-white cursor-pointer">Reward Hub</div>
          <div className="hover:text-white cursor-pointer">List your crypto</div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-green-500 hover:bg-green-600 px-4 py-1.5 rounded text-white font-medium text-sm">
          Deposit
        </button>
        <span className="text-gray-300 hover:text-white cursor-pointer">
          Assets
        </span>
        <FaUserCircle className="text-gray-300 hover:text-white text-lg cursor-pointer" />
        <FaBell className="text-gray-300 hover:text-white text-lg cursor-pointer" />
        <FaDownload className="text-gray-300 hover:text-white text-lg cursor-pointer" />
      </div>
    </div>
  );
}
