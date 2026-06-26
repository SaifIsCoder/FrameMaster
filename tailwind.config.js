/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4682B4',   // Steel Blue
        accent: '#C0C0C0',    // Silver
        background: '#FFFFFF',// White
        card: '#F3F4F6',      // Light Grey (Tailwind gray-100)
      }
    },
  },
  plugins: [],
}