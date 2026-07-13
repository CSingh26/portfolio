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
            className="mb-10 flex max-w-3xl flex-col gap-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {eyebrow ? (
              <span className="chapter-label inline-flex w-fit items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {eyebrow}
              </span>
            ) : null}
            {title ? (
              <h2 className="text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.6rem]">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">{description}</p>
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
