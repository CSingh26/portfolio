"use client"

import { motion } from "framer-motion"
import { Brain, Cloud, Code2, Database, Landmark, Leaf, LockKeyhole, Rocket } from "lucide-react"
import { FadeIn } from "@/components/motion-primitives"
import { cn } from "@/lib/utils"

const nodes = [
  { label: "code", detail: "interfaces, APIs, data models", icon: Code2, className: "lg:col-start-1" },
  { label: "finance", detail: "risk, incentives, decision systems", icon: Landmark, className: "lg:col-start-2" },
  { label: "AI", detail: "agents, uncertainty, explainability", icon: Brain, className: "lg:col-start-3" },
  { label: "data", detail: "pipelines, signals, evaluation", icon: Database, className: "lg:col-start-1" },
  { label: "cloud", detail: "Linux, containers, deployment", icon: Cloud, className: "lg:col-start-3" },
  { label: "security", detail: "auth, privacy, hardening", icon: LockKeyhole, className: "lg:col-start-1" },
  { label: "sustainability", detail: "systems with real-world cost", icon: Leaf, className: "lg:col-start-2" },
  { label: "execution", detail: "shipping, iteration, ownership", icon: Rocket, className: "lg:col-start-3" },
]

export function MindMap() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="chapter-label">Chapter 02 - How I Think</p>
            <h2 className="text-balance mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              The work gets interesting where disciplines start talking to each other.
            </h2>
          </div>
        </FadeIn>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="surface flex min-h-56 flex-col justify-center rounded-xl p-6 lg:col-start-2 lg:row-span-2">
            <p className="text-sm font-semibold text-accent">center of gravity</p>
            <h3 className="mt-3 font-display text-3xl font-semibold">systems thinking</h3>
            <p className="mt-4 leading-7 text-muted">
              I trace the flow: what enters, what changes, what can fail, what the user trusts, and
              what the system makes easier over time.
            </p>
          </div>
          {nodes.map(({ label, detail, icon: Icon, className }, index) => (
            <motion.div
              key={label}
              className={cn("surface rounded-xl p-5", className)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{label}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
