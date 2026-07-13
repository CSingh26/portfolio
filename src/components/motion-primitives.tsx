"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

export function PageTransition({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function TextReveal({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  const words = text.split(" ")

  if (reduceMotion) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="mr-[0.24em] inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.62,
              delay: index * 0.035,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </span>
  )
}

type MagneticButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode
  variant?: "primary" | "secondary"
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  onMouseLeave,
  onMouseMove,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const reduceMotion = useReducedMotion()

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    onMouseMove?.(event)
    if (reduceMotion) return
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    setOffset({
      x: (event.clientX - rect.left - rect.width / 2) * 0.12,
      y: (event.clientY - rect.top - rect.height / 2) * 0.18,
    })
  }

  const handleLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    onMouseLeave?.(event)
    setOffset({ x: 0, y: 0 })
  }

  return (
    <Link
      ref={ref}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        variant === "primary"
          ? "border-foreground bg-foreground text-background shadow-soft hover:shadow-glow"
          : "border-border bg-card text-foreground hover:border-accent hover:text-accent",
        className,
      )}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      <motion.span animate={offset} transition={{ type: "spring", stiffness: 220, damping: 16 }}>
        {children}
      </motion.span>
    </Link>
  )
}

export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`)
    node.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn("spotlight-card rounded-xl border border-border shadow-soft", className)}
    >
      {children}
    </div>
  )
}

export function GradientText({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-foreground via-accent to-signal bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  )
}
