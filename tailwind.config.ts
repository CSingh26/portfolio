import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "var(--color-bg)",
        foreground: "var(--color-text)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
        card: "var(--color-card)",
        border: "var(--color-border)",
        ring: "var(--color-border-strong)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: "0 20px 50px rgba(0,0,0,0.12)",
        glow: "0 15px 40px rgba(112,160,175,0.45)",
      },
      borderRadius: {
        xl: "18px",
        "2xl": "28px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.7", filter: "blur(24px)" },
          "50%": { opacity: "0.35", filter: "blur(28px)" },
        },
        dash: {
          "0%": { strokeDashoffset: "120" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "pulseGlow 12s ease-in-out infinite",
        dash: "dash 1.5s ease-in-out forwards",
      },
      backdropBlur: {
        soft: "8px",
      },
    },
  },
  plugins: [],
}

export default config
