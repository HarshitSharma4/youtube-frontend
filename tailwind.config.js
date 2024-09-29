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
    extend: {
      keyframes: {
        "loading-dot": {
          "0%, 100%": {
            height: "20px",
          },
          "25%": {
            height: "35px",
          },
          "50%": {
            height: "50px",
          },
          "75%": {
            height: "35px",
          },
        },
      },
      animation: {
        "loading-dot-1": "loading-dot 1.2s ease-in-out infinite",
        "loading-dot-2": "loading-dot 1.2s ease-in-out infinite 0.2s",
        "loading-dot-3": "loading-dot 1.2s ease-in-out infinite 0.4s",
        "loading-dot-4": "loading-dot 1.2s ease-in-out infinite 0.6s",
      },
    },
  },
  plugins: [],
};
