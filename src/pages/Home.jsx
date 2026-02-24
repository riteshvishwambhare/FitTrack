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
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        <section className="py-10 sm:py-14">
          <PopularMuscleGroups
            selected={selectedMuscle}
            setSelected={setSelectedMuscle}
          />
        </section>

       
        <section className="py-10 sm:py-14">
          <Cards />
        </section>

        <section className="py-10 sm:py-14">
          <ExerciseDetails />
        </section>

        <section className="py-10 sm:py-14">
          <OurServices />
        </section>

        <section className="py-10 sm:py-14">
          <InfoBrowse />
        </section>

        <section className="py-10 sm:py-14">
          <TeamSection />
        </section>

      </div>
      <Footer />

    </div>
  );
};

export default Home;