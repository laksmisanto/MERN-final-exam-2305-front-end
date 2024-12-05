/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["Saira", "sans-serif"],
      secondary: ["Rowdies", "sans-serif"],
    },
    colors: {
      primary: "#2AAA94",
      secondary: "#F2F2F2",
      white: "#FFFFFF",
      black: "#323232",
      gray: "#4E596B",
      bgPrimary: "#083F9B",
      bgSecondary: "#7F56D9",
      bannerPrimary: "#04016C",
      bannerSecondary: "#4A16BD",

      menuColor: "#1B2336",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
