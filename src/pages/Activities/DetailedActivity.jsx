import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import activitiesData from "../../data/ActivityData.json";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {/* Description */}
      <div className="prose max-w-none mb-8">
        {activity.description && (
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-['poppins'] mb-7 whitespace-pre-line">
            {activity.description}
          </p>
        )}
      </div>

      {/* Requirements Section */}
      {activity.requirements && activity.requirements.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Requirements
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg leading-relaxed">
            {activity.requirements.map((requirement, index) => (
              <li className="font-['poppins']" key={index}>
                {requirement}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Steps Section */}
      {activity.steps && activity.steps.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Steps to Follow
          </h2>
          {activity.steps.map((step, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg sm:text-xl leading-relaxed font-bold text-black">
                {step.step_title}
              </p>
              <p className="text-gray-700 text-base sm:text-lg whitespace-pre-line font-['poppins']">
                {step.step_description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Estimated Time */}
      {activity.estimated_time && (
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Estimated Time
          </h2>
          <p className="text-gray-700 text-base sm:text-lg font-['poppins']">
            {activity.estimated_time}
          </p>
        </div>
      )}

      {/* Recommended Articles */}
    </div>
  );
};

export default DetailedActivity;
