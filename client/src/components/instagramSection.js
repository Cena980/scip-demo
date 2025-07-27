import { useRef } from 'react';

const InstagramSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="relative bg-scipred overflow-hidden md:p-15 py-10">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-8 items-center px-20">
        <div className="flex flex-col gap-4 text-justify">
          <h1 className="text-left text-3xl font-inter text-white font-extrabold">
            Follow Us on Instagram
          </h1>
          <p className="text-white text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper dalar elementum tempus hac tellus liber.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start md:justify-end">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png"
            alt="Instagram Logo"
            className="h-14 w-14 mb-3"
        />

        <button className="transition-colors bg-[#005b82] hover:bg-[#004466] text-white font-bold px-6 py-3 rounded-full shadow">
            Follow Us
        </button>
        </div>

      </div>

      {/* Scrollable Collage with Buttons */}
      <div className="relative mt-10 px-20">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 mx-2 rounded-full shadow-md"
        >
          <span className="text-2xl text-scipred">←</span>
        </button>

        {/* Scrollable Image List */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-10 py-5"
        >
          {[
            'https://picsum.photos/id/1015/300/300',
            'https://picsum.photos/id/1025/300/300',
            'https://picsum.photos/id/1035/300/300',
            'https://picsum.photos/id/1045/300/300',
            'https://picsum.photos/id/1055/300/300',
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Instagram post ${index + 1}`}
              className="h-48 w-48 object-cover rounded-lg shadow-md flex-shrink-0 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 mx-2 rounded-full shadow-md"
        >
          <span className="text-2xl text-scipred">→</span>
        </button>
      </div>
    </section>
  );
};

export default InstagramSection;
