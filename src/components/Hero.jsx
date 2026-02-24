import React from "react";
import heroImage from "../assets/HeroImg/hero.jpg"

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] ">
      <img
        src={heroImage}
        alt="Fitness Hero"
        className="w-full h-full object-cover mt-1.2"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to Your Fitness Tracker
        </h1>
        <p className="text-lg md:text-2xl drop-shadow-md">
          Track, Plan, and Achieve Your Goals
        </p>
      </div>
    </div>
  );
};

export default Hero;
