"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const fade = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

export function Hero() {
  const reduceMotion = useReducedMotion()
  const [photoError, setPhotoError] = useState(false)
  const focusTags = [
    "Software Development",
    "Data Analysis",
    "Web Development",
    "Cloud",
    "Cybersecurity",
    "AI",
  ]

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

      <div className="container relative grid gap-10 md:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          className="flex flex-col gap-4"
          initial={fade.initial}
          animate={fade.animate}
          transition={fade.transition}
        >
          <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-accent">Chaitanya</span>
          </h1>
          <p className="max-w-xl text-base text-muted sm:text-lg">
            I build data-driven web products and cloud-ready systems that feel fast and intentional.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {focusTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold text-muted transition hover:border-accent hover:text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
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
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center lg:justify-end"
          initial={fade.initial}
          animate={fade.animate}
          transition={fade.transition}
        >
          <div className="relative">
            <div className="relative h-56 w-56 rounded-full bg-card/40 p-2 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-background/80">
                {photoError ? (
                  <div className="flex h-full w-full items-center justify-center text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                    Add /public/profile.png
                  </div>
                ) : (
                  <Image
                    src="/profile.png"
                    alt="Chaitanya"
                    fill
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 14rem"
                    className="object-cover"
                    onError={() => setPhotoError(true)}
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
