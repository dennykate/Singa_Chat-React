/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        primary: {
          DEFAULT: "#9f71de",
          100: "#ece3f8",
          200: "#d9c6f2",
          300: "#c5aaeb",
          400: "#b28de5",
          500: "#9f71de",
          600: "#7f5ab2",
          700: "#5f4485",
          800: "#402d59",
          900: "#20172c",
        },
      },
    },
  },
  plugins: [],
};
