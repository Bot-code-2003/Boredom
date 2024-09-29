import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage";
import Activities from "./pages/Activities/Activities";
import DetailedActivity from "./pages/Activities/DetailedActivity";
import SearchedActivities from "./pages/Activities/SearchedActivites";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-monospace">
      <Navbar />
      <div className="min-h-screen p-5 sm:px-10 sm:py-5 font-monospace">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:slug" element={<DetailedActivity />} />
          <Route
            path="/searchedActivities/:searchTerm"
            element={<SearchedActivities />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
