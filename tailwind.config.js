/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        berlin: ["Berlin", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.05)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 3.5s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
      colors: {
        main: "#C59A47", // PSS Royal Metallic Gold
        mainD: "#A67C26", // Antique Deep Gold
        mainL: "#E5C066", // Light Gold Highlight
        sec: "#2D0A54", // PSS Deep Imperial Purple
        secD: "#1A0536", // Midnight Violet
        secL: "#48167E", // Vibrant Purple
        purpleBrand: "#2D0A54",
        goldBrand: "#C59A47",
        goldLight: "#FDF8ED",
        cream: "#FAF7F2",
        light: "#FFFFFF",
        dark: "#120224", // Deep Obsidian Purple
        gray: "#64748B",
        grayL: "#F8FAFC",
        grayD: "#334155",
      },
    },
  },
  plugins: [],
};
