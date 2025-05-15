import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo1.jpg";

const links = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Currency", link: "/currency" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Animation variants for navbar links
  const linkVariants = {
    hover: {
      color: "#22d3ee", // cyan-400
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <nav className="w-full px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-2">
           <motion.img 
  src={logo} 
  alt="Crypto Digest" 
  className="w-10 h-10 rounded-full border-4 border-white"
  whileHover={{ rotate: 10, scale: 1.1 }}
  transition={{ duration: 0.2 }}
/>

            <span className="text-white font-light text-xl">Crypto <br/> Digest</span>
          </Link>
        </motion.div>

        {/* Menu toggle (mobile) */}
        <motion.button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white lg:hidden"
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>

        {/* Links */}
        <motion.div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center absolute lg:static top-16 left-0 right-0 bg-gray-900 lg:bg-transparent px-4 py-6 lg:p-0 lg:space-x-8 transition-all`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {links.map(({ name, link }) => (
            <motion.div key={name} whileHover="hover" variants={linkVariants}>
              <Link
                to={link}
                onClick={() => {
                  setIsOpen(false);
                  setActiveLink(name);
                }}
                className={`text-white text-lg hover:text-cyan-400 py-2 relative ${
                  activeLink === name ? "text-cyan-400" : ""
                }`}
              >
                {name}
                {activeLink === name && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-cyan-400 w-full"
                    layoutId="underline"
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/login"
              className="bg-[#077EB3] text-white px-4 py-2 rounded-lg font-medium mt-2 lg:mt-0 inline-block"
            >
              Login
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;