import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import exerciseData from "../data/ExerciseData";

const ExerciseFullDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const exercise = exerciseData.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (!exercise) {
    return <h1 className="text-white p-10">Exercise Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-6 py-10">
      <div className="max-w-3xl bg-gray-900 rounded-xl p-6 shadow-lg">
        <img
          src={exercise.image}
          alt={exercise.name}
          className="w-full h-72 object-cover rounded-lg"
        />

        <h1 className="text-4xl font-bold mt-5 text-red-500">
          {exercise.name}
        </h1>

        <p className="mt-4 text-gray-300">
          {exercise.fullDescription}
        </p>

        <div className="mt-6 space-y-2">
          <p><strong>Time to Grow:</strong> {exercise.time}</p>
          <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
          <p><strong>Recommended Sets:</strong> {exercise.sets}</p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-red-600 px-6 py-2 rounded hover:bg-red-700"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default ExerciseFullDetail;