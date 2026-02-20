import React from "react";
import { useNavigate } from "react-router-dom";
const InfoBrowse = () => {
const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-r from-black via-gray-900 to-red-900 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        Discover New Exercises
      </h2>

      <p className="text-white/90 mb-6 max-w-xl">
        Explore hundreds of exercises and create your personalized routine today!
      </p>

      <button 
      onClick={() => navigate("/exercises")}
      className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
        Browse Exercises
      </button>
    </div>
  );
};

export default InfoBrowse;
