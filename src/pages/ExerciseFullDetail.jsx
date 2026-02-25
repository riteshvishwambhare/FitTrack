import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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