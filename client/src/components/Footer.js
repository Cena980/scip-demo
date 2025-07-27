import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border border-blue-600 p-10 text-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Contact Section */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Co-Founder</h3>
              <p>Monica@SCIPDreams.org</p>
              <p>(646) 753-0422</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">CEO</h3>
              <p>Miguel@SCIPDreams.org</p>
              <p>(646) 236-4289</p>
            </div>
          </div>

          {/* middle Section */}
          <div className="md:w-1/3">
            <div className="mb-12">
              <h3 className="font-semibold text-lg mb-6">Address</h3>
              <p>409 Newburgh Court,</p>
              <p>West New York, NJ 07093</p>
            </div>
            <div className="mb-6 flex gap-4 items-center">
              <a href="https://instagram.com/scip" target="_blank" rel="noopener noreferrer">
                <img src="icons/instagram.png" alt="Instagram" className="h-6 w-6 hover:scale-105 transition-transform delay-200" />
              </a>
              <a href="https://facebook.com/scip" target="_blank" rel="noopener noreferrer">
                <img src="icons/facebook.png" alt="Facebook" className="h-6 w-6 hover:scale-105 transition-transform delay-200" />
              </a>
              <a href="https://twitter.com/scip" target="_blank" rel="noopener noreferrer">
                <img src="icons/x.png" alt="Twitter/X" className="h-6 w-6 hover:scale-105 transition-transform delay-200" />
              </a>
              <a href="https://youtube.com/scip" target="_blank" rel="noopener noreferrer">
                <img src="icons/youtube.png" alt="YouTube" className="h-6 w-6 hover:scale-105 transition-transform delay-200" />
              </a>
              <a href="https://tiktok.com/scip" target="_blank" rel="noopener noreferrer">
                <img src="icons/tiktok.png" alt="TikTok" className="h-6 w-6 hover:scale-105 transition-transform delay-200" />
              </a>
            </div>
          </div>


          {/* Quick Navigation Section */}
          <div className="md:w-1/3">
            <h3 className="font-bold text-xl mb-6">Quick Navigation</h3>
            <div className="grid grid-cols-3 gap-4 text-base font-normal">
              <ul className="space-y-2">
                <li>Home</li>
                <li>About SCIP</li>
                <li>FAQS</li>
                <li>Contact Us</li>
              </ul>
              <ul className="space-y-2">
                <li>High School Students</li>
                <li>College/ Post-Grad</li>
                <li>Alumni</li>
                <li>Events</li>
              </ul>
              <ul className="space-y-2">
                <li>Media</li>
                <li>Shop</li>
                <li>Donations</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <p className="text-sm">
          The Selective Corporate Internship Program is a 501 (c) (3) non-profit, tax exempt organization.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
