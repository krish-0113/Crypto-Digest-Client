import React from "react";
import { motion } from "framer-motion";
import NewsCard from "./NewsCard";
import main from "../assets/main.png";

const Hero = () => {
  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.4,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="text-white px-4 py-10 md:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text with Animations */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.2 
              }
            }
          }}
        >
<motion.h1
  className="font-lexend font-bold text-[65px] leading-[100%] mb-2 tracking-[-1.5px]"
  variants={textVariants}
>
  Stay Ahead in <span className="text-cyan-400">Crypto</span>
</motion.h1>

<motion.h2
  className=" font-lexend text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4"
  variants={textVariants}
>
  with AI‑Powered Insights
</motion.h2>


<motion.p
  className="text-white text-[20px] leading-[28px] font-normal max-w-[706px] mx-auto md:mx-0 mb-6"
  variants={textVariants}
>
  Get unbiased, personalized news on how global events impact your favorite cryptocurrencies.
</motion.p>


          
          <motion.div 
            className="flex justify-center md:justify-start"
            variants={textVariants}
          >
            <motion.button 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-3 rounded-full font-semibold shadow-md"
              variants={buttonVariants}
              whileHover="hover"
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Right Card with Animation */}
       
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
      <NewsCard 
  img={main} 
  description={
    <>
      Tesla's shares fell 30% this year, attributed <br />
       in part to protests and vandalism <br />
       targeting its dealerships.
    </>
  }
/>


        </motion.div>
      </div>
    </section>
  );
};

export default Hero;