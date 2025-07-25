import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import demo from '../images/hero1.png'

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* Our Mission */}
        <div className="z-20 py-10 bg-scipred px-30">
          <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Our Mission <br />
          </h1>
          <p className="text-center text-20px font-medium  text-white mb-6 px-24">
            To "Enlighten, Employ, and Empower" diverse and highly focused students for successful careers. 
            We do this by guiding interns to developing their entrepreneurial mindsets and communicative skills 
            through corporate mentorship, leadership development, and hands-on collaborative team projects.
          </p>

          {/* Button */}
          <div className="justify-center flex flex-wrap gap-4">
            <button className=" transition-colors bg-[#005b82] hover:bg-[#004466] text-white font-bold my-2 px-6 py-3 rounded-full shadow">
              Learn More ...
            </button>
          </div>
        </div>
        {/* Why SCIP Section */}
        <section className="z-20 py-16 bg-scipblue px-6 md:px-12">
          <h2 className="text-center text-4xl font-extrabold text-white mb-12">
            Why SCIP?
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {[
              "The Selective Corporate Internship Program (SCIP) is a national award-winning 501 (c)(3) non-profit organization that corporate partners attend to recruit prospective employees.",
              "SCIP equips young leaders with real-world experience, mentoring, and access to a national network of professionals.",
              "SCIP bridges the gap between academic learning and career readiness with impactful internships and training.",
              "Our alumni have gone on to work at Fortune 500 companies, lead social ventures, and contribute to innovation across industries.",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 rounded-2xl p-8 text-white shadow-lg backdrop-blur-md hover:scale-[1.02] transition-transform duration-300"
              >
                <p className="text-lg font-medium leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Who We Look For */}
        <section className="relative bg-[#e0f4ff] py-20 overflow-hidden">    
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center sm:items-center relative z-10 px-6">
            {/* LEft: Image Section */}
            <div className="w-full md:w-1/2 relative z-10 flex justify-center items-center overflow-hidden rounded-lg min-h-[300px]">
              <img
                src={demo}
                alt="Who We look For?"
                className="absolute top-1/2 left-1/2 w-auto h-full max-w-full object-cover object-center transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            {/* Right: Text Section */}
            <div className="lg:w-1/2 z-20">
              <h1 className="text-center mx-3 text-3xl sm:text-4xl font-extrabold text-[#2b4162] mb-4">
                Who We Look For?
              </h1>
              <p className="p-30 text-center font-medium text-[#2b4162] mb-6">
                SCIP is seeking multicultural, highly driven students to achieve successful careers by developing their entrepreneurial mindsets and communicative skills through corporate mentorship, leadership development, and hands-on collaborative team projects. 
              </p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Home;