import React from "react";
import { useNavigate } from "react-router-dom";
import exerciseData from "../data/ExerciseData";

const ExerciseDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Body Part Exercises
      </h1>

      <div className="grid md:grid-cols-4 gap-8">
        {exerciseData.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-black via-gray-900 to-red-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-3 text-red-500">
                {item.name}
              </h2>

              <p className="text-gray-300 text-sm mb-2">
                {item.description}
              </p>

              <p className="text-gray-400 text-sm">
                <strong>Time to Grow:</strong> {item.time}
              </p>

              <p className="text-gray-400 text-sm">
                <strong>Difficulty:</strong> {item.difficulty}
              </p>

              <button
                onClick={() =>
                  navigate(`/exercise-full/${item.name}`)
                }
                className="mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseDetails;
