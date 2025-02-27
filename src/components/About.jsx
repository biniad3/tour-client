import React from "react";

const About = () => {
  return (
    <div className="mt-24 px-5 lg:px-20 p-24 " id="About">
      <h1 className="text-5xl font-semibold text-center mb-5">
        Why Choose Us For Travel
      </h1>
      <p className="font-bold text-gray-600 text-center mb-10">
        Who are in extremely love with eco-friendly systems.
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
          <img
            className="rounded-lg shadow-lg w-full h-auto"
            src="https://themewagon.github.io/adventure/img/about-img.jpg"
            alt="About Us"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-lg px-5 sm:px-10">
          <h2 className="text-3xl font-bold mb-5">About Us:</h2>
          <h3 className="text-3xl font-semibold mb-5">
            Discover the World with Erta ALE
          </h3>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold">Erta ALE Tour and Travel</span>,
            your trusted partner in creating unforgettable travel experiences.
            At our core, we believe that travel is not just about visiting new
            places—it's about creating stories, embracing diverse cultures, and
            discovering the magic that lies beyond your horizon.
          </p>
          <h4 className="text-2xl font-bold mb-4">Who We Are</h4>
          <p className="text-gray-700 leading-relaxed">
            Founded with a passion for exploration and a commitment to
            excellence,{" "}
            <span className="font-semibold">Erta ALE Tour and Travel</span> is a
            premier tour and travel company dedicated to making your travel
            dreams a reality. Whether you're seeking adventure, relaxation,
            cultural immersion, or all of the above, our expert team is here to
            curate personalized itineraries tailored to your unique preferences.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our mission is simple: to inspire and enable people to explore the
            world with ease, comfort, and confidence. With years of experience
            in the travel industry, we pride ourselves on our attention to
            detail, customer-focused approach, and an unwavering dedication to
            quality service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
