"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/experience", label: "work" },
  { href: "/skills", label: "skills" },
  { href: "/certifications", label: "certifications" },
  { href: "/writing", label: "thoughts" },
  { href: "/contact", label: "contact" },
]

const NAME_TRANSLATIONS = [
  "Chaitanya",
  "चैतन्य",
  "চৈতন্য",
  "ચૈતન્ય",
  "Чайтанья",
  "チャイタンヤ",
  "تشايتانيا",
  "柴坦亚",
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const [nameIdx, setNameIdx] = useState(0)

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setNameIdx((prev) => (prev + 1) % NAME_TRANSLATIONS.length)
    }, 3000)
    return () => window.clearInterval(id)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container flex items-center justify-between py-4"
      >
        <Link
          className="flex items-center gap-3 font-display text-base tracking-tight text-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-lg"
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Go to home"
        >
          <span className="relative min-w-[9ch]">
            <AnimatePresence mode="wait">
              <motion.span
                key={nameIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {NAME_TRANSLATIONS[nameIdx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "px-2 py-1 text-[0.7rem] font-medium lowercase tracking-[0.14em] text-muted transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-xs lg:text-sm",
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            className="mx-auto mt-3 w-[92%] overflow-hidden rounded-2xl border border-border bg-card/95 shadow-soft backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col divide-y divide-border">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-5 py-4 text-sm font-medium lowercase tracking-[0.14em] transition hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive(item.href) && "text-accent",
                  )}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-border" aria-hidden />
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
