/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        profilePink: {
          light: "#ffe4e6",
          soft: "#c5999d",
          rose: "#c67c82",
          darkRose: "#953949",
          deepWine: "#b8082d",
          bg: "#14030a",
          surface: "#210612",
          card: "rgba(35, 9, 21, 0.8)",
          border: "rgba(244, 63, 94, 0.25)",
          borderHover: "rgba(251, 113, 133, 0.6)",
          vibrant: "#f43f5e",
          glow: "#fb7185",
          hot: "#f52f57",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pink-grid":
          "linear-gradient(to right, rgba(244, 63, 94, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(244, 63, 94, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(244, 63, 94, 0.4)",
        "glow-lg": "0 0 50px -10px rgba(245, 47, 87, 0.5)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        spinSlow: "spin 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};
