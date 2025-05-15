import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Currency from "./pages/Currency";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import bg from "./assets/bg.jpg";
import bg2 from "./assets/bg-2.png";

function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `
          radial-gradient(circle at left top, rgb(35 68 146) 0%, rgb(1 6 19) 100%),
          url(${bg2}),
          url(${bg})
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
