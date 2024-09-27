import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
  Cell,
} from "recharts";

const BoredomChart = ({ variant }) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const [expandedIndex, setExpandedIndex] = useState(null); // Track the expanded index for mobile

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleTabletChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addListener(handleTabletChange); // Add listener
    return () => mediaQuery.removeListener(handleTabletChange); // Cleanup listener
  }, []);

  const data = [
    {
      reason: "Lack of stimulation",
      value:
        variant === "18-24"
          ? 60
          : variant === "25-34"
          ? 30
          : variant === "35-44"
          ? 25
          : variant === "45-54"
          ? 15
          : 10,
      info: "Feeling bored due to a lack of new and exciting challenges.",
    },
    {
      reason: "Routine",
      value:
        variant === "18-24"
          ? 20
          : variant === "25-34"
          ? 50
          : variant === "35-44"
          ? 35
          : variant === "45-54"
          ? 25
          : 15,
      info: "Boredom arises from monotonous daily routines.",
    },
    {
      reason: "Disinterest",
      value:
        variant === "18-24"
          ? 10
          : variant === "25-34"
          ? 40
          : variant === "35-44"
          ? 30
          : variant === "45-54"
          ? 40
          : 50,
      info: "Activities no longer stimulate interest or excitement.",
    },
    {
      reason: "Social media",
      value:
        variant === "18-24"
          ? 70
          : variant === "25-34"
          ? 60
          : variant === "35-44"
          ? 40
          : variant === "45-54"
          ? 30
          : 20,
      info: "Excessive time on social media can lead to boredom.",
    },
    {
      reason: "Free time",
      value:
        variant === "18-24"
          ? 50
          : variant === "25-34"
          ? 40
          : variant === "35-44"
          ? 35
          : variant === "45-54"
          ? 25
          : 20,
      info: "An abundance of free time without purpose can cause boredom.",
    },
    {
      reason: "Lack of challenge",
      value:
        variant === "18-24"
          ? 30
          : variant === "25-34"
          ? 50
          : variant === "35-44"
          ? 40
          : variant === "45-54"
          ? 60
          : 70,
      info: "Insufficient challenge leads to a lack of engagement.",
    },
    {
      reason: "Task overload",
      value:
        variant === "18-24"
          ? 20
          : variant === "25-34"
          ? 30
          : variant === "35-44"
          ? 20
          : variant === "45-54"
          ? 30
          : 30,
      info: "Too many tasks at once can also lead to boredom.",
    },
    {
      reason: "Isolation",
      value:
        variant === "18-24"
          ? 40
          : variant === "25-34"
          ? 50
          : variant === "35-44"
          ? 60
          : variant === "45-54"
          ? 70
          : 80,
      info: "Isolation can increase feelings of boredom due to lack of interaction.",
    },
  ];

  // Custom Tooltip for showing detailed info
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#392a74", // light shade
            padding: "10px",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <p>{payload[0].payload.reason}</p>
          <p>{payload[0].payload.info}</p>
          <p>
            <b>{payload[0].value}%</b>
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom Tick to handle text wrapping and rotation
  const CustomTick = ({ x, y, payload }) => {
    const words = payload.value.split(" ");
    const lines = [];
    let line = "";
    words.forEach((word) => {
      if ((line + word).length < 10) {
        line += `${word} `;
      } else {
        lines.push(line);
        line = `${word} `;
      }
    });
    lines.push(line);

    return (
      <g transform={`translate(${x},${y + 10})`}>
        {lines.map((line, index) => (
          <Text
            key={index}
            x={0}
            y={index * 12}
            textAnchor="middle"
            fontSize="12"
            fill="#666"
          >
            {line.trim()}
          </Text>
        ))}
      </g>
    );
  };

  return (
    <div className="overflow-auto max-h-[400px]">
      <ResponsiveContainer width="100%" height={400}>
        {isMobile ? (
          <div className="bg-indigo-100 bg-opacity-40 rounded shadow-md p-4 text-indigo-900">
            <h3 className="text-xl font-bold mb-7 underline text-indigo-700">
              Reasons for Boredom
            </h3>
            <ul className="list-disc pl-5 text-left text-gray-700">
              {data.map((entry, index) => (
                <li key={entry.reason} className="mb-4">
                  <div
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="cursor-pointer font-semibold"
                  >
                    {entry.reason}:{" "}
                    <span className="text-indigo-600 font-bold">
                      {entry.value}%
                    </span>
                  </div>
                  {expandedIndex === index && (
                    <p className="bg-indigo-500 text-white rounded p-2 mt-1">
                      {entry.info}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            onMouseLeave={() => setExpandedIndex(null)}
          >
            <XAxis
              dataKey="reason"
              interval={0}
              tick={<CustomTick />}
              height={80}
            />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar
              dataKey="value"
              fill="#6b46c1" // Indigo-purple bar color
              onMouseOver={(e, index) => setExpandedIndex(index)}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default BoredomChart;
