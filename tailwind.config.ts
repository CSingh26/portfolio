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
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        soft: "0 20px 50px rgba(0,0,0,0.12)",
        glow: "0 15px 40px rgba(69,103,242,0.22)",
      },
      borderRadius: {
        xl: "18px",
        "2xl": "28px",
      },
      backdropBlur: {
        soft: "8px",
      },
    },
  },
  plugins: [],
}

export default config
