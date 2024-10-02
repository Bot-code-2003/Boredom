import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import activitiesData from "../../data/ActivityData.json";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const DetailedActivity = () => {
  const { slug } = useParams(); // Extracting the slug from the URL parameters
  const activity = activitiesData.activities.find(
    (activity) => activity.slug === slug
  ); // Find the matching activity

  // If no activity is found
  if (!activity) {
    return <div className="text-center p-10">Activity not found.</div>;
  }

  const categories = activity.category.split(",").map((cat) => cat.trim()); // Splitting multiple categories

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Create a dynamic URL to share the current activity
  const shareUrl = window.location.href; // The current URL

  return (
    <div className="max-w-4xl mx-auto py-4 px-0 sm:py-8 sm:px-4 whitespace-pre-line">
      {/* Image Section */}
      <div className="mb-8">
        {/* Title */}
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-8">
          {activity.title}
        </h1>
        <img
          src={activity.img}
          alt={activity.imgalt}
          className="w-full h-auto mb-2 object-cover"
        />
        <div className="flex flex-col gap-2 sm:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {/* Rendering Multiple Categories */}
            {categories.map((category, index) => (
              <Link
                to={`/searchedActivities/${category}`}
                key={index}
                className={`uppercase cursor-pointer text-sm sm:text-lg font-bold p-2 inline-block ${
                  category === "motivational"
                    ? "bg-gradient-to-r from-red-400 to-red-700 text-white"
                    : category === "comfort"
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                    : category === "productive"
                    ? "bg-gradient-to-r from-gray-500 to-blue-200 text-white"
                    : category === "fun"
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                    : category === "self-reflection"
                    ? "bg-gradient-to-r from-blue-400 to-blue-700 text-white"
                    : category === "challenging"
                    ? "bg-gradient-to-r from-red-700 to-gray-800 text-white"
                    : ""
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon className="w-8 h-8 lg:w-10 lg:h-10" round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon className="w-8 h-8 lg:w-10 lg:h-10" round />
            </TwitterShareButton>
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon className="w-8 h-8 lg:w-10 lg:h-10" round />
            </WhatsappShareButton>
            <RedditShareButton url={shareUrl}>
              <RedditIcon className="w-8 h-8 lg:w-10 lg:h-10" round />
            </RedditShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon className="w-8 h-8 lg:w-10 lg:h-10" round />
            </LinkedinShareButton>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="prose max-w-none mb-8">
        {activity.description && (
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-poppins mb-7 whitespace-pre-line">
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
          <ul className="list-disc list-inside text-gray-600 text-base sm:text-lg leading-relaxed">
            {activity.requirements.map((requirement, index) => (
              <li className="font-poppins" key={index}>
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
              <p className="text-gray-800 mb-1 underline text-base sm:text-lg whitespace-pre-line font-poppins">
                {step.step_title}
              </p>
              <p className="text-gray-600 text-base sm:text-lg whitespace-pre-line font-poppins">
                {step.step_description && step.step_description}
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
          <p className="text-gray-600 text-base sm:text-lg font-poppins">
            {activity.estimated_time}
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailedActivity;
