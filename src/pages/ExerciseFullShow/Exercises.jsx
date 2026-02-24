import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import chestImg from "../../assets/BodyPartEx/chest.jpg";
import backImg from "../../assets/BodyPartEx/back.jpg";
import bicepImg from "../../assets/BodyPartEx/Bicep.jpg";
import legsImg from "../../assets/BodyPartEx/legs.jpg";

const Exercises = () => {
  const navigate = useNavigate();
  const { muscle } = useParams();

  const gymImages = {
    chest: chestImg,
    back: backImg,
    biceps: bicepImg,
    legs: legsImg,
  };

  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isFetching = useRef(false);

  // Fetch exercises from API
  const fetchExercises = async (query) => {
    if (!query.trim()) return;
    if (isFetching.current) return;

    isFetching.current = true;
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/name/${query}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "19458f3139msh34818f48e982faap1ce8bcjsne743a36408e2",
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      setExercises(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch exercises");
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  };

  // Auto set search from URL param
  useEffect(() => {
    if (muscle) {
      setSearch(muscle);
      fetchExercises(muscle);
    }
  }, [muscle]);

  // Enter key support
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchExercises(search);
    }
  };

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">

      {/* Search Section */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <input
          type="text"
          placeholder="Search exercise (push, squat, curl...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full sm:w-96 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          onClick={() => fetchExercises(search)}
          className="px-6 py-3 bg-gradient-to-r from-black via-gray-900 to-red-900 text-white rounded-lg hover:opacity-90 transition"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-lg font-semibold">
          Loading exercises...
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="text-center text-red-500 font-semibold">
          {error}
        </p>
      )}

      {/* Exercise Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {exercises.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img src={gymImages[item.bodyPart] ||
               "https://th.bing.com/th/id/OIP.-q6pY8eegcXUWDnnuLbm9wAAAA?w=245&h=193&c=7&r=0&o=7&pid=1.7&rm=3"} 
               alt={item.name} 
               loading="lazy" 
               className="w-full h-48 object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/300x200?text=No+Image"; }} 
              />

            <div className="p-4 bg-gradient-to-r from-black via-gray-900 to-red-900">
              <h3 className="text-lg font-bold capitalize mb-3 text-white">
                {item.name}
              </h3>

              <div className="flex gap-2 flex-wrap text-sm mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                  {item.bodyPart}
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">
                  {item.target}
                </span>
              </div>

              <button
                onClick={() =>
                  navigate(`/exercise/${item.id}`, {
                    state: { exercise: item },
                  })
                }
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {!loading && exercises.length === 0 && search && !error && (
        <p className="text-center mt-10 text-gray-500">
          No exercises found
        </p>
      )}
    </div>
  );
};

export default Exercises;