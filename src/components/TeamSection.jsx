import React from "react";

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Personal Trainer",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
  },
  {
    name: "Priya Singh",
    role: "Yoga Instructor",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  },
  {
    name: "Amit Verma",
    role: "Strength Coach",
    img: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
  },
  {
    name: "Sneha Patel",
    role: "Nutrition Expert",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-red-900 py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Meet Our <span className="text-red-500">Team</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Our certified trainers and experts are here to guide you toward your fitness goals.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transition duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-80 object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-red-500 font-medium">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;