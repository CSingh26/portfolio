"use client"

import { motion } from "framer-motion"
import { SectionShell } from "./section-shell"
import { skillClusters } from "@/data/skills"

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Capabilities"
      title="Skills grouped by the kind of system they help me build."
      description="The point is not a wall of tags. It is the pattern underneath them: interfaces, services, infrastructure, data, finance, and security reinforcing each other."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillClusters.map((cluster, index) => (
          <motion.article
            key={cluster.title}
            className="surface flex h-full flex-col rounded-xl p-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.04 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground">{cluster.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{cluster.signal}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {cluster.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-auto border-l border-accent/50 pl-4 pt-5 text-sm leading-7 text-foreground">
              {cluster.proof}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
