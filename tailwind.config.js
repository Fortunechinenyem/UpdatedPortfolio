/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#645bb4ff",
        white: "#FFFFFF",
        // Your custom color palette for dark theme
        dark: {
          bg: {
            primary: "#0f172a", // slate-900
            secondary: "#1e293b", // slate-800
            tertiary: "#334155", // slate-700
          },
          text: {
            primary: "#f8fafc", // slate-50
            secondary: "#e2e8f0", // slate-200
            tertiary: "#94a3b8", // slate-400
          },
          accent: {
            blue: {
              light: "#3b82f6", // blue-500
              DEFAULT: "#1e40af", // blue-700
              dark: "#1e3a8a", // blue-800
            },
            purple: {
              light: "#a855f7", // purple-500
              DEFAULT: "#7e22ce", // purple-700
            },
            success: {
              light: "#00a859",
              DEFAULT: "#008751",
            },
            gold: "#f59e0b", // amber-500
          },
        },
      },
      fontFamily: {
        nigerian: ["Champion", "Georgia", "serif"],
      },
      animation: {
        float: "float 20s infinite linear",
        "gradient-x": "gradient-x 6s ease infinite",
        shimmer: "shimmer 2s infinite",
        "ping-slow": "ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping-slower": "ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite",
        blob: "blob 7s infinite",
        "float-simple": "float-simple 6s ease-in-out infinite",
        "text-shimmer": "text-shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "ping-slow": {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        "ping-slower": {
          "75%, 100%": { transform: "scale(1.5)", opacity: "0" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "float-simple": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dark-gradient":
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        "accent-gradient":
          "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #7e22ce 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
