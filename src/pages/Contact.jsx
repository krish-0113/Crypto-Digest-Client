import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle the form submission
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div 
      className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8"
      style={{ 
        background: "linear-gradient(to right, #0a1629, #0f2543)",
        backgroundImage: "url('data:image/svg+xml,%3Csvg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='smallGrid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(0, 150, 200, 0.05)' stroke-width='0.5'/%3E%3C/pattern%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect width='100' height='100' fill='url(%23smallGrid)'/%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(0, 150, 200, 0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%' height='100%' fill='url(%23grid)' /%3E%3C/svg%3E')",
        backgroundSize: "cover",
        position: "relative"
      }}
    >
      <motion.div 
        className="max-w-screen-xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Contact <span className="text-[#0cb3e8]">Us</span>
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-[#0cb3e8] mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto" variants={itemVariants}>
            Have questions about our services? Reach out and our team will get back to you shortly.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-[#1a2638] rounded-xl p-8 shadow-lg"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <motion.div 
                  className="bg-[#0cb3e8] bg-opacity-20 border border-[#0cb3e8] rounded-lg p-4 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-[#0cb3e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg font-medium">Message sent successfully!</p>
                  <p className="text-gray-300 mt-1">We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-[#0f1a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0cb3e8] text-white"
                        required
                      />
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-[#0f1a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0cb3e8] text-white"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div className="mb-6" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#0f1a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0cb3e8] text-white"
                      required
                    />
                  </motion.div>
                  
                  <motion.div className="mb-6" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#0f1a2a] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0cb3e8] text-white"
                      required
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-[#0896c9] to-[#0779a8] hover:from-[#0aa3d9] hover:to-[#0887bb] text-white px-8 py-3 rounded-lg font-medium shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="bg-[#1a2638] rounded-xl p-8 shadow-lg h-full">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#0896c9] rounded-full p-2 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0cb3e8]">Email</h3>
                    <p className="text-gray-300">contact@cryptodigest.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#0896c9] rounded-full p-2 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0cb3e8]">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#0896c9] rounded-full p-2 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0cb3e8]">Location</h3>
                    <p className="text-gray-300">123 Blockchain Avenue<br />San Francisco, CA 94103</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-4">Connect with Us</h3>
                <div className="flex space-x-4">
                  {["twitter", "facebook", "linkedin", "github"].map((social, index) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="bg-[#0f1a2a] hover:bg-[#0779a8] p-3 rounded-full"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;