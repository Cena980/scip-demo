import React from 'react';
import hero from '../images/hero1.png';

const HeroSection = () => {
  return (
    <section className="relative bg-[#e0f4ff] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start relative z-10 px-6">
        {/* Left: Text Section */}
        <div className="md:w-1/2 z-20">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2b4162] mb-4">
            Introducing a Brilliant <br />
            <span className="tracking-widest">I n v e s t m e n t :</span>
          </h1>
          <p className="text-3xl font-extrabold text-[#2b4162] mb-6">
            Young Global Leaders <br />
            Owning Their Power
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#005b82] hover:bg-[#004466] text-white font-bold px-6 py-3 rounded-full shadow">
              Apply
            </button>
            <button className="bg-[#005b82] hover:bg-[#004466] text-white font-bold px-6 py-3 rounded-full shadow">
              Partner with Us
            </button>
            <button className="bg-[#005b82] hover:bg-[#004466] text-white font-bold px-6 py-3 rounded-full shadow">
              Donate
            </button>
          </div>
        </div>
        {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e0f4ff] via-[#e0f4ff] to-transparent z-0" />
        {/* Right: Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative z-10 flex justify-center">
          <img
            src={hero}
            alt="Smiling young professionals"
            className=" shadow-lg rounded-lg h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
