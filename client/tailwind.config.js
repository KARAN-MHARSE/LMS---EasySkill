/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgBlack: "#2d2d2d",
        progressBarGreen: "#4caf50",
        progressBarBlue: "#2196f3",
        progressBarOrange: "#ff9800",
        mainTextColor: "#333333",
        borderColor: "#eeeeee",
      },
    },
  },
  plugins: [],
};
