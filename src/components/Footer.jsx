import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">FitTrack</h2>
          <p className="text-white/90">
            Track workouts, explore exercises, and achieve your fitness goals with ease.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-200 transition">Home</Link>
            </li>
            <li>
              <Link to="/exercises" className="hover:text-yellow-200 transition">Exercises</Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-yellow-200 transition">Feature</Link>
            </li>
            <li>
              <Link to="/membership" className="hover:text-yellow-200 transition">Membership</Link>
            </li>
            <li>
              <Link to="/exercise-details" className="hover:text-yellow-200 transition">ExerciseDetails</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p>Email: support@fittrack.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 border-t border-white/20 text-sm">
        © {new Date().getFullYear()} FitTrack. All rights reserved.
      </div>
    </footer>
  );
};
 
export default Footer;
