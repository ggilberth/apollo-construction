import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#0A2348",
          800: "#154A9A",
          700: "#2E66B8",
          500: "#6C8FC8",
          100: "#EEF4FD"
        },
        slate: {
          950: "#0F172A",
          900: "#1E293B",
          700: "#334155",
          200: "#E2E8F0",
          50: "#F8FAFC"
        },
        "accent-gold": "#D4A017"
      }
    }
  },
  plugins: []
};

export default config;
