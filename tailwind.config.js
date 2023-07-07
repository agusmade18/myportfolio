/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "science-blue": {
        50: "#ecf9ff",
        100: "#d4efff",
        200: "#b3e5ff",
        300: "#7fd7ff",
        400: "#42beff",
        500: "#179cff",
        600: "#007bff",
        700: "#0063fc",
        800: "#024dc5",
        900: "#09479f",
        950: "#0b2c60",
      },

      "buttered-rum": {
        50: "#fdf9e9",
        100: "#faf1c7",
        200: "#f6e192",
        300: "#f1c953",
        400: "#ebb124",
        500: "#db9917",
        600: "#b16e10",
        700: "#975411",
        800: "#7d4316",
        900: "#6b3718",
        950: "#3e1c0a",
      },
    },

    extend: {
      fontFamily: {
        GreatVibes: ["Great Vibes", "cursive"],
        Oswald: ["Oswald", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
        Golos: ["Golos Text", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
