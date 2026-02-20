import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import Membership from "./pages/Membership";
import "./App.css";
import Feature from "./pages/Feature";
import ServiceDetails from "./components/ServiceDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/features" element={<Feature/>}/>
        <Route path="/exercises/:muscle" element={<Exercises />} />
        <Route path="/membership" element={<Membership />} />
         <Route path="/services/:id" element={<ServiceDetails />} />

      </Routes>
    </>
  );
}

export default App;
