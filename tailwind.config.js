/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Ultra", "serif"],
        "sub-heading": ["Yeseva One", "cursive"],
        body: ["Rubik", "sans-serif"],
        Cursive: ["Tenor Sans", "sans-serif"],
      },

      backgroundImage: (theme) => ({
        grad: "linear-gradient(25deg, rgba(231,235,239,1) 0%, rgba(183,226,247,1) 100%)",
      }),

      colors: {
        //bg: "#fce0f6",
        //primary: "#51dfb4",
        //secondary: "#d5aef1",
        //accent: "#4d053d",
        //text: "#1f0018",
        //graish: "#c7aac0",
        bg: "#eafcff",
        primary: "#2160c7",
        secondary: "#6ba6ff",
        accent: "#fab06e",
        text: "#000000",
        graish: "#c7aac0",
      },
    },
    screens: {
      xxl: { max: "1500px" },
      xl: { max: "1200px" },
      lg: { max: "1060px" },
      amd: { max: "900px" },
      md: { max: "768px" },
      sm: { max: "550px" },
      xs: { max: "375px" },
    },
  },
  plugins: [],
};
