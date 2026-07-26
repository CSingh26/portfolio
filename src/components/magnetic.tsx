"use client"

import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

type MagneticProps = {
  children: ReactNode
  /** How far the element travels toward the pointer, as a fraction of offset. */
  strength?: number
  className?: string
}

/**
 * Pulls an element a few pixels toward the pointer while it is hovered. Kept
 * deliberately weak — enough that a button feels reachable, not so much that
 * it slides out from under the click.
 */
export function Magnetic({ children, strength = 0.28, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 })

  if (reduceMotion) {
    return <span className={className}>{children}</span>
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, display: "inline-flex" }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return
        const bounds = ref.current?.getBoundingClientRect()
        if (!bounds) return
        x.set((event.clientX - (bounds.left + bounds.width / 2)) * strength)
        y.set((event.clientY - (bounds.top + bounds.height / 2)) * strength)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.span>
  )
}
