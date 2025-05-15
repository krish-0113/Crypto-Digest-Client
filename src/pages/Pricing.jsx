

import React from "react";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <motion.div
      className="text-white p-10 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-4">Crypto Pricing Details</h1>
      <p className="text-lg mb-6 text-gray-300">
        Cryptocurrency prices are highly volatile and fluctuate based on market supply and demand,
        investor sentiment, regulations, and technological developments.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">Bitcoin (BTC)</h2>
          <p className="text-green-400 text-xl">$67,000</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">Ethereum (ETH)</h2>
          <p className="text-green-400 text-xl">$3,200</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">Solana (SOL)</h2>
          <p className="text-green-400 text-xl">$145</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Pricing;
