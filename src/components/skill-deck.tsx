"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { radarCategories } from "@/data/skill-radar"

const barVariants = {
  initial: { width: 0, opacity: 0 },
  animate: (value: number) => ({
    width: `${value}%`,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  }),
}

export function SkillDeck() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-soft sm:p-7 lg:p-10">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Technical Proficiency</p>
        <p className="text-2xl font-bold">Capability matrix</p>
        <p className="text-sm text-muted">
          Evidence-driven view of where I spend time: recent tools, strength scores, and focus areas.
        </p>
      </div>

      <div className="mt-5 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3">
        <AnimatePresence>
          {radarCategories.map((cat) => {
            const topSkills = [...cat.skills]
              .sort((a, b) => b.value - a.value)
              .slice(0, 4)
              .map((s) => ({ ...s, width: Math.max(30, s.value) })) // ensure visible width

            return (
              <motion.div
                key={cat.id}
                className="group relative min-w-[75%] snap-start overflow-hidden rounded-2xl border border-border bg-background/70 p-4 transition md:min-w-0 sm:min-w-[60%] cursor-pointer hover:border-accent"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01, rotate: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-foreground/10" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/25 blur-3xl" />
                  <div className="absolute -bottom-14 -left-10 h-28 w-28 rounded-full bg-foreground/10 blur-3xl" />
                </div>
                <div className="relative flex flex-col gap-2">
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted">{cat.title}</p>
                  <p className="text-sm text-foreground">{cat.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    {topSkills.map((skill) => (
                      <span
                        key={skill.label}
                        className="rounded-full border border-border bg-card px-3 py-1 font-semibold text-foreground"
                      >
                        {skill.label}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    {topSkills.map((skill) => (
                      <div key={`${cat.id}-${skill.label}`} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-semibold text-muted">
                          <span>{skill.label}</span>
                          <span className="text-foreground">{skill.value}</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-border">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-accent to-foreground"
                            variants={barVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={skill.width}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
