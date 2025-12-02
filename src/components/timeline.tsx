"use client"

import { motion } from "framer-motion"
import type { Experience } from "@/data/experience"
import { cn } from "@/lib/utils"

type TimelineProps = {
  items: Experience[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-[14px] top-0 hidden h-full sm:block">
        <div className="h-full w-[2px] bg-border" />
      </div>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <TimelineItem key={`${item.role}-${idx}`} item={item} isFirst={idx === 0} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ item, isFirst }: { item: Experience; isFirst: boolean }) {
  return (
    <div className="relative pl-0 sm:pl-12">
      <div className="absolute left-[5px] top-6 hidden sm:block">
        <motion.span
          className={cn(
            "block h-3 w-3 rounded-full border-2 border-background bg-foreground shadow-soft",
            isFirst && "ring-4 ring-accent/40",
          )}
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 340, damping: 24 }}
        />
      </div>
      <motion.div
        className="glass rounded-2xl border border-border/80 p-5 shadow-soft"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4, scale: 1.005 }}
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-muted">{item.period}</p>
            <h3 className="font-display text-xl text-foreground">
              {item.role} · <span className="text-muted">{item.org}</span>
            </h3>
          </div>
          {item.location ? <p className="text-sm text-muted">{item.location}</p> : null}
        </div>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
