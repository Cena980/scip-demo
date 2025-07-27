import React from 'react';
import HeroSection from '../components/HeroSection';
import demo from '../images/hero1.png'
import avatar from '../images/avatar.png';
import VideoSection from '../components/videoPlayer';
import InstagramSection from '../components/instagramSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* Our Mission */}
        <div className="z-20 py-10 bg-scipred px-30">
          <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Our Mission <br />
          </h1>
          <p className="text-justify text-center text-20px font-medium  text-white mb-6 px-24">
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
            <div className="md:w-1/2 z-20 m-5 py-5">
              <h1 className="text-center mx-3 text-3xl sm:text-4xl font-extrabold text-[#2b4162] mb-4">
                Who We Look For?
              </h1>
              <p className="text-justify px-30 text-center font-medium text-[#2b4162]">
                SCIP is seeking multicultural, highly driven students to achieve successful careers by developing their entrepreneurial mindsets and communicative skills through corporate mentorship, leadership development, and hands-on collaborative team projects. 
              </p>
            </div>
          </div>
        </section>
        {/* Our Impact */}
        <section className="relative bg-white py-20 overflow-hidden">    
          {/* Title */}
          <div className="z-20 m-5 py-5">
            <h1 className="text-center mx-3 text-3xl sm:text-4xl font-extrabold text-[#2b4162] mb-4">
              Our Impact
            </h1>
          </div>
          {/* Stats Section */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
              <div className="bg-opacity-10 rounded-2xl p-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-4xl text-center text-scipred font-bold">30,000+</h3>
                <h4 className="text-xl text-center text-black font-bold mb-2">Students Impacted</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl p-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-4xl text-center text-scipred font-bold">81%</h3>
                <h4 className="text-xl text-center text-black font-bold mb-2">Members are Minorities</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl p-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-4xl text-center text-scipred font-bold">92%</h3>
                <h4 className="text-xl text-center text-black font-bold mb-2">Attend their 1st-Choice College</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl p-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-4xl text-center text-scipred font-bold">80%</h3>
                <h4 className="text-xl text-center text-black font-bold mb-2">Pursue Corporate or entrepreneurial industries</h4>
              </div>
           </div> 
        </section>
        {/* Awards */}
        <section className="relative bg-scipred py-20 overflow-hidden">    
          {/* Title */}
          <div className="z-20 mt-5 py-5">
            <h1 className="text-center mx-3 text-3xl sm:text-4xl font-extrabold text-white">
              Awards
            </h1>
          </div>
          {/* x Section */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
               <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
           </div> 
        </section>
        {/* Out Corporate Partners */}
        <section className="relative bg-white py-20 overflow-hidden">    
          {/* Title */}
          <div className="z-20 mt-5 py-5">
            <h1 className="text-center mx-3 text-3xl sm:text-4xl font-extrabold text-black">
              Out Corporate Partners
            </h1>
          </div>
          {/* x Section */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 px-6">
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
               <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
                            <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
               <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
                            <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
               <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
                            <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
               <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
                            <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
              <div className="bg-opacity-10 rounded-2xl py-8 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
                <img className='w-20 border-gray-800 border rounded-full h-20 bg-scipblue mx-auto mb-4' src={avatar} alt="SCIP Logo" />
                <h3 className="text-4xl text-center text-scipblue font-bold">Title</h3>
                <h4 className="text-xl text-center text-black font-bold">Subtitle</h4>
              </div>
           </div> 
        </section>
        {/* Students feedback */}
        <section className="z-20 py-16 bg-scipblue px-6 md:px-12">
          <div className="z-20 m-5 py-5">
          {/* Title */}
          <h2 className="text-center text-4xl font-extrabold text-white">
            What Our Students Say About Us
          </h2>
          <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="relative bg-white bg-opacity-10 rounded-2xl p-8 text-white shadow-lg backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center mb-4">
                <img src={avatar} alt="Student Avatar" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-sm">SCIP Intern</p>
                </div>
              </div>
              <div className="text-lg font-medium leading-relaxed">
                "SCIP has been a transformative experience for me. The mentorship and hands-on projects have  
              </div>
            </div>
            <div className="relative bg-white bg-opacity-10 rounded-2xl p-8 text-white shadow-lg backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center mb-4">
                <img src={avatar} alt="Student Avatar" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-sm">SCIP Intern</p>
                </div>
              </div>
              <div className="text-lg font-medium leading-relaxed">
                "SCIP has been a transformative experience for me. The mentorship and hands-on projects have  
              </div>
            </div>
            <div className="relative bg-white bg-opacity-10 rounded-2xl p-8 text-white shadow-lg backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center mb-4">
                <img src={avatar} alt="Student Avatar" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-sm">SCIP Intern</p>
                </div>
              </div>
              <div className="text-lg font-medium leading-relaxed">
                "SCIP has been a transformative experience for me. The mentorship and hands-on projects have  
              </div>
            </div>
            <div className="relative bg-white bg-opacity-10 rounded-2xl p-8 text-white shadow-lg backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center mb-4">
                <img src={avatar} alt="Student Avatar" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-sm">SCIP Intern</p>
                </div>
              </div>
              <div className="text-lg font-medium leading-relaxed">
                "SCIP has been a transformative experience for me. The mentorship and hands-on projects have  
              </div>
            </div>
            <div className="relative bg-white bg-opacity-10 rounded-2xl p-8 text-white shadow-lg backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center mb-4">
                <img src={avatar} alt="Student Avatar" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-sm">SCIP Intern</p>
                </div>
              </div>
              <div className="text-lg font-medium leading-relaxed">
                "SCIP has been a transformative experience for me. The mentorship and hands-on projects have  
              </div>
            </div>
            <div className="relative bg-white bg-opacity-10 rounded-2xl p-8 text-white shadow-lg backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center mb-4">
                <img src={avatar} alt="Student Avatar" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-sm">SCIP Intern</p>
                </div>
              </div>
              <div className="text-lg font-medium leading-relaxed">
                "SCIP has been a transformative experience for me. The mentorship and hands-on projects have  
              </div>
            </div>
          </div>
        </section>
        {/* Video Section */}
        <VideoSection />

        {/* newletter */}
        <section className="relative bg-white py-20 overflow-hidden">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center sm:items-center relative z-10 px-6">
                {/* Left: Text Section */}
                <div className="lg:w-1/2 z-20 px-4">
                  <h1 className="text-left text-3xl sm:text-4xl font-extrabold text-black mb-4">
                    Read Out Newsletter!
                  </h1>
                  <p className="text-left text-lg font-medium text-black mb-6">
                    SCIP creates a weekly newsletter discussing our organization, business trends, SCIP alumni and more!
                  </p>
        
                  {/* Buttons */}
                  <div className="justify-start flex flex-wrap gap-4 mx-3">
                    <button className=" transition-colors bg-[#005b82] hover:bg-[#004466] text-white font-bold my-2 px-6 py-3 rounded-full shadow">
                      Read Now
                    </button>
                  </div>
                </div>
                {/* Right: Image Section */}
                <div className="w-full md:w-1/2 relative z-10 flex justify-center items-center overflow-hidden rounded-lg min-h-[300px]">
                  <img
                    src={demo}
                    alt="Smiling young professionals"
                    className="absolute top-1/2 left-1/2 w-auto h-full max-w-full object-cover object-center transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
        
            </section>
        {/* Instagram Section */}
        <InstagramSection />
        {/* Donate to SCIP */}
        <div className="z-20 py-10 bg-scipblue px-30">
          <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Donate to SCIP!
          </h1>
          <p className="text-center text-20px font-medium  text-white mb-6 px-24">
            Your donation to SCIP helps support young global leaders find their dream careers and corporate success. No amount is too small!
          </p>

          {/* Button */}
          <div className="justify-center flex flex-wrap gap-4">
            <button className=" transition-colors bg-scipred hover:bg-[#851b45] text-white font-bold my-2 px-6 py-3 rounded-full shadow">
              Learn More ...
            </button>
          </div>
        </div>



    </div>
  );
};

export default Home;