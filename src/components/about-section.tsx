"use client"

import { motion } from "framer-motion"
import { SectionShell } from "./section-shell"

const stats = [
  { label: "Years coding", value: "4+", detail: "Hands-on across backend, data, and infra" },
  { label: "Red Hat certs", value: "3", detail: "RHCSA, RHCE, Container Specialist" },
  { label: "Projects shipped", value: "20+", detail: "Hackathons, capstones, and solo builds" },
  { label: "Domains", value: "Data / Cloud / FinTech / Security", detail: "" },
]

const focus = [
  "Real-time fraud detection in tokenized settlement systems",
  "Cloud-native backend patterns with AWS + containerization",
  "Quant-inspired data workflows for consumer fintech apps",
  "Security-first engineering from kernel modules to APIs",
]

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Systems-minded engineer blending data, cloud, and fintech."
      description="ASU senior combining rigorous systems training with a bias for shipping real products—quiz platforms, budgeting apps, fraud detection engines, and healthtech."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 text-lg text-muted">
          <p>
            I enjoy building infrastructure that never gets in the way of product velocity: clean APIs,
            strong observability, and secure defaults. My toolbox spans Node.js/TypeScript, Python for
            data, PostgreSQL, containerization, and AWS + OCI to deploy resilient services.
          </p>
          <p>
            Recent work includes QuizBee on AWS (EC2, ALB, S3, Route53), a MoneyMind budgeting suite
            with automated insights, and FraudGuard, a streaming anomaly detector for digital payments.
            I also explore reverse engineering, cryptography, and kernel modules to understand systems
            end-to-end.
          </p>
          <div>
            <h3 className="font-display text-xl text-foreground">Current focus</h3>
            <ul className="mt-3 space-y-2 text-base">
              {focus.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl border border-border/70 p-5 shadow-soft"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <p className="text-sm uppercase tracking-[0.18em] text-muted">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-foreground">{stat.value}</p>
              {stat.detail ? <p className="mt-1 text-sm text-muted">{stat.detail}</p> : null}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
