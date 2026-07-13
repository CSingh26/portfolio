"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { profile, socialLinks } from "@/data/profile"

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
    <footer className="relative z-10 border-t border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container flex flex-col gap-6 py-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3">
          <Link href="/" className="font-display text-lg font-semibold text-foreground">
            {profile.name}
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-semibold text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Online
            </div>
            {typeof visitorCount === "number" ? (
              <div className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted">
                Visitors {visitorCount.toLocaleString()}
              </div>
            ) : null}
            <p className="text-sm text-muted">(c) {year} Chaitanya. All rights reserved.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
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
