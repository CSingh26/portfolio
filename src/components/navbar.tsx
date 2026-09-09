"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { href: "/projects", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/experience", label: "Journey" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="container flex items-center justify-between py-4"
        aria-label="Primary navigation"
      >
        <Link
          className="flex items-center gap-3 text-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Chaitanya Singh, go to home"
        >
          <span className="flex h-9 w-9 items-center justify-center border border-foreground font-mono text-[0.68rem] font-medium tracking-[0.08em]">
            CS
          </span>
          <span className="text-sm font-medium sm:text-base">Chaitanya Singh</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-2 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive(item.href) && "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24 }}
            className="mx-auto mt-3 w-[92%] overflow-hidden rounded-xl border border-border bg-card/95 shadow-soft backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col divide-y divide-border">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-5 py-4 font-mono text-xs uppercase tracking-[0.14em] text-muted transition hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive(item.href) && "text-accent",
                  )}
                >
                  {item.label}
                  <span
                    className={cn("h-1.5 w-1.5 rounded-full", isActive(item.href) ? "bg-accent" : "bg-border")}
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
