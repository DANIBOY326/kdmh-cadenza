import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C1121F",
          50: "#fdf2f2",
          100: "#fce4e4",
          200: "#facdd0",
          300: "#f5a7ab",
          400: "#ee7279",
          500: "#e2464f",
          600: "#c1121f",
          700: "#a3101b",
          800: "#881118",
          900: "#721317",
          950: "#3e0608",
        },
        gold: {
          DEFAULT: "#F4B400",
          50: "#fffbeb",
          100: "#fff3c6",
          200: "#ffe680",
          300: "#ffd23a",
          400: "#f4b400",
          500: "#d99500",
          600: "#b07200",
          700: "#8a5400",
          800: "#6d4200",
          900: "#5a3700",
        },
        brand: {
          black: "#111111",
          "dark-1": "#1a1a1a",
          "dark-2": "#222222",
          "dark-3": "#2a2a2a",
          "gray-1": "#444444",
          "gray-2": "#666666",
          "gray-3": "#999999",
          "gray-4": "#cccccc",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at 50% 0%, rgba(193,18,31,0.15) 0%, transparent 70%), radial-gradient(ellipse at 80% 50%, rgba(244,180,0,0.08) 0%, transparent 60%), linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
        "gold-gradient": "linear-gradient(135deg, #F4B400 0%, #d99500 100%)",
        "red-gradient": "linear-gradient(135deg, #C1121F 0%, #8a1018 100%)",
        "section-gradient":
          "linear-gradient(180deg, #111111 0%, #141414 50%, #111111 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(193,18,31,0.3)",
        "glow-gold": "0 0 40px rgba(244,180,0,0.25)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        card: "0 4px 24px rgba(0,0,0,0.5)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        ticker: "ticker 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
