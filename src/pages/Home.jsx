import React from 'react'
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import InfoBrowse from '../components/InfoBrowse';
import Footer from '../components/Footer';
import PopularMuscleGroups from '../components/PopularMuscleGroups';
import { useState } from 'react';
import OurServices from '../components/OurServices/OurServices';
import TeamSection from '../components/TeamSection/TeamSection';
import ExerciseDetails from './ExerciseDetails';
const Home = () => {

  const [selectedMuscle, setSelectedMuscle] = useState("all");

  return (
    <div>
      <Hero />
       <PopularMuscleGroups
        selected={selectedMuscle}
        setSelected={setSelectedMuscle}
      />

      <Cards />
      < ExerciseDetails/>
      <OurServices/>
      <InfoBrowse />
      <TeamSection/>
      <Footer />
    </div>
  )
}

export default Home
