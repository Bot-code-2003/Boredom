/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ebe9fc",
        secondaryText: "#b9b9b9",
        background: "#09080c",
        primary: "#ada3d1", // Main button, main text (gradient with accent)
        secondary: "#392a74", // secondary button, card bg.
        accent: "#5d3dd1", // For minor details like option icon, card numbering, some visual icons.
      },
      fontFamily: {
        monospace: ["Space Mono", "monospace"],
        alike: ["Alike", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/**
 * Headings - text-3xl sm:text-5xl mb-4
 * sub headings -xl
 * paragraphs - lg
 */
