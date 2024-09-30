import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import activitiesData from "../../data/ActivityData.json";
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
  InstapaperShareButton,
  InstapaperIcon,
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Create a dynamic URL to share the current activity
  const shareUrl = window.location.href; // The current URL

  return (
    <div className="max-w-4xl mx-auto py-4 px-0 sm:py-8 sm:px-4 whitespace-pre-line">
      {/* Image Section */}
      <div className="mb-8">
        <img
          src={activity.img}
          alt={activity.title}
          className="w-full h-auto mb-2 rounded-lg object-cover"
        />
        <div className="flex flex-row sm:flex-row justify-between items-center">
          <p
            className={`rounded uppercase text-sm sm:text-lg font-bold p-2 inline-block ${
              activity.category === "motivational"
                ? "bg-red-500 text-white"
                : activity.category === "comfort"
                ? "bg-pink-300"
                : activity.category === "productive"
                ? "bg-black text-white"
                : ""
            }`}
          >
            {activity.category}
          </p>
          <div className="flex items-center gap-1">
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon className="w-8 h-8 lg:w-10 lg:h-10" round />
            </FacebookShareButton>
            <TwitterShareButton>
              <TwitterIcon className="w-8 h-8 lg:w-10 lg:h-10" round />
            </TwitterShareButton>
            <WhatsappShareButton>
              <WhatsappIcon className="w-8 h-8 lg:w-10 lg:h-10" round />
            </WhatsappShareButton>
            <RedditShareButton>
              <RedditIcon className="w-8 h-8 lg:w-10 lg:h-10" round />
            </RedditShareButton>
            <LinkedinShareButton>
              <LinkedinIcon className="w-8 h-8 lg:w-10 lg:h-10" round />
            </LinkedinShareButton>
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-5xl font-bold text-gray-800 mb-8">
        {activity.title}
      </h1>

      {/* Description */}
      <div className="prose max-w-none mb-8">
        {activity.description && (
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-['poppins'] mb-7 whitespace-pre-line">
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
              <p className="text-gray-800 mb-1 underline text-base sm:text-lg whitespace-pre-line font-['poppins']">
                {step.step_title}
              </p>
              <p className="text-gray-600 text-base sm:text-lg whitespace-pre-line font-['poppins']">
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
          <p className="text-gray-600 text-base sm:text-lg font-['poppins']">
            {activity.estimated_time}
          </p>
        </div>
      )}

      {/* Share Section */}
    </div>
  );
};

export default DetailedActivity;
