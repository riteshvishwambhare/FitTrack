import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { exerciseData } from "../data/ExerciseData";



const ExerciseDetails = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < exerciseData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen text-whitepx-4 flex flex-col items-center">
      
      <h1 className="text-2xl md:text-4xl font-bold mb-10 text-center whitespace-nowrap">
        Body Part Exercises
      </h1>

      <div className="flex flex-col items-center gap-6">
        
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="bg-gradient-to-r from-black via-gray-900 to-red-900 px-5 py-3 rounded-full text-xl hover:bg-red-700"
        >
          {"Back"}
        </button>

        {/* Card */}
        <div className="w-90 max-w-md overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {exerciseData.map((item, index) => (
              <div key={index} className="min-w-full">
                <div className="bg-gradient-to-r from-black via-gray-900 to-red-900 rounded-xl overflow-hidden shadow-lg">
                  
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-55 object-cover"
                  />

                  <div className="p-8">
                    <h2 className="text-2xl font-semibold mb-3 text-red-500">
                      {item.name}
                    </h2>

                    <p className="text-gray-300 text-sm mb-2">
                      {item.description}
                    </p>

                    <p className="text-gray-400 text-sm">
                      <strong>Time:</strong> {item.time}
                    </p>

                    <p className="text-gray-400 text-sm">
                      <strong>Difficulty:</strong> {item.difficulty}
                    </p>

                    <button
                      onClick={() =>
                        navigate(`/exercise-full/${item.name}`)
                      }
                      className="mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700 w-full"
                    >
                      Learn More
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="bg-gradient-to-r from-black via-gray-900 to-red-900 px-5 py-3 rounded-full text-xl hover:bg-red-700"
        >
          {"Next"}
        </button>

      </div>
    </div>
  );
};

export default ExerciseDetails;