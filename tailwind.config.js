/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        DEFAULT: "#ffffff",
      },
      blue: {
        light: "#8cb3ff",
        DEFAULT: "#638af5",
        dark: "#3a61eb",
        darker: "#2b4fcf",
      },
      green: {
        light: "#6fcf97",
        DEFAULT: "#27AE60",
        dark: "#219653",
        darker: "#1e874b",
      },
      warning: {
        DEFAULT: "#D1711C",
      },
    },
    extend: {
      boxShadow: {
        default: "0px 10px 20px rgba(150, 150, 187, 0.1)",
      },
      fontSize: {
        "2rem": "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
