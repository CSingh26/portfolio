"use client"

import type { CSSProperties } from "react"

type MarqueeProps = {
  items: readonly string[]
  /** Seconds for one full group to travel its own width. */
  duration?: number
  reverse?: boolean
  label?: string
  className?: string
}

/**
 * Seamless marquee.
 *
 * Two identical groups sit side by side and each slides by exactly -100% of
 * its OWN width, so group B lands precisely where group A started. Each group
 * also carries `min-width: 100%`, which is what keeps the loop gap-free on
 * wide viewports: without it a short word list is narrower than the container
 * and a bare strip shows up on the right at the end of every cycle.
 */
export function Marquee({ items, duration = 32, reverse = false, label, className }: MarqueeProps) {
  // Only the first copy is exposed; the second exists purely to close the loop,
  // so hiding it keeps screen readers from reading the list twice.
  const group = (duplicate: boolean) => (
    <div className="marquee-group" aria-hidden={duplicate || undefined}>
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="marquee-item">
          <i aria-hidden />
          <em>{item}</em>
        </span>
      ))}
    </div>
  )

  return (
    <div
      className={`marquee ${reverse ? "is-reverse" : ""} ${className ?? ""}`}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      aria-label={label}
    >
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}
