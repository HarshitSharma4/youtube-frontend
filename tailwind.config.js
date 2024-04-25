/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      text: "#ffffff",
      background: "#0a0004",
      primary: "#7b7b7b",
      secondary: "#0e7593",
      accent: "#652bea",
      error: "#ff3333",
      success: "#22bb33",
    },
    extend: {},
  },
  plugins: [],
};
