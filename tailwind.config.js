/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        deskTop: "url('../imgs/banner2.jpg')",
      },
      colors: {
        bag: "#35013f",
        db: "#222831",
        porp: "#6B21A8",
        "porp-2": "#9896f1",
      },
      aspectRatio: {
        vertical: 300 / 1080,
      },
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
