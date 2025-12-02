"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Download } from "lucide-react"
import Link from "next/link"
import { SkillDeck } from "./skill-deck"

const fade = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden pb-14 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 blur-3xl">
        <motion.div
          className="absolute right-[5%] top-[8%] h-48 w-48 rounded-full bg-accent/30"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -12, 0], x: [0, 6, 0], opacity: [0.8, 1, 0.85] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[12%] bottom-[5%] h-56 w-56 rounded-full bg-foreground/10"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, 10, 0], x: [0, -8, 0], opacity: [0.7, 0.9, 0.75] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative grid gap-12 md:gap-16 xl:gap-20 lg:grid-cols-[1.05fr_1fr] items-start">
        <motion.div
          className="flex flex-col gap-6"
          initial={fade.initial}
          animate={fade.animate}
          transition={fade.transition}
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-card px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Software Engineer • Data &amp; FinTech Enthusiast
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Chaitanya Singh
          </h1>
          <p className="max-w-2xl text-lg text-muted sm:text-xl">
            CS junior at Arizona State University building data-rich, secure, and cloud-native
            products. I bridge backend systems, analytics, and fintech to ship tools that feel fast,
            intentional, and reliable.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 font-semibold text-background shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/Chaitanya_Singh_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 font-semibold text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-muted">
            <span className="rounded-full bg-card px-3 py-2">
              Red Hat Certified — RHCSA, RHCE, Container Specialist
            </span>
            <span className="rounded-full bg-card px-3 py-2">
              Building across data, backend, cloud, security, fintech
            </span>
            <span className="rounded-full bg-card px-3 py-2">Phoenix, AZ · Open to internships</span>
          </div>
        </motion.div>

        <SkillDeck />
      </div>
    </section>
  )
}
