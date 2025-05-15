import React from "react";
import { motion } from "framer-motion";

function Currency() {
  return (
    <motion.div
      className="text-white p-10 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-4">Cryptocurrency Overview</h1>
      <p className="text-lg mb-6 text-gray-300">
        Cryptocurrencies are decentralized digital assets that use blockchain technology
        to record transactions. The most popular cryptocurrencies include Bitcoin (BTC), Ethereum (ETH),
        and Binance Coin (BNB).
      </p>

      <ul className="list-disc ml-6 text-gray-400 space-y-2">
        <li>🔹 Bitcoin is the first and most widely used cryptocurrency.</li>
        <li>🔹 Ethereum enables smart contracts and decentralized apps.</li>
        <li>🔹 Altcoins offer a variety of use cases and technologies.</li>
      </ul>
    </motion.div>
  );
}

export default Currency;










