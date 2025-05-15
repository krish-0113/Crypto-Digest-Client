import React from "react";
import { motion } from "framer-motion";

const NewsCard = ({ img, description }) => {
  return (
    <motion.div
      className="w-full sm:w-4/5 md:w-[350px] bg-[#1F2937] rounded-xl shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="relative w-full  h-[160px]"
        whileHover={{ 
          scale: 1.03,
          transition: { duration: 0.2 }
        }}
      >
        <img
          src={img}
          alt="News"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </motion.div>
      <div className="p-4">
        <motion.h3 
          className="text-xl md:text-2xl font-semibold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Another Unexpected Loss for Tesla Company
        </motion.h3>
        
        <motion.p 
          className="text-sm md:text-base text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default NewsCard;
