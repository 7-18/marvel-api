/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "navigation-hover":
          "linear-gradient(180deg, #231F20 0%, rgba(34, 34, 34, 0) 100%)",
        "progress-bar":
          "linear-gradient(180deg, #31969D 0%, #65E6F4 31.77%, #24AEBD 66.15%, #1299A8 98.96%)",
      },
      backgroundColor: {
        "content-card": "#0E0F0F",
        "progress-card": "#1E2328",
      },
      textColor: {
        gold: "#C89B3C",
        progress: "#1DA5B4",
      },
      fontFamily: {
        beaufort: ["Beaufort Regular", "sans-serif"],
      },
      boxShadow: {
        progress:
          "0px 0px 4px #FFA942, 0px 0px 4px rgba(255, 169, 66, 0.25), 0px 0px 7px rgba(255, 169, 66, 0.25)",
      },
    },
  },
  plugins: [],
};
