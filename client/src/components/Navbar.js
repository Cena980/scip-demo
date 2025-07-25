import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black py-4 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
        SCIP
          
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-20px font-display text-lg">
            <button className="flex items-center gap-1 hover:text-[#005b82]">
              Home
            </button>
          {['Get Involved', 'Careers', 'Events', 'About'].map((label) => (
            <button key={label} className="flex items-center gap-1 hover:text-[#005b82]">
              {label}
              <svg
                className="w-3 h-3 ml-1 fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.25 7.5L10 12.5L14.75 7.5H5.25Z" />
              </svg>
            </button>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-scipblue font-inter text-white py-1 hover:bg-[#1f415c] px-10 rounded-xl transition-colors">
            Shop
          </button>
          <button className="bg-scipred font-inter text-white py-1 px-10 hover:bg-[#851b45] rounded-xl transition-colors">
            Donate
          </button>
        </div>

        {/* Mobile Menu Toggle */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 'X' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (

        <div className="md:hidden px-6 pt-4 pb-6 space-y-4 bg-white shadow-inner border-t border-gray-200">
          <div className="flex flex-col space-y-2 font-bold text-lg">
            {['Home', 'Get Involved', 'Careers', 'Events', 'About'].map((label) => (
              <button key={label} className="text-left hover:text-[#005b82]">
                {label}
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-3 mt-4">
            <button className="bg-[#005b82] text-white font-bold py-2 rounded-full hover:bg-[#004466] transition">
              Shop
            </button>
            <button className="bg-[#9d2252] text-white font-bold py-2 rounded-full hover:bg-[#851b45] transition">
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
