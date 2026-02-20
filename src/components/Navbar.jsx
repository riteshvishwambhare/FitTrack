import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-black via-gray-900 to-red-900 px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">
          FitTrack
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <NavItem to="/" text="Home" />
          <NavItem to="/exercises" text="Exercises" />
          <NavItem to="/features" text="Features" />
          <NavItem to="/membership" text="Membership" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-black/30 backdrop-blur-md p-4 rounded-lg">
          <NavItem to="/" text="Home" onClick={() => setIsOpen(false)} />
          <NavItem to="/exercises" text="Exercises" onClick={() => setIsOpen(false)} />
          <NavItem to="/features" text="Features" onClick={() => setIsOpen(false)} />
          <NavItem to="/membership" text="Membership" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ to, text, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `text-white font-medium hover:text-yellow-200 transition ${
        isActive ? "border-b-2 border-white" : ""
      }`
    }
  >
    {text}
  </NavLink>
);

export default Navbar;