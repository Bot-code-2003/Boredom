import React from "react";
import topBar from "../assets/topBar.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <div>
      <div className="relative mb-2">
        <img src={topBar} className="w-full max-h-[200px]" alt="topBar" />
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl sm:text-5xl font-bold text-white">
          I am Bored!
        </h1>
      </div>
      <div className="flex gap-4 text-sm sm:text-lg text-gray-600 justify-center items-center">
        <Link
          to="/"
          className={`hover:underline cursor-pointer ${
            location.pathname === "/" ? "text-black underline font-bold" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/activities"
          className={`hover:underline cursor-pointer ${
            location.pathname === "/activities"
              ? "text-black underline font-bold"
              : ""
          }`}
        >
          Activities
        </Link>
        <Link
          to="#"
          className={`hover:underline cursor-pointer ${
            location.pathname === "/hobbies"
              ? "text-black underline font-bold"
              : ""
          }`}
        >
          Hobbies
        </Link>
        <Link
          to="#"
          className={`hover:underline cursor-pointer ${
            location.pathname === "/community"
              ? "text-black underline font-bold"
              : ""
          }`}
        >
          Community
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
