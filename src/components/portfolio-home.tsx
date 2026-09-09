"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, Download, Github } from "lucide-react"
import { Marquee } from "@/components/marquee"
import { now } from "@/data/now"
import { projects, type Project } from "@/data/projects"
import { getLatestWriting } from "@/data/writing"

const focusAreas = ["Markets", "Risk", "Data", "Systems", "Research"] as const

const workAreas = [
  {
    index: "01",
    title: "Financial analysis",
    description: "I study how businesses allocate capital, report performance, and create or absorb risk.",
    items: ["Corporate finance", "Valuation", "Financial statements", "SEC filings", "Capital budgeting", "Risk and return"],
  },
  {
    index: "02",
    title: "Quantitative systems",
    description: "I build models and pipelines that turn market behavior into measurable, testable signals.",
    items: ["Volatility modeling", "Monte Carlo simulation", "Regime detection", "Risk calculations", "Market data pipelines"],
  },
  {
    index: "03",
    title: "Product engineering",
    description: "I build the infrastructure and interfaces that move analysis from a notebook into useful decisions.",
    items: ["Backend architecture", "APIs", "Data infrastructure", "Applied machine learning", "Clear interfaces"],
  },
] as const

const featuredSlugs = [
  "synaxis",
  "credit-lens",
  "fraud-pulse",
  "hybrid-token-efficient-routing-agent",
  "apex-arena",
  "cinejaal",
] as const

const featured = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project))

const principles = [
  ["Curiosity", "Start between disciplines and follow the question wherever the evidence leads."],
  ["Clarity", "Make complexity legible without removing the nuance that matters."],
  ["Trust", "Show sources, limits, assumptions, and uncertainty."],
  ["Execution", "Build beyond the first demo and design for the work of operating it."],
] as const

