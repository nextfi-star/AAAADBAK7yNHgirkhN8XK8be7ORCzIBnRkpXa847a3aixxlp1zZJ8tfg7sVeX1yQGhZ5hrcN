/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  theme: {
    colors: {
      bgwhiteLight: "#EFEFEF",
      bgdark: "#3A3939",
      blue: "#205BC9",
    },
    extend: {
      rotate: {
        270: "270deg",
      },
    },
  },
};
