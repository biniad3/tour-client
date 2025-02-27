import React, { useState, useEffect } from "react";
import Travel from "../assets/Travel.mp4";

const sliderData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwJTIwdHJhdmVsfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbCUyMGdyb3VwfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1639763703351-c27defbb51b1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzJTIwdHJhdmVsfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    image:
      "https://media.istockphoto.com/id/1140611116/photo/excited-to-travel.jpg?s=1024x1024&w=is&k=20&c=6NBqHiQH-5fTarqFmkBC_uR0S0YqoWj3Qmh9gH3JliU=",
  },
];

const Gallerry = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  return (
    <div className="mt-16 mb-16 pt-24 " id="Gallery">
      <h1 className="text-5xl font-semibold text-center">
        Some Stunning photos taken on Trip
      </h1>
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden mt-10">
        {/* Slider */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sliderData.map((slide) => (
            <div className="w-full flex-shrink-0" key={slide.id}>
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          ❯
        </button>
      </div>

      {/* Video Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <video
          src={Travel}
          controls
          className="w-full rounded-lg shadow-lg"
        ></video>
      </div>
    </div>
  );
};

export default Gallerry;
