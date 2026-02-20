import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "losing-weight",
    title: "LOSING WEIGHT",
    desc: "Achieve sustainable weight loss...",
    img: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c",
    fullContent:
      "This program is designed to help you lose weight safely and effectively. You will get customized diet plans, cardio routines, fat burning exercises and weekly progress tracking.",
  },
  {
    id: "building-muscle",
    title: "BUILDING MUSCLE",
    desc: "Develop strength and define...",
    img: "https://images.unsplash.com/photo-1581009137042-c552e485697a",
    fullContent:
      "Our muscle building program focuses on hypertrophy training, progressive overload, strength workouts and high protein diet planning.",
  },
  {
    id: "training-home",
    title: "TRAINING AT HOME",
    desc: "Stay fit and strong...",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    fullContent:
      "No gym? No problem! Our home training plans include bodyweight exercises, resistance band workouts and weekly online guidance.",
  },
  {
    id: "gym-plan",
    title: "GYM PLAN",
    desc: "Maximize your gym sessions...",
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001ab",
    fullContent:
      "Complete gym routine including chest, back, legs, arms split with proper rest and recovery schedule.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-red-900 py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Our <span className="text-red-500">Services</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          At this part you can easily access all of our services. Take a look
          at them and choose whichever you want.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            {/* Background Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h3 className="text-lg font-bold text-red-500 mb-2">
                {service.title}
              </h3>

              <p className="text-sm mb-4 opacity-90">
                {service.desc}
              </p>

              <Link
                to={`/services/${service.id}`}
                className="text-sm font-semibold flex items-center gap-2 text-white hover:text-red-400 transition"
              >
  Learn More →
</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;