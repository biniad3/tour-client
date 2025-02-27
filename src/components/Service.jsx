import React from "react";

const Service = () => {
  return (
    <div className="mt-24 pt-24 p-8 lg:px-20" id="Service">
      <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-5">
        Some Features that Made Us Unique
      </h1>
      <p className="font-bold text-gray-600 text-center mb-10">
        Who are extremely in love with eco-friendly systems.
      </p>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {/* Service Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 text-center hover:bg-slate-600 hover:text-white transition-all duration-500">
            <div className="text-3xl mb-4 text-blue-500">
              <i className="fas fa-user-cog"></i>
            </div>
            <div className="flex items-start justify-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3917/3917688.png"
                width={23}
                alt="Expert Technicians"
              />
              <h3 className="font-bold text-lg sm:text-xl mb-2">
                Expert Technicians
              </h3>
            </div>
            <p className="text-sm sm:text-base">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 h-60 text-center hover:bg-slate-600 hover:text-white transition-all duration-500">
            <div className="text-3xl mb-4 text-blue-500">
              <i className="fas fa-user-cog"></i>
            </div>
            <div className="flex items-start justify-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3914/3914415.png"
                width={23}
                alt="Professional Service"
              />
              <h3 className="font-bold text-lg sm:text-xl mb-2">
                Professional Service
              </h3>
            </div>
            <p className="text-sm sm:text-base">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 text-center hover:bg-slate-600 hover:text-white transition-all duration-500">
            <div className="text-3xl mb-4 text-blue-500">
              <i className="fas fa-user-cog"></i>
            </div>
            <div className="flex items-start justify-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5070/5070407.png"
                width={23}
                alt="Great Support"
              />
              <h3 className="font-bold text-lg sm:text-xl mb-2">
                Great Support
              </h3>
            </div>
            <p className="text-sm sm:text-base">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 h-60 text-center hover:bg-slate-600 hover:text-white transition-all duration-500">
            <div className="text-3xl mb-4 text-blue-500">
              <i className="fas fa-user-cog"></i>
            </div>
            <div className="flex items-start justify-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6955/6955628.png"
                width={23}
                alt="Technical Skills"
              />
              <h3 className="font-bold text-lg sm:text-xl mb-2">
                Technical Skills
              </h3>
            </div>
            <p className="text-sm sm:text-base">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 text-center hover:bg-slate-600 hover:text-white transition-all duration-500">
            <div className="text-3xl mb-4 text-blue-500">
              <i className="fas fa-user-cog"></i>
            </div>
            <div className="flex items-start justify-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3914/3914401.png"
                width={23}
                alt="Highly Recommended"
              />
              <h3 className="font-bold text-lg sm:text-xl mb-2">
                Highly Recommended
              </h3>
            </div>
            <p className="text-sm sm:text-base">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 text-center hover:bg-slate-600 hover:text-white transition-all duration-500">
            <div className="text-3xl mb-4 text-blue-500">
              <i className="fas fa-user-cog"></i>
            </div>
            <div className="flex items-start justify-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3916/3916638.png"
                width={23}
                alt="Positive Reviews"
              />
              <h3 className="font-bold text-lg sm:text-xl mb-2">
                Positive Reviews
              </h3>
            </div>
            <p className="text-sm sm:text-base">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
