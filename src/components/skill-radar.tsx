"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { radarCategories, type RadarCategory } from "@/data/skill-radar"
import { cn } from "@/lib/utils"

const size = 680
const center = size / 2
const radius = 240
const labelOffset = 32
const labelFont = "text-[12px] sm:text-[13px] font-semibold fill-foreground"

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

function splitLabel(label: string) {
  if (!label.includes(" ") || label.length <= 12) {
    return [label]
  }
  const words = label.split(" ")
  if (words.length === 2) {
    return words
  }
  const midpoint = Math.ceil(words.length / 2)
  return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")]
}

export function SkillRadar() {
  const [activeId, setActiveId] = useState(radarCategories[0].id)
  const active = radarCategories.find((cat) => cat.id === activeId) ?? radarCategories[0]
  const guidePoints = polygonPoints(active.skills.map((s) => ({ ...s, value: 100 })))
  const polygon = polygonPoints(active.skills)

  return (
    <div className="glass relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-6 shadow-soft sm:p-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-foreground">Technical Proficiency</h3>
        <p className="text-base text-muted">Visualization of my technical skills and expertise.</p>
      </div>
      <div className="mt-5 rounded-full border border-border bg-background/60 p-1">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {radarCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                activeId === cat.id
                  ? "bg-foreground text-background shadow-soft"
                  : "text-muted hover:text-foreground",
              )}
              aria-pressed={activeId === cat.id}
              type="button"
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center">
          <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-text)" stopOpacity="0.08" />
                <stop offset="100%" stopColor="var(--color-text)" stopOpacity="0.22" />
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
                return <line key={idx} x1={center} y1={center} x2={x} y2={y} stroke="var(--color-border)" strokeWidth="1" />
              })}
              <polygon points={guidePoints} fill="none" stroke="var(--color-border)" strokeWidth="1" />
              <AnimatePresence mode="wait">
                <motion.polygon
                  key={activeId}
                  points={polygon}
                  fill="url(#radarFill)"
                  stroke="var(--color-text)"
                  strokeOpacity="0.75"
                  strokeWidth="2"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
              {active.skills.map((skill, idx) => {
                const angle = toRadians(-90 + (360 / active.skills.length) * idx)
                const labelRadius = radius + labelOffset
                const x = center + labelRadius * Math.cos(angle)
                const y = center + labelRadius * Math.sin(angle)
                const lines = splitLabel(skill.label)
                return (
                  <text
                    key={skill.label}
                    x={x}
                    y={y}
                    dx={x < center ? -6 : 6}
                    dy={y < center ? -6 : 14}
                    textAnchor={x < center ? "end" : "start"}
                    className={labelFont}
                  >
                    {lines.map((line, lineIndex) => (
                      <tspan key={`${skill.label}-${lineIndex}`} x={x} dy={lineIndex === 0 ? 0 : 14}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                )
              })}
            </g>
          </svg>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted">
          <span className="h-3 w-3 rounded-sm bg-foreground" />
          <span>Skill Level</span>
        </div>
      </div>
    </div>
  )
}
