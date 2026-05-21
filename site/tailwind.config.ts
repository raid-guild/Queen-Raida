import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#070807",
        "charcoal-soft": "#10100d",
        bronze: "#6f4f2a",
        "bronze-deep": "#3b2a18",
        oxidized: "#52665a",
        "oxidized-deep": "#263c34",
        crimson: "#7d2f2d",
        "crimson-deep": "#4b1918",
        amber: "#d59b4c",
        "amber-dim": "#9b6b2f",
        ivory: "#e2d7bd",
        "ivory-dim": "#aaa18d",
      },
      boxShadow: {
        "amber-haze": "0 0 38px rgba(213, 155, 76, 0.18)",
        "crimson-haze": "0 0 42px rgba(125, 47, 45, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
