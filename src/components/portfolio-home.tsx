"use client"

import { useMemo, useState, type CSSProperties, type MouseEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  MoveUpRight,
  Sparkles,
} from "lucide-react"
import { projects } from "@/data/projects"

const lenses = {
  technology: {
    label: "Technology",
    index: "01",
    headline: "Systems that hold up.",
    note: "Full-stack products, data pipelines, cloud infrastructure, and applied AI.",
    color: "var(--color-blue)",
  },
  finance: {
    label: "Finance",
    index: "02",
    headline: "Numbers with context.",
    note: "Risk, markets, valuation, and decision tools that make complexity legible.",
    color: "var(--color-lime)",
  },
  product: {
    label: "Product",
    index: "03",
    headline: "Ideas people can use.",
    note: "Clear interfaces, honest data, and experiences built beyond the prototype.",
    color: "var(--color-coral)",
  },
} as const

type Lens = keyof typeof lenses

const featuredSlugs = [
  "apex-arena",
  "cinejaal",
  "f1-heritage",
  "reli-score",
  "careerpath-ai",
  "synaxis",
  "quiz-app",
  "grid-design-website",
]

const visualBySlug: Record<string, { number: string; tone: string; proof: string }> = {
  "apex-arena": { number: "5", tone: "race", proof: "AI voices · live race data" },
  cinejaal: { number: "4,953", tone: "cinema", proof: "sourced relationships" },
  "f1-heritage": { number: "75+", tone: "heritage", proof: "years of racing history" },
  "reli-score": { number: "30d", tone: "signal", proof: "failure-risk horizon" },
  "careerpath-ai": { number: "AI", tone: "path", proof: "explainable career fit" },
  synaxis: { number: "24h", tone: "money", proof: "hackathon build" },
  "quiz-app": { number: "LIVE", tone: "quiz", proof: "rooms · rankings · AWS" },
  "grid-design-website": { number: "01", tone: "studio", proof: "production client site" },
}

const principles = [
  ["Curiosity", "Start between disciplines."],
  ["Clarity", "Make the complex feel obvious."],
  ["Trust", "Show sources, limits, and uncertainty."],
  ["Execution", "Think beyond the first demo."],
]

