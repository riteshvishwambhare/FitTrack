import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const exerciseData = [
  {
    name: "Chest",
    image: chestImg,
    description:
      "Chest workouts help build upper body strength and improve pushing power.",
    time: "6-8 Weeks",
    difficulty: "Intermediate",
    sets: "3-4 Sets | 8-12 Reps",
    fullDescription:
      "Chest exercises like bench press, incline press, push-ups, and cable flys target the pectoral muscles. Training chest regularly improves upper body strength and posture."
  },
  {
    name: "Back",
    image: backImg,
    description:
      "Back exercises improve posture and spine strength.",
    time: "8-10 Weeks",
    difficulty: "Intermediate",
    sets: "4 Sets | 8-10 Reps",
    fullDescription:
      "Back workouts such as pull-ups, deadlifts, barbell rows, and lat pulldowns help build thickness and width."
  },
  {
    name: "Biceps",
    image: BicepImg,
    description:
      "Biceps exercises build arm size and strength.",
    time: "4-6 Weeks",
    difficulty: "Beginner",
    sets: "3 Sets | 10-12 Reps",
    fullDescription:
      "Biceps workouts include barbell curls, dumbbell curls, hammer curls, and preacher curls."
  },
  {
    name: "Legs",
    image: legsImg,
    description:
      "Leg workouts build lower body power.",
    time: "8-12 Weeks",
    difficulty: "Advanced",
    sets: "4-5 Sets | 6-12 Reps",
    fullDescription:
      "Leg exercises like squats, lunges, leg press, and Romanian deadlifts develop quads and glutes."
  }
];




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