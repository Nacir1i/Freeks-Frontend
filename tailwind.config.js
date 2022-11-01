/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#242038",
        secondary: "#231942",
        third: "#5E548E",
      },
      height: {
        test: "var(--height)",
      },
      aspectRatio: {
        ratio: "1920 / 200",
        ratio2: "1920 / 150",
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1153px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
