import React from "react";
import HeorSection from "./HeorSection";
import Reasons from "./Reasons";
import Ancient from "./Ancient";
import ArtOfDoingNothing from "./Art";
import TurnBoredom from "./TurnBoredom";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <HeorSection />
      <Reasons />
      <Ancient />
      <ArtOfDoingNothing />
      <TurnBoredom />
    </div>
  );
};

export default HomePage;
