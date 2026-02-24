import React from "react";
import { useParams, Link } from "react-router-dom";

const services = [
  {
    id: "losing-weight",
    title: "LOSING WEIGHT",
    img: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c",
    fullContent:
      "This program is designed to help you lose weight safely and effectively. You will get customized diet plans, cardio routines, fat burning exercises and weekly progress tracking.",
  },
  {
    id: "building-muscle",
    title: "BUILDING MUSCLE",
    img: "https://images.unsplash.com/photo-1581009137042-c552e485697a",
    fullContent:
      "Our muscle building program focuses on hypertrophy training, progressive overload, strength workouts and high protein diet planning.",
  },
  {
    id: "training-home",
    title: "TRAINING AT HOME",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    fullContent:
      "No gym? No problem! Our home training plans include bodyweight exercises and weekly online guidance.",
  },
  {
    id: "gym-plan",
    title: "GYM PLAN",
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001ab",
    fullContent:
      "Complete gym routine including chest, back, legs and arms split with proper recovery schedule.",
  },
];

const ServiceDetails = () => {
  const { id } = useParams();

  const service = services.find((item) => item.id === id);

  if (!service) {
    return <div className="text-center py-20">Service Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-96 object-cover rounded-xl mb-8"
        />

        <h1 className="text-4xl font-bold text-red-500 mb-6">
          {service.title}
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          {service.fullContent}
        </p>

        <Link
          to="/"
          className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;