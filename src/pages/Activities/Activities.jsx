import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Activity from "./Activity";
import activityData from "../../data/ActivityData.json";

const Activities = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const navigate = useNavigate(); // useNavigate hook to redirect
  const { activities } = activityData;

  // Handle search on input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update the search term as the user types
  };

  // Convert search term to URL-friendly format
  const convertToSlug = (str) => {
    return str.trim().toLowerCase().replace(/\s+/g, "-");
  };

  // Handle search on click or Enter
  const performSearch = () => {
    if (searchTerm.trim() !== "") {
      const slugifiedTerm = convertToSlug(searchTerm); // Convert to hyphenated slug
      navigate(`/searchedActivities/${slugifiedTerm}`); // Redirect to search page with slugified term
    }
  };

  // Trigger search on pressing Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-4 sm:p-4">
      <h1 className="text-xl sm:text-3xl font-bold mb-6 text-center">
        Hope you find the right activity.
      </h1>
      {/* Search Bar */}
      <div className="mb-6 flex justify-center items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          onKeyPress={handleKeyPress} // Trigger search on Enter key
          className="w-full sm:w-96 p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
          placeholder="Search activities..."
        />
        <button
          onClick={performSearch}
          className="ml-4 px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          Search
        </button>
      </div>

      {/* Grid of Activities */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        {activities.map((activity) => (
          <Activity key={activity.title} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
