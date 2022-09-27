/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#00f6ff",
        dimWhite: "rgba(0, 0, 0, 0.7)",
        dimBlue: "rgba(78, 155, 164, 0.93)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};