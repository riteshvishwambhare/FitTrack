import React from "react";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    duration: "/month",
    features: [
      "Access to Gym Equipment",
      "Locker Facility",
      "1 Free Trainer Session",
      "Basic Support",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "₹1999",
    duration: "/month",
    features: [
      "All Basic Features",
      "Personal Trainer",
      "Diet Plan",
      "Access to All Classes",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹2999",
    duration: "/month",
    features: [
      "All Standard Features",
      "24/7 Access",
      "Premium Locker",
      "Body Analysis Report",
    ],
    highlight: false,
  },
];

const Membership = () => {
  return (
    <div className="min-h-screen bg-[oklch(87.944%_0.03272_254.066)] py-12 sm:py-16 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
        Choose Your Membership Plan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg p-6 transition transform hover:scale-105 ${
              plan.highlight
                ? "bg-gradient-to-r from-black via-gray-900 to-red-900 text-white"
                : "bg-white"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3">{plan.name}</h3>

            <p className="text-2xl sm:text-3xl font-extrabold mb-6">
              {plan.price}
              <span className="text-sm font-normal ml-1">
                {plan.duration}
              </span>
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm sm:text-base">
                  ✔ {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold transition ${
                plan.highlight
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;