import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import chestImg from "../../assets/BodyPartEx/chest.jpg";
import backImg from "../../assets/BodyPartEx/back.jpg";
import bicepImg from "../../assets/BodyPartEx/Bicep.jpg";
import legsImg from "../../assets/BodyPartEx/legs.jpg";


const ExerciseFullShow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const exercise = location.state?.exercise;


  const gymImages = {
    chest: chestImg,
    back: backImg,
    biceps: bicepImg,
    legs: legsImg,
  };



  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        No Exercise Data Found
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12 text-white">
      
      <button
        onClick={() => navigate(-1)}
        className="mb-8 bg-gray-700 px-6 py-2 rounded hover:bg-gray-600 transition"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto bg-gradient-to-r from-black via-gray-900 to-red-900 rounded-2xl shadow-xl p-8">

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <img 
             src={
              gymImages[exercise.bodyPart?.toLowerCase()] ||
             "https://via.placeholder.com/400x300?text=Exercise"
            }
             alt={exercise.name}
             loading="lazy"
             className="w-full h-48 object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col">

            <h1 className="text-3xl font-bold capitalize mb-4">
              {exercise.name}
            </h1>

            <p className="text-gray-300 mb-6">
              This exercise targets your 
              <span className="text-red-400 font-semibold"> {exercise.target} </span> 
              and helps improve strength and muscle growth.
            </p>

            <div className="grid grid-cols-3 gap-4">
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-sm text-gray-400">Body Part</h3>
                <p className="font-semibold capitalize">
                  {exercise.bodyPart}
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-sm text-gray-400">Target Muscle</h3>
                <p className="font-semibold capitalize">
                  {exercise.target}
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-sm text-gray-400">Equipment</h3>
                <p className="font-semibold capitalize">
                  {exercise.equipment}
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseFullShow;