import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#040812",
        foreground: "#EAF2FF",
        border: "rgba(148, 163, 184, 0.18)",
        muted: "#91A4C7",
        primary: "#38BDF8",
        cyan: "#22D3EE",
        navy: "#07111F",
        panel: "rgba(10, 22, 41, 0.72)",
        violet: "#8B5CF6",
        emerald: "#34D399",
        amber: "#FBBF24",
        rose: "#FB7185"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 34px rgba(56, 189, 248, 0.22)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.36)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at top left, rgba(56,189,248,.16), transparent 30%), radial-gradient(circle at 80% 20%, rgba(139,92,246,.14), transparent 28%), linear-gradient(180deg, #040812 0%, #07111F 48%, #050814 100%)"
      },
      keyframes: {
        "pulse-scan": {
          "0%, 100%": { transform: "translateX(-15%)", opacity: ".25" },
          "50%": { transform: "translateX(15%)", opacity: ".6" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(132px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(132px) rotate(-360deg)" }
        }
      },
      animation: {
        "pulse-scan": "pulse-scan 6s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        orbit: "orbit 18s linear infinite"
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;
