"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { radarCategories, type RadarCategory } from "@/data/skill-radar"
import { cn } from "@/lib/utils"

const size = 620
const center = size / 2
const radius = 250

function toRadians(deg: number) {
  return (deg * Math.PI) / 180
}

function polygonPoints(skills: RadarCategory["skills"]) {
  const step = 360 / skills.length
  return skills
    .map((skill, idx) => {
      const angle = toRadians(-90 + step * idx)
      const valueRadius = (skill.value / 100) * radius
      const x = center + valueRadius * Math.cos(angle)
      const y = center + valueRadius * Math.sin(angle)
      return `${x},${y}`
    })
    .join(" ")
}

export function SkillRadar() {
  const [activeId, setActiveId] = useState(radarCategories[0].id)
  const active = radarCategories.find((cat) => cat.id === activeId) ?? radarCategories[0]
  const guidePoints = polygonPoints(active.skills.map((s) => ({ ...s, value: 100 })))
  const polygon = polygonPoints(active.skills)

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-8 shadow-soft lg:p-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Technical Proficiency</p>
          <p className="text-2xl font-bold">Skill radar</p>
        </div>
        <div className="flex flex-wrap gap-2 rounded-full border border-border bg-card px-2 py-1 text-sm">
          {radarCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={cn(
                "rounded-full px-3 py-1 font-semibold transition",
                activeId === cat.id ? "bg-foreground text-background" : "text-muted hover:text-foreground",
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="relative mx-auto flex w-full max-w-full items-center justify-center rounded-3xl border border-border bg-background/70 p-5 md:p-8 overflow-hidden">
          <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full max-h-[620px] max-w-[620px]" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--color-foreground)" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <g>
              <circle cx={center} cy={center} r={radius} fill="none" stroke="var(--color-border)" strokeWidth="1" />
              <circle
                cx={center}
                cy={center}
                r={(radius * 2) / 3}
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="1"
              />
              <circle cx={center} cy={center} r={radius / 3} fill="none" stroke="var(--color-border)" strokeWidth="1" />
              {active.skills.map((_, idx) => {
                const angle = toRadians(-90 + (360 / active.skills.length) * idx)
                const x = center + radius * Math.cos(angle)
                const y = center + radius * Math.sin(angle)
                return (
                  <line
                    key={idx}
                    x1={center}
                    y1={center}
                    x2={x}
                    y2={y}
                    stroke="var(--color-border)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                )
              })}
              <polygon points={guidePoints} fill="none" stroke="var(--color-border)" strokeWidth="1" />
              <AnimatePresence mode="wait">
                <motion.polygon
                  key={activeId}
                  points={polygon}
                  fill="url(#radarFill)"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
              {active.skills.map((skill, idx) => {
                const angle = toRadians(-90 + (360 / active.skills.length) * idx)
                const valueRadius = (skill.value / 100) * radius
                const x = center + valueRadius * Math.cos(angle)
                const y = center + valueRadius * Math.sin(angle)
                return (
                  <g key={skill.label}>
                    <circle cx={x} cy={y} r={4} fill="var(--color-foreground)" />
                    <text
                      x={x}
                      y={y}
                      dx={x < center ? -10 : 10}
                      dy={y < center ? -6 : 14}
                      textAnchor={x < center ? "end" : "start"}
                      className="text-[10px] font-semibold fill-foreground"
                    >
                      {skill.label}
                    </text>
                  </g>
                )
              })}
            </g>
          </svg>
        </div>
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm uppercase tracking-[0.18em] text-muted">{active.title}</p>
              <h3 className="font-display text-xl text-foreground">Strengths by category</h3>
              <p className="mt-2 text-sm text-muted">{active.description}</p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs sm:text-sm">
                {active.skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex items-center justify-between rounded-full border border-border bg-card px-3 py-2"
                  >
                    <span className="font-semibold text-foreground truncate">{skill.label}</span>
                    <span className="ml-2 text-muted">{skill.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