export function PortfolioHome() {
  const reduceMotion = useReducedMotion()
  const [activeLens, setActiveLens] = useState<Lens>("technology")
  const selectedLens = lenses[activeLens]
  const featured = useMemo(
    () => featuredSlugs.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean),
    [],
  )

  const handlePortraitMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty("--portrait-rx", `${y * -7}deg`)
    event.currentTarget.style.setProperty("--portrait-ry", `${x * 7}deg`)
  }

  return (
    <div className="portfolio-home overflow-hidden">
      <section className="relative min-h-[94vh] border-b border-border pt-28 sm:pt-32">
        <div className="hero-grid" aria-hidden />
        <div className="container relative grid min-h-[calc(94vh-8rem)] gap-12 pb-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="mb-7 flex flex-wrap items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted">
              <span className="status-dot" />
              Building across disciplines
              <span className="h-px w-10 bg-border" />
              India ↔ USA
            </div>
            <h1 className="hero-title max-w-4xl font-display text-[clamp(3.6rem,9vw,7.6rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              Tech mind.<br />
              <span className="text-blue">Finance lens.</span><br />
              <span className="scribble">Builder</span> energy.
            </h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-sm text-base leading-relaxed text-muted sm:text-lg">
                I turn data, intelligence, and ambitious ideas into products people can explore.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="button-primary">
                  Explore work <ArrowDownRight className="h-4 w-4" />
                </Link>
                <Link href="/Chaitanya_Singh_Resume.pdf" className="button-quiet">
                  Résumé <Download className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="portrait-stage"
            onMouseMove={handlePortraitMove}
            onMouseLeave={(event) => {
              event.currentTarget.style.setProperty("--portrait-rx", "0deg")
              event.currentTarget.style.setProperty("--portrait-ry", "0deg")
            }}
          >
            <div className="portrait-card">
              <div className="portrait-frame">
                <Image
                  src="/profile.png"
                  alt="Chaitanya Singh"
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 78vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="portrait-caption">
                <span>Chaitanya Singh</span>
                <span>CS · AI · Finance</span>
              </div>
            </div>
            <div className="orbit-tag orbit-tag-one">data → decisions</div>
            <div className="orbit-tag orbit-tag-two">build → learn → repeat</div>
            <div className="spark-mark" aria-hidden><Sparkles className="h-7 w-7" /></div>
          </motion.div>
        </div>
        <div className="marquee" aria-label="Areas of focus">
          <div className="marquee-track">
            {Array.from({ length: 2 }).flatMap((_, copy) =>
              ["AI", "FINANCE", "DATA", "PRODUCT", "CLOUD", "STRATEGY"].map((item) => (
                <span key={`${copy}-${item}`}><i />{item}</span>
              )),
            )}
          </div>
        </div>
      </section>

      <section className="container py-24 sm:py-32" id="about">
        <div className="mb-10 grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <p className="section-kicker">The intersection</p>
            <h2 className="section-title">Three lenses.<br />One practice.</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted md:justify-self-end">
            Click a lens. This is where I like to work: not inside one neat box, but in the overlap.
          </p>
        </div>

        <div className="intersection-lab">
          <div className="lens-controls" role="tablist" aria-label="Choose a working lens">
            {(Object.entries(lenses) as [Lens, (typeof lenses)[Lens]][]).map(([key, lens]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeLens === key}
                onClick={() => setActiveLens(key)}
                className={`lens-button ${activeLens === key ? "is-active" : ""}`}
                style={{ "--lens-color": lens.color } as CSSProperties}
              >
                <span>{lens.index}</span>
                {lens.label}
                <MoveUpRight className="h-5 w-5" />
              </button>
            ))}
          </div>
          <motion.div
            key={activeLens}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lens-output"
            style={{ "--lens-color": selectedLens.color } as CSSProperties}
            role="tabpanel"
          >
            <span className="lens-giant-index">{selectedLens.index}</span>
            <div className="relative z-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-muted">{selectedLens.label} lens</p>
              <h3 className="font-display text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{selectedLens.headline}</h3>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">{selectedLens.note}</p>
            </div>
            <div className="intersection-orbits" aria-hidden>
              <span className="orbit orbit-a" />
              <span className="orbit orbit-b" />
              <span className="orbit orbit-c" />
              <span className="orbit-core">CS</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-ink py-24 text-paper sm:py-32" id="selected-work">
        <div className="container">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker text-lime">Selected systems · 2024—26</p>
              <h2 className="section-title text-paper">Built to be explored.</h2>
            </div>
            <Link href="/projects" className="button-on-dark">
              All projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="project-wall">
            {featured.map((project, index) => {
              if (!project) return null
              const visual = visualBySlug[project.slug]
              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: Math.min(index * 0.05, 0.25), duration: 0.55 }}
                  className={`project-tile project-${visual.tone}`}
                >
                  <Link href={`/projects/${project.slug}`} className="project-tile-main" aria-label={`Read about ${project.title}`}>
                    <div className="project-tile-top">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{project.field.split(" & ")[0]}</span>
                    </div>
                    <div className="project-visual" aria-hidden>
                      <strong>{visual.number}</strong>
                      <span>{visual.proof}</span>
                    </div>
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </Link>
                  <div className="project-links">
                    {project.links?.live ? (
                      <a href={project.links.live} target="_blank" rel="noreferrer">Live <ArrowUpRight className="h-4 w-4" /></a>
                    ) : <span>{project.status}</span>}
                    {project.links?.github ? (
                      <a href={project.links.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
                        <Github className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">Operating system</p>
            <h2 className="section-title">How I build.</h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted">
              Ambition works best when it has a method.
            </p>
          </div>
          <div className="principle-stack">
            {principles.map(([title, line], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.08 }}
                className="principle-row"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{line}</p>
                <ArrowUpRight className="h-6 w-6" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-20 sm:pb-28">
        <div className="future-card">
          <div className="future-orb" aria-hidden />
          <p className="section-kicker relative z-10">Next chapter</p>
          <h2 className="relative z-10 max-w-4xl font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
            Learning finance.<br />Still shipping software.
          </h2>
          <div className="relative z-10 mt-9 flex flex-wrap gap-3">
            <Link href="/experience" className="button-primary">My journey <ArrowUpRight className="h-4 w-4" /></Link>
            <Link href="/contact" className="button-quiet">Start a conversation</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
