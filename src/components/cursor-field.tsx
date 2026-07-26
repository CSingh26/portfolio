"use client"

import { useEffect, useRef } from "react"

const INTERACTIVE = "a, button, [role='tab'], [data-cursor='lock']"

/**
 * A tracking reticle rather than the usual blurred blob: two hairlines and a
 * corner-bracket lock that snaps onto whatever is under the pointer, with a
 * live coordinate readout. It borrows the language of a charting crosshair,
 * which is on-theme for the rest of the site.
 *
 * The native cursor is deliberately left visible — this is an overlay, not a
 * replacement, so nothing breaks for people who rely on the real pointer.
 *
 * Everything here is driven imperatively through CSS custom properties and a
 * class toggle. Routing pointer movement through React state would re-render
 * the tree on every frame for a purely decorative layer.
 */
export function CursorField() {
  const rootRef = useRef<HTMLDivElement>(null)
  const readoutRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!finePointer.matches || reducedMotion.matches) return

    const node = rootRef.current
    if (!node) return

    node.classList.add("is-enabled")

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let rafId = 0
    let lockRect: DOMRect | null = null

    const draw = () => {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18

      node.style.setProperty("--cx", `${currentX.toFixed(1)}px`)
      node.style.setProperty("--cy", `${currentY.toFixed(1)}px`)

      if (lockRect) {
        // Snap the brackets around the hovered element rather than the pointer.
        node.style.setProperty("--lock-x", `${lockRect.left + lockRect.width / 2}px`)
        node.style.setProperty("--lock-y", `${lockRect.top + lockRect.height / 2}px`)
        node.style.setProperty("--lock-w", `${lockRect.width + 14}px`)
        node.style.setProperty("--lock-h", `${lockRect.height + 12}px`)
      } else {
        node.style.setProperty("--lock-x", `${currentX.toFixed(1)}px`)
        node.style.setProperty("--lock-y", `${currentY.toFixed(1)}px`)
        node.style.setProperty("--lock-w", "26px")
        node.style.setProperty("--lock-h", "26px")
      }

      if (readoutRef.current) {
        readoutRef.current.textContent = `${Math.round(targetX)} ${Math.round(targetY)}`
      }

      if (Math.abs(targetX - currentX) > 0.15 || Math.abs(targetY - currentY) > 0.15) {
        rafId = requestAnimationFrame(draw)
      } else {
        rafId = 0
      }
    }

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return
      targetX = event.clientX
      targetY = event.clientY

      const hit = (event.target as Element | null)?.closest?.(INTERACTIVE) ?? null
      lockRect = hit ? hit.getBoundingClientRect() : null
      node.classList.toggle("is-locked", Boolean(hit))

      if (!rafId) rafId = requestAnimationFrame(draw)
    }

    const hide = () => {
      lockRect = null
      node.classList.remove("is-locked")
      node.style.setProperty("--field-opacity", "0")
    }
    const show = () => node.style.setProperty("--field-opacity", "1")

    window.addEventListener("pointermove", handleMove, { passive: true })
    document.addEventListener("pointerleave", hide)
    document.addEventListener("pointerenter", show)
    // Rects captured before a scroll are stale, so drop the lock and fade out
    // until the pointer moves again.
    window.addEventListener("scroll", hide, { passive: true })

    return () => {
      window.removeEventListener("pointermove", handleMove)
      document.removeEventListener("pointerleave", hide)
      document.removeEventListener("pointerenter", show)
      window.removeEventListener("scroll", hide)
      node.classList.remove("is-enabled", "is-locked")
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div ref={rootRef} className="cursor-field" aria-hidden>
      <span className="cursor-hair cursor-hair-x" />
      <span className="cursor-hair cursor-hair-y" />
      <span className="cursor-lock">
        <i /><i /><i /><i />
      </span>
      <span ref={readoutRef} className="cursor-readout" />
    </div>
  )
}
