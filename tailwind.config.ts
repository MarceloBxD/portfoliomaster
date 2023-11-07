import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans"],
        eczar: ["Eczar", "serif"],
      },
      fontSize: {
        "section-title": "40px",
        "section-subtitle": "24px",
      },
      fontWeight: {
        "section-title": "700",
        "section-subtitle": "500",
      },
      colors: {
        "main-blue": "#46DFC5",
      },
    },
  },
  plugins: [],
};
export default config;
