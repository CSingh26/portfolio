"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type SectionShellProps = {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-20", className)}>
      <div className="container">
        {(eyebrow || title) && (
          <motion.div
            className="mb-10 flex flex-col gap-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {eyebrow ? (
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {eyebrow}
              </span>
            ) : null}
            {title ? (
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem]">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="max-w-2xl text-lg text-muted">{description}</p>
            ) : null}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
