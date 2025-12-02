"use client"

import { motion } from "framer-motion"
import { skills } from "@/data/skills"
import { SectionShell } from "./section-shell"

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="A toolkit for shipping reliable, data-aware products."
      description="Comfortable across the stack with a strong emphasis on backend systems, data pipelines, and cloud operations."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <motion.div
            key={group.category}
            className="glass h-full rounded-2xl border border-border p-5 shadow-soft"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
          >
            <p className="text-sm uppercase tracking-[0.16em] text-muted">{group.category}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-foreground transition hover:border-accent hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}
