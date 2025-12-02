"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Download } from "lucide-react"
import Link from "next/link"

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

      <div className="container relative grid gap-10 md:gap-14 lg:grid-cols-[1.05fr_1fr]">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-foreground/10 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Systems Pulse</p>
                <p className="text-2xl font-bold">Signals I&apos;m shipping</p>
              </div>
              <span className="rounded-full bg-foreground/90 px-3 py-1 text-xs font-semibold text-background">
                Live
              </span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <motion.div
                className="rounded-2xl border border-border bg-background/60 p-4 shadow-soft"
                animate={
                  reduceMotion
                    ? undefined
                    : { rotate: [0, -1.5, 1.5, 0], transition: { duration: 8, repeat: Infinity } }
                }
              >
                <p className="text-sm text-muted">FraudGuard · Realtime</p>
                <p className="mt-2 text-3xl font-semibold">99.4%</p>
                <p className="text-xs text-muted">Streaming precision on anomaly detections</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                  <span className="rounded-full bg-card px-3 py-1">Kafka</span>
                  <span className="rounded-full bg-card px-3 py-1">Airflow</span>
                  <span className="rounded-full bg-card px-3 py-1">Python</span>
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-border bg-background/60 p-4 shadow-soft"
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -4, 0, 4, 0], transition: { duration: 9, repeat: Infinity, ease: "easeInOut" } }
                }
              >
                <p className="text-sm text-muted">MoneyMind · FinOps</p>
                <p className="mt-2 text-3xl font-semibold">+18%</p>
                <p className="text-xs text-muted">Budget adherence from smart alerts</p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-border">
                  <div className="h-full w-[72%] rounded-full bg-accent" />
                </div>
              </motion.div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3 text-xs text-muted">
              <div className="rounded-2xl border border-border bg-card px-4 py-3">
                <p className="text-[0.7rem] uppercase tracking-[0.18em]">Data</p>
                <p className="text-lg font-semibold text-foreground">Postgres · Druid</p>
              </div>
              <div className="rounded-2xl border border-border bg-card px-4 py-3">
                <p className="text-[0.7rem] uppercase tracking-[0.18em]">Cloud</p>
                <p className="text-lg font-semibold text-foreground">AWS · OCI</p>
              </div>
              <div className="rounded-2xl border border-border bg-card px-4 py-3">
                <p className="text-[0.7rem] uppercase tracking-[0.18em]">Security</p>
                <p className="text-lg font-semibold text-foreground">Reverse Eng</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Snapshot</p>
                <p className="mt-1 text-lg font-semibold text-foreground">Phoenix · UTC-7 · Open to relocate</p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-muted">
                  <div className="rounded-xl border border-border bg-card px-3 py-2">
                    <p className="text-[0.68rem] uppercase tracking-[0.2em]">Focus</p>
                    <p className="font-semibold text-foreground">FinTech · Cloud</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card px-3 py-2">
                    <p className="text-[0.68rem] uppercase tracking-[0.2em]">Certs</p>
                    <p className="font-semibold text-foreground">RHCSA · RHCE</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card px-3 py-2">
                    <p className="text-[0.68rem] uppercase tracking-[0.2em]">Stack</p>
                    <p className="font-semibold text-foreground">TS · AWS · Postgres</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-4 shadow-soft">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-foreground/10" />
                <div className="relative flex items-center gap-3">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-border shadow-soft">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-foreground/50 to-background/20" />
                    <div className="relative flex h-full w-full items-center justify-center text-xl font-bold text-background">
                      CS
                    </div>
                  </div>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-muted">Chaitanya Singh</p>
                    <p className="text-lg font-semibold text-foreground">Systems &amp; FinTech Engineer</p>
                    <p className="text-xs text-muted">ASU · Data · Security · Backend</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
