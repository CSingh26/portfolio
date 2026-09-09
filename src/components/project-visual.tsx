"use client"

import Image from "next/image"
import { useState } from "react"
import { getProjectMedia } from "@/data/project-visuals"

export function ProjectVisual({ slug, detail = false, priority = false }: { slug: string; detail?: boolean; priority?: boolean }) {
  const media = getProjectMedia(slug)
  const [playing, setPlaying] = useState(false)
  if (!media) return null

  return (
    <figure className={`project-visual ${detail ? "is-detail" : ""}`} data-accent={media.accent}>
      <div className="project-visual-art">
        {!detail && playing ? (
          <picture>
            <source media="(prefers-reduced-motion: reduce)" srcSet={media.still} />
            <img src={media.flow} width={1200} height={480} alt={media.alt} className="project-cover is-flow-preview" />
          </picture>
        ) : (
          <Image
            src={media.cover}
            alt={`${media.label} — conceptual system illustration`}
            width={1200}
            height={720}
            priority={detail || priority}
            sizes={detail ? "(min-width: 1024px) 720px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
            className="project-cover"
          />
        )}
      </div>
      <div className="project-visual-caption">
        <span>{media.label}</span>
        {detail ? <span aria-hidden>↗</span> : (
          <button
            type="button"
            aria-label={`${playing ? "Pause" : "Play"} ${media.label} flowchart`}
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
          >
            {playing ? "Still" : "Flow"}<span aria-hidden>{playing ? "Ⅱ" : "▷"}</span>
          </button>
        )}
      </div>
      {detail ? (
        <div className="project-flow">
          <div className="project-flow-heading">
            <span>How it works</span>
            <button type="button" aria-pressed={playing} onClick={() => setPlaying((value) => !value)}>
              {playing ? "Pause flow" : "Play flow"}<span aria-hidden>{playing ? "Ⅱ" : "▷"}</span>
            </button>
          </div>
          <picture>
            <source media="(prefers-reduced-motion: reduce)" srcSet={media.still} />
            {/* Native picture preserves the GIF and selects a still before paint for reduced motion. */}
            <img src={playing ? media.flow : media.still} width={1200} height={480} alt={media.alt} loading="lazy" />
          </picture>
          <p className="project-flow-description">{media.steps.join(" → ")}</p>
        </div>
      ) : null}
    </figure>
  )
}
