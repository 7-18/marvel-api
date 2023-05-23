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
        "character-card":
          "linear-gradient(360deg, #090C14 0%, #171A20 36.49%, #272C34 114.84%)",
      },
      backgroundColor: {
        "content-card": "#0E0F0F",
        "progress-card": "#1E2328",
        gold: "#C89B3C",
      },
      textColor: {
        gold: "#C89B3C",
        progress: "#1DA5B4",
      },
      fontFamily: {
        beaufort: ["Beaufort Regular", "Spiegel"],
        spiegel: ["Spiegel", "sans-serif"],
      },
      boxShadow: {
        progress:
          "0px 0px 4px #FFA942, 0px 0px 4px rgba(255, 169, 66, 0.25), 0px 0px 7px rgba(255, 169, 66, 0.25)",
        'active-card':
          "0px 0px 12px #FFA942, 0px 0px 12px rgba(255, 169, 66, 0.25), 0px 0px 10px rgba(255, 169, 66, 0.25)",
      },
      borderColor: {
        gold: "#C89B3C",
      }
    },
  },
  plugins: [],
};
