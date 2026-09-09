"use client"

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
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        theme === "light" ? "border-foreground/20 bg-white/90" : "border-border bg-card/70",
      )}
    >
      {mounted ? (
        <span>
          {theme === "light" ? (
            <Moon className="h-5 w-5 text-foreground" />
          ) : (
            <SunMedium className="h-5 w-5 text-foreground" />
          )}
        </span>
      ) : null}
    </button>
  )
}
