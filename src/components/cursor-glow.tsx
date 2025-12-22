"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!supportsFinePointer.matches) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (prefersReducedMotion.matches) return

    const node = ref.current
    if (!node) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let rafId = 0

    node.style.setProperty("--cursor-x", "50%")
    node.style.setProperty("--cursor-y", "50%")

    const update = () => {
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12

      const x = Math.max(0, Math.min(100, (currentX / window.innerWidth) * 100))
      const y = Math.max(0, Math.min(100, (currentY / window.innerHeight) * 100))

      node.style.setProperty("--cursor-x", `${x}%`)
      node.style.setProperty("--cursor-y", `${y}%`)

      if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2) {
        rafId = window.requestAnimationFrame(update)
      } else {
        rafId = 0
      }
    }

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return
      targetX = event.clientX
      targetY = event.clientY
      if (!rafId) {
        rafId = window.requestAnimationFrame(update)
      }
    }

    window.addEventListener("pointermove", handleMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handleMove)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden />
}
