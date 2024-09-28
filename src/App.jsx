import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage";
import Activities from "./pages/Activities/Activities";
import DetailedActivity from "./pages/Activities/DetailedActivity";
import SearchedActivities from "./pages/Activities/SearchedActivites";

const App = () => {
  return (
    <div className="min-h-screen p-5 sm:p-10 font-monospace">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:slug" element={<DetailedActivity />} />
        <Route
          path="searchedActivities/:searchTerm"
          element={<SearchedActivities />}
        />
      </Routes>
    </div>
  );
};

export default App;
