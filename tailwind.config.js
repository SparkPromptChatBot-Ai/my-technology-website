/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c5a76e",
          light: "#d8c08a",
          dark: "#a98c55"
        },
        green: {
          DEFAULT: "#5a6b4d",
          dark: "#4a553e"
        },
        brown: {
          DEFAULT: "#7a5c3f",
          dark: "#634a31"
        },
        beige: "#fdfbf7"
      }
    }
  },
  plugins: []
};
