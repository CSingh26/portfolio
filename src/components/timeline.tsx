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
      <div className="absolute left-4 top-0 hidden h-full sm:block">
        <div className="h-full w-px bg-border" />
      </div>
      <div className="space-y-5">
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
      <div className="absolute left-[9px] top-6 hidden sm:block">
        <motion.span
          className={cn(
            "block h-3 w-3 rounded-full border-2 border-background bg-accent shadow-soft",
            isFirst && "ring-4 ring-accent/25",
          )}
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 340, damping: 24 }}
        />
      </div>
      <motion.article
        className="surface rounded-xl p-5"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-accent">
                {item.kind}
              </span>
              <span className="text-sm font-semibold text-muted">{item.period}</span>
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
              {item.role}
            </h3>
            <p className="mt-1 text-sm text-muted">{item.org}</p>
          </div>
          {item.location ? <p className="text-sm font-medium text-muted">{item.location}</p> : null}
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  )
}
