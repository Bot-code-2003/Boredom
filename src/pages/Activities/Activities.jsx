import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Activity from "./Activity";
import activityData from "../../data/ActivityData.json";

const Activities = () => {
  const { category } = useParams(); // Extracting the category from the URL parameters
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const navigate = useNavigate(); // useNavigate hook to redirect
  const [clickedPage, setClickedPage] = useState(1);
  const { activities } = activityData;
  const itemsPerPage = 8; // Set number of items per page

  // Handle search on input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update the search term as the user types
  };

  // Convert search term to URL-friendly format
  const convertToSlug = (str) => {
    return str.trim().toLowerCase().replace(/\s+/g, "%");
  };

  // Handle search on click or Enter
  const performSearch = () => {
    if (searchTerm.trim() !== "") {
      const slugifiedTerm = convertToSlug(searchTerm); // Convert to hyphenated slug
      navigate(`/searchedActivities/${slugifiedTerm}`); // Redirect to search page with slugified term
    }
  };

  // Filter activities based on matching category from the URL
  const filteredActivities = activities.filter((activity) => {
    // Split the activity.category by commas, trim whitespace, and convert to lowercase
    const activityCategories = activity.category
      .split(",")
      .map((cat) => cat.trim().toLowerCase());

    return !category || activityCategories.includes(category.toLowerCase());
  });

  const Num_of_pages = Math.ceil(filteredActivities.length / itemsPerPage);

  // Calculate start and end indices for slicing
  const startIndex = (clickedPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentActivities = filteredActivities.slice(startIndex, endIndex);

  const categoriesList = [
    {
      name: "COMFORT",
      link: "/activities/category/comfort",
      bgStyle: "bg-gradient-to-r from-pink-500 to-purple-500",
    },
    {
      name: "FUN",
      link: "/activities/category/fun",
      bgStyle: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
    {
      name: "PRODUCTIVE",
      link: "/activities/category/productive",
      bgStyle: "bg-gradient-to-r from-gray-500 to-blue-200",
    },
    {
      name: "CHALLENGING",
      link: "/activities/category/challenging",
      bgStyle: "bg-gradient-to-r from-red-700 to-gray-800",
    },
    // {
    //   name: "REWARDING",
    //   link: "/activities/category/rewarding",
    //   bgStyle: "bg-gradient-to-r from-yellow-600 to-yellow-400",
    // },
    {
      name: "MOTIVATIONAL",
      link: "/activities/category/motivational",
      bgStyle: "bg-gradient-to-r from-red-400 to-red-700",
    },
    {
      name: "SELF-REFLECTION",
      link: "/activities/category/self-reflection",
      bgStyle: "bg-gradient-to-r from-blue-400 to-blue-700",
    },
  ];

  // To set the default page no to 1 when user selectes the category.
  useEffect(() => {
    window.scrollTo(0, 0);
    setClickedPage(1);
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto py-2 sm:p-4">
      {/* Categories select */}
      <div className="mb-6 grid  grid-cols-2 text-center sm:flex sm:flex-wrap sm:justify-center gap-2 items-center">
        {categoriesList.map((eachcategory) => {
          const isActive = eachcategory.name.toLowerCase() === category;

          return (
            <Link
              to={eachcategory.link}
              key={eachcategory.name}
              className={`px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-lg border transition-all duration-200 
                ${
                  isActive
                    ? eachcategory.bgStyle + " text-white font-bold"
                    : "text-black"
                }`}
            >
              {eachcategory.name}
            </Link>
          );
        })}
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
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
        {currentActivities.length > 0 ? (
          currentActivities.map((activity) => (
            <Activity key={activity.title} {...activity} />
          ))
        ) : (
          <p>No activities found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-5 mr-5 text-gray-500">
        {(() => {
          const pageNumbers = [];
          for (let i = 1; i <= Num_of_pages; i++) {
            pageNumbers.push(i);
          }
          return pageNumbers.map((page, index) => (
            <span
              onClick={() => setClickedPage(page)}
              key={index}
              className={`cursor-pointer ${
                clickedPage === page ? "font-bold text-gray-700" : ""
              }`} // Highlight current page
            >
              {page}
              {index < Num_of_pages - 1 && ", "}{" "}
              {/* Add a comma after the number except for the last one */}
            </span>
          ));
        })()}
      </div>
    </div>
  );
};

export default Activities;
