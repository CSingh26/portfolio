"use client"

import { motion } from "framer-motion"
import { SectionShell } from "./section-shell"

const principles = [
  {
    label: "Analytical",
    body: "I like breaking vague problems into flows, data shapes, contracts, and failure modes.",
  },
  {
    label: "Curious",
    body: "I move between domains because the strongest ideas usually sit between them.",
  },
  {
    label: "Grounded",
    body: "Ambition only matters when it turns into shipped, inspectable work.",
  },
  {
    label: "Systems-oriented",
    body: "I care about how product, infrastructure, security, and users affect each other.",
  },
]

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="Origin Story"
      title="I started with computer science, then kept following the edges of the system."
      description="Backend systems led me into Linux, containers, cloud infrastructure, data pipelines, AI, and eventually finance, because each layer explained a different part of how software becomes useful in the real world."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
          <p>
            My foundation is computer science: algorithms, data structures, operating systems, and
            the patient discipline of making software behave. But the work that held my attention
            was rarely isolated code. It was the full chain from idea to interface to backend to
            deployment.
          </p>
          <p>
            That pushed me toward backend and cloud systems. I wanted to understand why APIs become
            fragile, how Linux and containers shape deployments, how data moves through a product,
            and why security cannot be a final checklist item.
          </p>
          <p>
            Finance sharpened the story. It adds risk, incentives, timing, trust, and accountability.
            The systems have to be clear because the consequences are real. That is the kind of work
            I want to grow into: technical, interdisciplinary, and useful under pressure.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((item, index) => (
            <motion.div
              key={item.label}
              className="surface rounded-xl p-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <p className="text-lg font-semibold text-foreground">{item.label}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
