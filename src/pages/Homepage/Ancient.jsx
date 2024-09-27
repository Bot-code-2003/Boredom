import React, { useState, useEffect } from "react";
import Papa from "papaparse"; // Make sure to install papaparse

const Ancient = () => {
  const [facts, setFacts] = useState([]);
  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    // Fetch the CSV file
    fetch("src/pages/Homepage/facts.csv") // Update the path accordingly
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true });
        // Filter out any empty entries
        const validFacts = parsedData.data.filter((entry) => entry.fact);
        setFacts(validFacts);
      });
  }, []);

  const getRandomFact = () => {
    if (facts.length > 0) {
      const randomIndex = Math.floor(Math.random() * facts.length);
      setRandomFact(facts[randomIndex].fact);
    } else {
      setRandomFact("No facts available.");
    }
  };

  return (
    <div className="bg-white  shadow-lg rounded-lg p-6 sm:p-10">
      {/* Introduction Section */}
      <div>
        <h1 className="text-3xl text-center sm:text-5xl font-bold text-gray-800 mb-6">
          Learning from the Past
        </h1>
        <p className="text-md sm:text-lg mx-auto max-w-5xl text-center mb-5">
          From ancient philosophers to the natural world, boredom has been a
          catalyst for creativity and reflection. Ancient Greeks found wisdom in
          moments of stillness, while animals often engage in play when they
          have nothing to do. Nature teaches us that sometimes, pausing can lead
          to profound insights.
        </p>
      </div>

      {/* Grid Section for Animals */}
      <div className="grid grid-cols-1 mb-6 text-white sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Water Animals Section */}
        <div className="bg-[url('/src/assets/BlueBg.svg')] bg-cover p-5 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Water Animals</h2>
          <p className="text-md text-white ">
            Water animals, like dolphins, often engage in play to stimulate
            their minds, using bubbles and waves to stay entertained.
          </p>
        </div>

        {/* Land Animals Section */}
        <div className="bg-[url('/src/assets/GreenBg.svg')] bg-cover p-5 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Land Animals</h2>
          <p className="text-md text-white">
            Elephants are known to create games, such as mud wrestling, to keep
            themselves active and social, preventing boredom.
          </p>
        </div>

        {/* Humans Section */}
        <div className="bg-[url('/src/assets/BrownBg.svg')] bg-cover p-5 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Humans</h2>
          <p className="text-md text-white">
            Humans often seek new experiences, whether through travel, hobbies,
            or learning, to avoid the monotony of daily life.
          </p>
        </div>

        {/* Birds Section */}
        <div className="bg-[url('/src/assets/SkyBg.svg')] bg-cover p-5 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-2">Birds</h2>
          <p className="text-md text-white">
            Many birds engage in singing and complex flight patterns to
            communicate and stay mentally stimulated.
          </p>
        </div>
      </div>

      {/* Observation and Conclusion Section
      <div className="mt-10 text-center ">
        <h3 className="text-2xl font-bold mb-3">Observation and Conclusion</h3>
        <p className="text-lg mx-auto max-w-5xl ">
          All living beings exhibit unique behaviors to manage boredom. From
          playfulness in animals to creativity in humans, these activities not
          only prevent boredom but also promote social interactions and
          cognitive development. Understanding these behaviors can help us
          appreciate the value of creativity and engagement in our daily lives.
        </p>
      </div> */}

      {/* Random Fact Button
      <div className="mt-8 mx-auto mb-6 flex flex-col items-center justify-center">
        <button
          onClick={getRandomFact}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none transition duration-300"
        >
          Random Fact
        </button>
        {randomFact && (
          <p className="mt-4 text-lg font-semibold text-gray-800">
            {randomFact}
          </p>
        )}
      </div> */}
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:from-purple-500 hover:to-indigo-500 transition duration-300 focus:outline-none">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Ancient;
