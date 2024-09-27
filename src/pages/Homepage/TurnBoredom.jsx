import React from "react";
import newtonImage from "../../assets/newton.jpg"; // Ensure you have this asset
import einsteinImage from "../../assets/einstein.jpeg"; // Ensure you have this asset
import rowlingImage from "../../assets/rowling.jpeg"; // Ensure you have this asset

const TurnBoredom = () => {
  return (
    <div className="flex flex-col items-center text-white text-center px-4 py-12 bg-white sm:px-8 rounded-md shadow-lg">
      {/* Header Section */}
      <div className="max-w-5xl">
        <div className="flex items-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6">
            Turn Boredom into{" "}
            <span class="italic border-b-4 border-cyan-500 font-bold bg-gradient-to-r from-indigo-500 via-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
              Creativity
            </span>
          </h1>
          <img src="src/assets/CloudOrange.svg" className=" h-16 " alt="" />
        </div>
        <p className="text-md sm:text-lg text-gray-600 mb-6">
          Learn how historical moments of reflection led to revolutionary ideas.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
        {/* Newton Card */}
        <div className="bg-gray-800 text-white p-10 rounded-lg shadow-lg relative overflow-hidden">
          <img
            src={newtonImage}
            alt="Isaac Newton"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-2">Isaac Newton</h2>
            <p className="text-sm text-white">
              Conceptualized the laws of motion and universal gravitation while
              relaxing in solitude.
            </p>
          </div>
        </div>

        {/* Einstein Card */}
        <div className="bg-gray-800 text-white p-10 rounded-lg shadow-lg relative overflow-hidden">
          <img
            src={einsteinImage}
            alt="Albert Einstein"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-2">Albert Einstein</h2>
            <p className="text-sm text-white">
              Developed the theory of relativity during his leisurely walks and
              quiet moments.
            </p>
          </div>
        </div>

        {/* Rowling Card */}
        <div className="bg-gray-800 text-white p-10 rounded-lg shadow-lg relative overflow-hidden">
          <img
            src={rowlingImage}
            alt="J.K. Rowling"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-2">J.K. Rowling</h2>
            <p className="text-sm text-white">
              Imagined the world of Harry Potter while delayed on a train
              journey.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Call-to-Action */}
      <div className="mt-8">
        <button className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transition-colors duration-300">
          Explore More Stories
        </button>
      </div>
    </div>
  );
};

export default TurnBoredom;
