import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Activity = ({ age_category, title, img, slug }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Link
      to={`/activities/${slug}`}
      // onMouseOver={() => setIsMouseOver(true)}
      // onMouseLeave={() => setIsMouseOver(false)}
      className="flex flex-col mb-2"
    >
      {/* Thumbnail */}
      <div className="relative w-full h-auto cursor-pointer">
        <img
          src={img}
          alt={title}
          className={`object-cover min-h-[150px] sm:min-h-[200px] max-h-[200px] w-full transition-all duration-300 
          `}
        />
      </div>

      {/* Title */}
      <div className="mt-2">
        <h3 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-2 hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default Activity;
