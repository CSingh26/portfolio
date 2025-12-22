"use client"

import { useEffect, useState } from "react"

type Options = {
  rootMargin?: string
  threshold?: number | number[]
}

export function useScrollSpy(ids: string[], options: Options = {}) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "")

  useEffect(() => {
    if (ids.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections[0]?.target.id) {
          setActiveId(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: options.rootMargin ?? "-45% 0px -45% 0px",
        threshold: options.threshold ?? [0.15, 0.35, 0.5],
      },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, options.rootMargin, options.threshold])

  return activeId
}
