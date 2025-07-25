import React from 'react';
import hero from '../images/hero1.png';

const HeroSection = () => {
  return (
    <section className="relative bg-[#e0f4ff] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center sm:items-center relative z-10 px-6">
        {/* Left: Text Section */}
        <div className="lg:w-1/2 z-20">
          <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-[#2b4162] mb-4">
            Introducing a Brilliant <br />
            <span className="tracking-widest">I n v e s t m e n t :</span>
          </h1>
          <p className="text-center text-3xl font-extrabold text-[#2b4162] mb-6">
            Young Global Leaders <br />
            Owning Their Power
          </p>

          {/* Buttons */}
          <div className="justify-center flex flex-wrap gap-4 mx-3">
            <button className=" transition-colors bg-[#005b82] hover:bg-[#004466] text-white font-bold my-2 px-6 py-3 rounded-full shadow">
              Apply
            </button>
            <button className=" transition-colors bg-scipred hover:bg-[#851b45] text-white font-bold my-2 px-6 py-3 rounded-full shadow">
              Partner With Us
            </button>
            <button className=" transition-colors bg-[#005b82] hover:bg-[#004466] text-white font-bold my-2 px-6 py-3 rounded-full shadow">
              Donate
            </button>
          </div>
        </div>
        {/* Right: Image Section */}
        <div className="w-full md:w-1/2 relative z-10 flex justify-center items-center overflow-hidden rounded-lg min-h-[300px]">
          <img
            src={hero}
            alt="Smiling young professionals"
            className="absolute top-1/2 left-1/2 w-auto h-full max-w-full object-cover object-center transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>



      </div>

    </section>
  );
};

export default HeroSection;
