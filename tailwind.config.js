/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "indigo": "#161622",
        "light-indigo": "#1e1e2d",
        "orange": "#FF8C00",
        "yellow": "#FFA300",
        "light-gray": "#CDCDE0",
        "blue-gray": "#232533"
      }
    },
  },
  plugins: [],
}