import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage";
import PersonalPage from "./pages/PersonalPage/PersonalPage";

const App = () => {
  return (
    <div className="min-h-screen p-5 sm:p-10 font-monospace">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal" element={<PersonalPage />} />
      </Routes>
    </div>
  );
};

export default App;
