import React, { useState } from "react";
import DiaryLog from "./DairyLog";

const Diary = () => {
  const [logs, setLogs] = useState([]);
  const [newEntry, setNewEntry] = useState({
    date: "",
    content: "",
    bgColor: "bg-white",
  });
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(null); // Keep track of the entry being edited

  // Background color options
  const bgColors = [
    "bg-gradient-to-r from-blue-400 to-purple-500",
    "bg-gradient-to-r from-green-400 to-blue-500",
    "bg-gradient-to-r from-yellow-400 to-red-500",
    "bg-gradient-to-r from-pink-400 to-purple-500",
    "bg-gradient-to-r from-indigo-400 to-green-500",
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-purple-300",
  ];

  // Handle input changes for new entry or editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  // Save the new diary entry
  const saveEntry = () => {
    if (newEntry.date && newEntry.content) {
      if (isEditing !== null) {
        const updatedLogs = [...logs];
        updatedLogs[isEditing] = newEntry;
        setLogs(updatedLogs);
        setIsEditing(null);
      } else {
        setLogs([...logs, newEntry]);
      }
      setNewEntry({ date: "", content: "", bgColor: "bg-white" });
      setIsCreating(false);
    } else {
      alert("Please fill in both the date and content.");
    }
  };

  // Load selected log for editing
  const loadLogForEditing = (index) => {
    setNewEntry(logs[index]);
    setIsCreating(true);
    setIsEditing(index);
  };

  return (
    <div className="diary-container min-h-screen bg-no-repeat bg-cover p-6">
      <div className="mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">
          -<span className="text-purple-500">*</span>- Diary -
          <span className="text-purple-500">*</span>-
        </h1>

        {/* If creating or editing an entry, show the form */}
        {isCreating ? (
          <div className="create-entry p-6 bg-transparent border border-gray-300 rounded-lg shadow-md">
            <div className="mb-4">
              <input
                type="date"
                name="date"
                value={newEntry.date}
                onChange={handleChange}
                className="w-full p-2 text-lg bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Select Date"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="content"
                value={newEntry.content}
                onChange={handleChange}
                className="w-full p-2 h-40 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg"
                placeholder="Write your diary entry here..."
              />
            </div>

            {/* Background color selection */}
            <div className="mb-4">
              <p>Select Background:</p>
              <div className="flex space-x-2 mt-2">
                {bgColors.map((color, index) => (
                  <button
                    key={index}
                    className={`${color} w-10 h-10 rounded-full focus:outline-none`}
                    onClick={() => setNewEntry({ ...newEntry, bgColor: color })}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={saveEntry}
              className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition"
            >
              {isEditing !== null ? "Update Entry" : "Save Entry"}
            </button>
            <button
              onClick={() => setIsCreating(false)}
              className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsCreating(true)}
            className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md mb-6 hover:bg-green-600 transition"
          >
            Create New Diary Entry
          </button>
        )}

        {/* Display all logs */}
        <div className="diary-logs flex flex-wrap gap-5">
          {logs.length === 0 ? (
            <p className="text-lg">
              No diary entries yet. Start by creating one!
            </p>
          ) : (
            logs.map((log, index) => (
              <DiaryLog
                key={index}
                date={log.date}
                content={log.content}
                bgColor={log.bgColor}
                onClick={() => loadLogForEditing(index)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Diary;
