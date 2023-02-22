const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      colors: {
        primary: colors.zinc["900"],
        secondary: colors.yellow,
      },
    },
  },
  plugins: [],
};
