import React from "react";
import hero1 from "../../assets/hero1.webp";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-left smd:text-center  py-2 bg-white sm:px-8 rounded-md shadow-none sm:shadow-lg">
      {/* Text Section */}
      <div className="max-w-5xl">
        <h1 className="text-3xl text-center sm:text-6xl font-bold text-gray-800 mb-6">
          Unlock the{" "}
          <span className="font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Power of Boredom
          </span>
        </h1>
        <p className="text-md sm:text-lg text-gray-600 mb-6">
          Discover how embracing boredom can lead to{" "}
          <span className="border-b-4 border-teal-400">creativity</span>,{" "}
          <span className="border-b-4 border-cyan-400">growth</span>, and{" "}
          <span className="border-b-4 border-teal-400">new adventures</span>.
        </p>
      </div>

      {/* Image Section */}
      <img
        src={hero1}
        className="rounded-lg w-full h-[300px] sm:h-[400px] sm:w-[80%] object-cover shadow-lg mb-8"
        alt="Hero"
      />

      {/* Call-to-Action Button */}
      <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:from-purple-500 hover:to-indigo-500 transition duration-300 focus:outline-none">
        Join our community
      </button>
    </div>
  );
};

export default HeroSection;
