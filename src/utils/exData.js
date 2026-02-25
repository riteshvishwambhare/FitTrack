import chestImg from "../assets/BodyPartEx/chest.jpg"
import backImg from "../assets/BodyPartEx/back.jpg"
import BicepImg from "../assets/BodyPartEx/Bicep.jpg"
import legsImg from "../assets/BodyPartEx/legs.jpg"



export const exerciseData = [
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
