import React from "react";

const ColorPaletteExample = () => {
  return (
    <div className="bg-bgPrimary min-h-screen p-4">
      <h1 className="text-textPrimary text-center mb-8">
        Color Palette Example
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-bgSecondary p-4 rounded-lg shadow-md">
          <h2 className="text-textPrimary mb-2">Primary Color</h2>
          <p className="text-textSecondary">
            This is the primary color, used for primary buttons and accents.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Primary Button
          </button>
        </div>
        <div className="bg-bgSecondary p-4 rounded-lg shadow-md">
          <h2 className="text-textPrimary mb-2">Secondary Color</h2>
          <p className="text-textSecondary">
            This is the secondary color, used for secondary accents and
            highlights.
          </p>
          <button className="bg-secondary text-white px-4 py-2 rounded-md">
            Secondary Button
          </button>
        </div>
        <div className="bg-bgAccent p-4 rounded-lg shadow-md">
          <h2 className="text-textPrimary mb-2">Accent Color</h2>
          <p className="text-textSecondary">
            This is the accent color, used for important elements that need to
            stand out.
          </p>
          <button className="bg-accent text-white px-4 py-2 rounded-md">
            Accent Button
          </button>
        </div>

        <div className="bg-bgSecondary p-4 rounded-lg shadow-md">
          <h2 className="text-textPrimary mb-2">Success Color</h2>
          <p className="text-textSecondary">
            This is the success color, used for success messages and positive
            indicators.
          </p>
          <button className="bg-success text-white px-4 py-2 rounded-md">
            Success Button
          </button>
        </div>
        <div className="bg-bgSecondary p-4 rounded-lg shadow-md">
          <h2 className="text-textPrimary mb-2">Info Color</h2>
          <p className="text-textSecondary">
            This is the info color, used for informational cues.
          </p>
          <button className="bg-info text-white px-4 py-2 rounded-md">
            Info Button
          </button>
        </div>
        <div className="bg-bgSecondary p-4 rounded-lg shadow-md">
          <h2 className="text-textPrimary mb-2">Warning Color</h2>
          <p className="text-textSecondary">
            This is the warning color, used for warnings or attention-needed
            elements.
          </p>
          <button className="bg-warning text-white px-4 py-2 rounded-md">
            Warning Button
          </button>
        </div>
        <div className="bg-bgSecondary p-4 rounded-lg shadow-md">
          <h2 className="text-textPrimary mb-2">Error Color</h2>
          <p className="text-textSecondary">
            This is the error color, used for error messages or critical
            actions.
          </p>
          <button className="bg-error text-white px-4 py-2 rounded-md">
            Error Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteExample;
