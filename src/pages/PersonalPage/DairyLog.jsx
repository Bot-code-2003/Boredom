import React from "react";

const DiaryLog = ({ date, content, bgColor, onClick }) => {
  return (
    <div
      className={`log-card p-4 mb-4 max-w-[300px] rounded-lg shadow-md cursor-pointer ${bgColor}`}
      onClick={onClick}
    >
      <h3 className="text-lg font-bold">{date}</h3>
      <p className="text-sm">
        {content.length > 100 ? content.slice(0, 100) + "..." : content}
      </p>
    </div>
  );
};

export default DiaryLog;
