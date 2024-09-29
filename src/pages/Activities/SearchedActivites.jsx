import React from "react";
import { useParams } from "react-router-dom";
import activitiesData from "../../data/ActivityData.json";
import Activity from "./Activity"; // Reuse the Activity component for displaying results

const SearchedActivities = () => {
  const { searchTerm } = useParams(); // Get the search term from the URL

  // Split the search term by hyphens into individual words and convert them to lowercase for case-insensitive search
  const searchWords = searchTerm ? searchTerm.toLowerCase().split("-") : [];

  // Filter activities based on each search word found in title, description, or requirements
  const filteredActivities = activitiesData.activities.filter((activity) =>
    searchWords.some(
      (word) =>
        (activity.title && activity.title.toLowerCase().includes(word)) || // Check title
        (activity.description &&
          activity.description.toLowerCase().includes(word)) || // Check description
        (activity.requirements &&
          activity.requirements.some((req) =>
            req.toLowerCase().includes(word)
          )) || // Check requirements array
        activity.steps.some(
          (step) =>
            step.step_title.toLowerCase().includes(word) ||
            step.step_description.toLowerCase().includes(word)
        ) // Check steps array
    )
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Show search results for term */}
      <div className="mb-6 text-left font-bold text-xl sm:text-3xl text-gray-600">
        Showing results for "{searchWords.join(", ")}"
      </div>

      {/* Grid of Filtered Activities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <Activity key={activity.slug} {...activity} />
          ))
        ) : (
          <div className="col-span-4 text-center text-gray-500">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchedActivities;
