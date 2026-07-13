"use client"

import { motion } from "framer-motion"
import { Moon, SunMedium } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-soft backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        theme === "light" ? "border-foreground/20 bg-white/90" : "border-border bg-card/70",
      )}
    >
      {mounted ? (
        <motion.div
          key={theme}
          initial={{ scale: 0.7, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5 text-foreground" />
          ) : (
            <SunMedium className="h-5 w-5 text-foreground" />
          )}
        </motion.div>
      ) : null}
    </button>
  )
}
