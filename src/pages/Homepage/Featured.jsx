import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold mb-5">Featured Articles</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[60%,40%] gap-5">
        {/* First Featured Section (70% width) */}
        <div className="flex flex-col sm:flex-row gap-5 items-start bg-gray-100">
          <img
            className="w-full sm:w-[350px] h-[250px] object-cover shadow-lg"
            src="https://i.ibb.co/B3mmxZy/43c8ae8a-0331-4b98-bfac-2f3738332ab1.webp"
            alt="A human writing on a journal which is on a table with lot of books and phone. A cozy home."
          />
          <div className="flex flex-col justify-between p-2">
            <Link
              to="/activities/thought-journal"
              className="text-xl font-semibold text-gray-900 leading-tight hover:text-green-700 "
            >
              Swap Social Media for a Thought Journal: Capture Ideas and Stay
              Mindful
            </Link>
            <p className="mt-3 text-gray-600 leading-relaxed font-poppins">
              Stuck in endless scrolling? Take control of your thoughts with
              this simple idea that will help you stay mindful.
            </p>
            <Link
              to="/activities/thought-journal"
              className="font-serif italic mt-3 text-red-500 text-xl"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Second Featured Section (30% width) */}
        <div className="grid grid-cols-1 gap-5">
          <div className="flex gap-2 items-center justify-between bg-gray-100">
            <img
              className="w-[120px] h-[120px] sm:w-full sm:h-[120px] object-cover shadow-lg"
              src="https://images.pexels.com/photos/970369/pexels-photo-970369.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Journal and Instax camera on a table."
            />
            <Link
              to="/activities/time-capsule-memories"
              className="hover:text-green-700  text-md font-bold text-center sm:text-lg sm:text-left sm:font-semibold text-gray-900 leading-tight "
            >
              Create a Detailed Time Capsule (With Instax and Journal)
            </Link>
          </div>

          <div className="flex gap-2 items-center justify-between bg-gray-100">
            <img
              className="w-[120px] h-[120px] sm:w-full sm:h-[120px] object-cover shadow-lg"
              src="https://images.pexels.com/photos/970369/pexels-photo-970369.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Journal and Instax camera on a table."
            />
            <Link
              to="/activities/time-capsule-memories"
              className="hover:text-green-700  text-lg font-bold text-center sm:text-lg sm:text-left sm:font-semibold text-gray-900 leading-tight "
            >
              Create a Detailed Time Capsule (With Instax and Journal)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
