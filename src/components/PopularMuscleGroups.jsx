import React from "react";
import { useNavigate } from "react-router-dom";
const muscles = [
  { name: "All", value: "all" },
  { name: "Chest", value: "chest" },
  { name: "Back", value: "back" },
  { name: "Legs", value: "legs" },
];


const PopularMuscleGroups = ({ selected, setSelected }) => {
  const navigate = useNavigate();

  const handleClick = (muscle) => {
    setSelected(muscle);
    navigate('/exercises/${muscle}');
  }
  return (
    <div className="flex justify-center item-center px-6 mt-10">
      <div className="w-full max-w-4xl text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 py-2"> 
        Popular Muscle Groups
      </h2>

      <div className="flex justify-center gap-4 flex-wrap">
        {muscles.map((muscle) => (
          <button
            key={muscle.value}
            onClick={() => handleClick(muscle.value)}
            className={`min-w-[100px] px-4 py-3 rounded-xl border text-center font-medium transition-all duration-300
              ${
                selected === muscle.value
                  ? "bg-gradient-to-r from-black via-gray-900 to-red-900 text-white shadow-md scale-105"
                  : "bg-white hover:bg-gray-100"
              }
            `}
          >
            {muscle.name}
          </button>
        ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMuscleGroups;
