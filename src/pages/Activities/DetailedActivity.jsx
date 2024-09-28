import React from "react";
import { useParams } from "react-router-dom";
import activitiesData from "../../data/activities.json";
import Activity from "./Activity"; // Reuse Activity component for recommendations

const DetailedActivity = () => {
  const { slug } = useParams(); // Extracting the slug from the URL parameters
  const activity = activitiesData.activities.find(
    (activity) => activity.slug === slug
  ); // Find the matching activity

  // If no activity is found
  if (!activity) {
    return <div className="text-center p-10">Activity not found.</div>;
  }

  // Find similar articles (same age category)
  const recommendedActivities = activitiesData.activities
    .filter(
      (a) =>
        a.age_category === activity.age_category && a.title !== activity.title
    )
    .slice(0, 4); // Limit to 4 recommended articles.

  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-8 sm:px-4 whitespace-pre-line">
      {/* Image Section */}
      <div className="mb-6">
        <img
          src={activity.img}
          alt={activity.title}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-5xl font-bold text-gray-800 mb-4">
        {activity.title}
      </h1>

      {/* Age Category */}
      <p className="text-md sm:text-lg text-indigo-600 font-semibold mb-7">
        {activity.age_category}
      </p>

      {/* Description */}
      <div className="prose max-w-none mb-8">
        {activity.description && (
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-['poppins'] mb-7 whitespace-pre-line">
            {activity.description}
          </p>
        )}
        {activity.superdescription && (
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-['poppins'] mb-7 whitespace-pre-line">
            {activity.superdescription}
          </p>
        )}
        {activity.points &&
          activity.points.map((point, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg sm:text-xl leading-relaxed whitespace-pre-line font-bold mb-2 text-black">
                {point.title}
              </p>
              <p className="text-gray-700 text-base sm:text-lg whitespace-pre-line font-['poppins']">
                {point.details}
              </p>
            </div>
          ))}
      </div>

      {/* Recommended Articles */}
      {recommendedActivities.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedActivities.map((recActivity) => (
              <Activity
                key={recActivity.slug}
                age_category={recActivity.age_category}
                title={recActivity.title}
                img={recActivity.img}
                slug={recActivity.slug}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedActivity;
