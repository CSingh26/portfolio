"use client"

import { useEffect, useState } from "react"
import { Github, Instagram, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

const socials = [
  { href: "https://github.com/CSingh26", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/chaitanya-singh-10065a213/", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com/csingh04", label: "Twitter", icon: Twitter },
  { href: "https://www.instagram.com/chaitanya.singh4", label: "Instagram", icon: Instagram },
  { href: "mailto:singh.chaittanya@gmail.com", label: "Email", icon: Mail },
]

export function Footer() {
  const year = new Date().getFullYear()
  const [visitorCount, setVisitorCount] = useState<number | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const loadCount = async () => {
      try {
        const response = await fetch("/api/analytics/visit", { signal: controller.signal })
        if (!response.ok) return
        const data = await response.json()
        if (typeof data?.count === "number") {
          setVisitorCount(data.count)
        }
      } catch {
        // Ignore analytics failures
      }
    }

    loadCount()

    return () => controller.abort()
  }, [])
  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="relative z-10 border-t border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-semibold text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Online
          </div>
          {typeof visitorCount === "number" ? (
            <div className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Visitors {visitorCount.toLocaleString()}
            </div>
          ) : null}
          <p className="text-sm text-muted">© {year} Chaitanya. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition",
                "hover:-translate-y-1 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              )}
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
          <button
            onClick={scrollTop}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:-translate-y-1 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
