import React from "react";
import { useParams } from "react-router-dom";
import activitiesData from "../../data/ActivityData.json";
import Activity from "./Activity"; // Reuse the Activity component for displaying results

const SearchedActivities = () => {
  const { searchTerm } = useParams(); // Get the search term from the URL
  const searchTermWithoutPercentage = searchTerm.replace("%", " ");
  console.log(searchTermWithoutPercentage);
  // Split the search term by commas into individual words and convert them to lowercase for case-insensitive search
  const searchWords = searchTermWithoutPercentage
    ? searchTermWithoutPercentage.toLowerCase().split(",")
    : [];

  console.log("Searched words", searchWords);

  // Filter activities based on each search word found in title, description, or requirements
  const filteredActivities = activitiesData.activities.filter((activity) =>
    searchWords.some((word) => {
      const regex = new RegExp(`\\b${word}\\b`, "i"); // Create a regex to match the whole word only

      return (
        (activity.title && regex.test(activity.title)) || // Check title
        (activity.description && regex.test(activity.description)) || // Check description
        (activity.requirements && // Check requirements array
          activity.requirements.some((req) => regex.test(req))) || // Check each requirement
        (activity.steps && // Check steps array
          activity.steps.some(
            (step) =>
              regex.test(step.step_title) || regex.test(step.step_description)
          )) || // Check step title and description
        (activity.category && regex.test(activity.category)) // Check category
      );
    })
  );

  return (
    <div className="max-w-7xl mx-auto py-4 sm:p-4">
      {/* Show search results for term */}
      <div className="mb-6 text-left font-bold text-lg sm:text-2xl text-gray-500">
        Showing results for "{searchWords.join(", ")}"
      </div>

      {/* Grid of Filtered Activities */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
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
