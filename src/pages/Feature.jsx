import React from 'react'
import { useState } from 'react';

const FeatureData = [

    {
        id: 1,
            title: "Cutting-Edge Equipment",
                description: "Experience fitness with our state-of-the-art equipment featuring the latest technology.",
                    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
        },
    {
        id: 2,
        title: "Accessible 24/7",
        description:"Your fitness journey doesn't stop when the sun sets. Enjoy unlimited access anytime.",
        image:"https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
  },
    {
        id: 3,
        title: "Elite Personal Training",
        description:"Certified trainers bring expertise and personalized attention to help you succeed.",
        image:"https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  },
    {
        id: 4,
        title: "Luxury Amenities",
        description:"Premium amenities including spa-quality changing rooms and wellness services.",
        image:"https://images.unsplash.com/photo-1579758629938-03607ccdbaba",
  },
    {
        id: 5,
        title: "Customized Programs",
        description:"Tailored programs designed to match your personal fitness goals.",
        image:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
  },

]

 const Feature = () =>{

    const[activeFeature , setActiveFeature] = useState(FeatureData[0]);

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col lg:flex-row'>

            {/* Left side*/}
            <div className='lg:w-2/8 bg-[oklch(87.944%_0.03272_254.066)] p-8 space-y-6'>
            {FeatureData.map((Feature) =>(

                <div
                    key={Feature.id}
                    onClick={()=> setActiveFeature(Feature)}
                    className={`p-4 rounded-lg bg-gradient-to-r from-black via-gray-900 to-red-900 text-white cursor-pointer bg-white border-1xl transition ${activeFeature.id === Feature.id? "bg-red-50 border-l-4 border-red-500 shadow": "hover:bg-gray-50"}`}>
                        
                <h3 className="font-semibold text-lg">{Feature.title}</h3>
            <p className="text-sm text-gray-250 mt-1">
              {Feature.description.substring(0, 70)}...
            </p>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-full relative">
        <img
          src={activeFeature.image}
          alt={activeFeature.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 bg-black/60 text-white p-8 w-full">
          <h2 className="text-2xl font-bold mb-2">
            {activeFeature.title}
          </h2>
          <p className="text-sm">
            {activeFeature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
