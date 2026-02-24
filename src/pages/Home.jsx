import React, { useState } from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import InfoBrowse from "../components/InfoBrowse";
import Footer from "../components/Footer";
import PopularMuscleGroups from "../components/PopularMuscleGroups";
import OurServices from "../components/OurServices/OurServices";
import TeamSection from "../components/TeamSection/TeamSection";
import ExerciseDetails from "./ExerciseDetails";

const Home = () => {
  const [selectedMuscle, setSelectedMuscle] = useState("all");

  return (
    <div className="w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Main Content Wrapper */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Muscle Groups */}
        <section className="py-10 sm:py-14">
          <PopularMuscleGroups
            selected={selectedMuscle}
            setSelected={setSelectedMuscle}
          />
        </section>

        {/* Cards */}
        <section className="py-10 sm:py-14">
          <Cards />
        </section>

        {/* Exercise Details */}
        <section className="py-10 sm:py-14">
          <ExerciseDetails />
        </section>

        {/* Services */}
        <section className="py-10 sm:py-14">
          <OurServices />
        </section>

        {/* Info */}
        <section className="py-10 sm:py-14">
          <InfoBrowse />
        </section>

        {/* Team */}
        <section className="py-10 sm:py-14">
          <TeamSection />
        </section>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;