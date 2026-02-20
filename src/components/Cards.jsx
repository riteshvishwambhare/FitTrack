import React from "react";

const cardData = [
  { title: "Cardio", description: "Improve your endurance", color: "bg-gradient-to-r from-black via-gray-900 to-red-900" },
  { title: "Strength", description: "Build your muscles", color: "bg-gradient-to-r from-black via-gray-900 to-red-900" },
  { title: "Flexibility", description: "Stretch and relax", color: "bg-gradient-to-r from-black via-gray-900 to-red-900" },
  { title: "Balance", description: "Enhance stability", color: "bg-gradient-to-r from-black via-gray-900 to-red-900" },
];

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 my-16 px-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`w-64 p-6 rounded-xl text-white shadow-lg hover:scale-105 transform transition ${card.color}`}
        >
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