export function PortfolioHome() {
  const reduceMotion = useReducedMotion()
  const latestWriting = getLatestWriting(3)
  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { delay, duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <main className="portfolio-home overflow-hidden">
      <section className="relative min-h-[94vh] border-b border-border pt-28 sm:pt-32">
        <div className="hero-grid" aria-hidden />
        <div className="container relative grid min-h-[calc(94vh-8rem)] gap-12 pb-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <p className="section-kicker">Finance × Data × Technology</p>
            <h1 className="hero-title max-w-4xl text-[clamp(3.3rem,7.3vw,7rem)] leading-[0.9] tracking-[-0.045em]">
              Turning financial complexity into usable intelligence.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              I build software and quantitative systems for financial markets. MS Finance candidate at W. P. Carey, BS Computer Science from the Ira A. Fulton Schools of Engineering at ASU.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="button-primary">
                Selected work <ArrowDownRight className="h-4 w-4" />
              </Link>
              <Link href="/Chaitanya_Singh_Resume.pdf" className="button-quiet">
                Résumé <Download className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.12, duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="market-instrument"
            aria-hidden="true"
          >
            <svg viewBox="0 0 560 420" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              <defs>
                <pattern id="instrument-grid" width="56" height="52.5" patternUnits="userSpaceOnUse">
                  <path d="M 56 0 L 0 0 0 52.5" fill="none" stroke="var(--color-border)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="560" height="420" fill="url(#instrument-grid)" />
              <path
                d="M0 292 C44 278 74 300 112 260 S177 182 220 214 S283 326 326 260 S384 126 430 174 S496 248 560 112"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="1.6"
                vectorEffect="non-scaling-stroke"
              />
              <path d="M0 318 H560" stroke="var(--color-border-strong)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <circle cx="430" cy="174" r="3" fill="var(--color-accent)" />
              <text x="24" y="38" fill="var(--color-muted)" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.4">σ 30d</text>
              <text x="372" y="148" fill="var(--color-muted)" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.1">regime: high vol</text>
              <text x="24" y="392" fill="var(--color-muted)" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.4">p(≥2σ) 0.047</text>
            </svg>
          </motion.div>
        </div>
        <Marquee items={focusAreas} label="Areas of focus" duration={56} />
      </section>

      <section className="container py-24 sm:py-32" id="about">
        <motion.div {...rise()} className="mb-12 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="section-kicker">The practice</p>
            <h2 className="section-title">What I work on</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted md:justify-self-end">
            Financial reasoning, quantitative methods, and product engineering brought into one working system.
          </p>
        </motion.div>

        <div className="grid border-l border-t border-border md:grid-cols-3">
          {workAreas.map((area, index) => (
            <motion.article
              key={area.index}
              {...rise(index * 0.06)}
              className="flex min-h-[25rem] flex-col border-b border-r border-border p-6 sm:p-8"
            >
              <span className="font-mono text-xs tracking-[0.14em] text-accent">{area.index}</span>
              <h3 className="mt-8 font-display text-3xl tracking-[-0.025em]">{area.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{area.description}</p>
              <ul className="mt-auto space-y-2 pt-8 text-sm text-foreground">
                {area.items.map((item) => (
                  <li key={item} className="border-t border-border pt-2">{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-20 sm:py-24" id="now">
        <motion.div {...rise()} className="container grid gap-10 lg:grid-cols-[0.45fr_1.55fr]">
          <div>
            <p className="section-kicker">Current focus</p>
            <h2 className="section-title">Now</h2>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">{now.date}</p>
          </div>
          <div className="border-t border-border-strong">
            {now.focus.map((line, index) => (
              <div key={line} className="grid gap-3 border-b border-border-strong py-5 sm:grid-cols-[2.5rem_1fr]">
                <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-lg leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-b border-border bg-ink py-24 text-paper sm:py-32" id="selected-work">
        <div className="container">
          <motion.div {...rise()} className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker !text-[rgba(244,241,232,0.55)]">Systems · 2024 to 2026</p>
              <h2 className="section-title text-paper">Selected work.</h2>
            </div>
            <Link href="/projects" className="button-on-dark">
              All projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="project-wall">
            {featured.map((project, index) => (
              <motion.article key={project.slug} {...rise(Math.min(index * 0.05, 0.2))} className="project-tile">
                <Link href={`/projects/${project.slug}`} className="project-tile-main" aria-label={`Read about ${project.title}`}>
                  <div className="project-tile-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.tier}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </Link>
                <div className="project-links">
                  <span>{project.status}</span>
                  <div className="flex items-center gap-4">
                    {project.links?.github ? (
                      <a href={project.links.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
                        <Github className="h-4 w-4" />
                      </a>
                    ) : null}
                    {project.links?.live ? (
                      <a href={project.links.live} target="_blank" rel="noreferrer">Live <ArrowUpRight className="h-4 w-4" /></a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 sm:py-32" id="research-notes">
        <motion.div {...rise()} className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Analysis in progress</p>
            <h2 className="section-title">Research notes</h2>
          </div>
          <Link href="/writing" className="button-quiet">All writing <ArrowUpRight className="h-4 w-4" /></Link>
        </motion.div>
        <div className="border-t border-border-strong">
          {latestWriting.map((post, index) => (
            <motion.article key={post.slug} {...rise(index * 0.06)} className="grid gap-4 border-b border-border-strong py-6 md:grid-cols-[9rem_1fr_auto] md:items-center">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{post.date}</p>
              <div>
                <h3 className="font-display text-2xl tracking-[-0.02em]">{post.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{post.description}</p>
              </div>
              <Link href={`/writing/${post.slug}`} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-accent transition hover:text-foreground">
                Read note <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container pb-24 sm:pb-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div {...rise()} className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">Operating principles</p>
            <h2 className="section-title">How I build.</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Technology should handle the complexity. The user should receive clarity.
            </p>
          </motion.div>
          <div className="principle-stack">
            {principles.map(([title, line], index) => (
              <motion.div key={title} {...rise(index * 0.06)} className="principle-row">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-20 sm:pb-28">
        <motion.div {...rise()} className="closing-block">
          <p className="section-kicker">The through line</p>
          <h2 className="max-w-5xl font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.045em]">
            Finance is the domain. Software is the instrument.
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/experience" className="button-primary">My journey <ArrowUpRight className="h-4 w-4" /></Link>
            <Link href="/contact" className="button-quiet">Get in touch</Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
