"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Download } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { MagneticButton, TextReveal } from "@/components/motion-primitives"
import { profile } from "@/data/profile"

const signals = ["code", "finance", "AI", "cloud", "data", "security", "product"]

export function Hero() {
  const reduceMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)
  const [photoError, setPhotoError] = useState(false)

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.roles.length)
    }, 2600)

    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-28 sm:pt-32">
      <div className="container relative grid gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="relative z-10">
          <motion.p
            className="chapter-label"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Chapter 01 - Signal
          </motion.p>
          <h1 className="text-balance mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
            <TextReveal text={profile.heroLine} />
          </h1>
          <div className="mt-6 h-8 overflow-hidden text-lg font-semibold text-accent sm:text-xl">
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.roles[roleIndex]}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {profile.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            I like systems that turn ambiguity into signal: clean backend contracts, calm product
            surfaces, cloud-aware infrastructure, and financial workflows that make risk visible.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="/projects">
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={profile.resumePath} variant="secondary">
              Download Resume
              <Download className="h-4 w-4" />
            </MagneticButton>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {signals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[440px] lg:ml-auto"
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="surface relative overflow-hidden rounded-xl p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-elevated">
              {photoError ? (
                <div className="flex h-full items-center justify-center px-8 text-center text-sm text-muted">
                  Add /public/profile.png
                </div>
              ) : (
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                  priority
                  onError={() => setPhotoError(true)}
                />
              )}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-background/55 p-4">
                <p className="text-sm font-semibold text-foreground">Current path</p>
                <p className="mt-1 text-sm leading-6 text-muted">CS into finance, AI, and cloud systems.</p>
              </div>
              <div className="rounded-xl border border-border bg-background/55 p-4">
                <p className="text-sm font-semibold text-foreground">Operating mode</p>
                <p className="mt-1 text-sm leading-6 text-muted">Structured, curious, calm under complexity.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
