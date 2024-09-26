import React, { useState } from "react";
import BoredomChart from "./BoredomChart";

const Reasons = () => {
  const [ageGroup, setAgeGroup] = useState("25-34"); // Default age group

  // Function to render button styles
  const buttonStyle = (group) =>
    `px-4 py-2 text-sm sm:text-base rounded-lg transition duration-300 shadow-md focus:outline-none ${
      ageGroup === group
        ? "bg-indigo-600 text-white hover:bg-indigo-700"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10">
      <div className="flex flex-col items-center gap-6">
        {/* Heading Section */}
        <div className="w-full">
          <h1 className="text-3xl text-center sm:text-5xl font-bold text-gray-800 mb-4">
            Why Do We Get{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent ">
              Bored?
            </span>
          </h1>
          <p className="text-md sm:text-lg text-gray-600 mb-5 text-center max-w-5xl mx-auto">
            Boredom is a natural part of life, often signaling a need for
            something new. Research shows that it can actually benefit mental
            health by encouraging exploration and creativity.
          </p>

          <p className="text-md sm:text-lg text-gray-700 mb-4 max-w-5xl text-center mx-auto">
            Here's what research says about the reasons behind boredom across
            different age groups. Explore the insights below!
          </p>
        </div>

        {/* Age Group Buttons */}
        <div className="w-full flex justify-center gap-3 mb-6">
          {["18-24", "25-34", "35-44", "45-54"].map((group) => (
            <button
              key={group}
              className={buttonStyle(group)}
              onClick={() => setAgeGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Boredom Chart */}
        <div className="w-full max-w-4xl">
          <BoredomChart variant={ageGroup} />
        </div>

        {/* Call-to-Action Button */}
        <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:from-purple-500 hover:to-indigo-500 transition duration-300 focus:outline-none">
          Find Activites
        </button>
      </div>
    </div>
  );
};

export default Reasons;
