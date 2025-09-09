/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f3faf6",
          100: "#e6f5ee",
          200: "#c7e8d8",
          300: "#9fd6bd",
          400: "#6fbd99",
          500: "#48a57c",
          600: "#388764",
          700: "#2f6c52",
          800: "#295543",
          900: "#1d3a2e",
        }
      }
    },
  },
  plugins: [],
};
