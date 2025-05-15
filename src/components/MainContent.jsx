import React from "react";
import main from "../assets/main.png";

const MainContent = () => {
  return (
    <section className="text-white px-4 py-16 md:py-24 bg-gradient-to-br from-[#0f172a] via-[#1e4c79] to-[#020617]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mb-6">
  Stay Ahead in <span className="text-[#3bbdfb] drop-shadow">Crypto</span> with AI‑Powered Insights
</h1>



          <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto md:mx-0 mb-8">
            Get unbiased, personalized news on how global events impact your
            favorite cryptocurrencies.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-gradient-to-r from-[#3bbdfb] to-[#2563eb] hover:brightness-110 transition-all px-6 py-3 rounded-full font-semibold shadow-lg text-white text-base">
              Get Started
            </button>
          </div>
        </div>


        {/* Right Card */}
        <div className="w-full sm:w-4/5 md:w-[400px] bg-[#1e293b] rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative w-full pb-[56.25%]">
            <img
              src={main}
              alt="Tesla News"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
              Another Unexpected Loss for Tesla Company
            </h3>
            <p className="text-sm text-gray-400">
              Tesla's shares fell 30% this year, attributed in part to protests
              and vandalism targeting its dealerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
