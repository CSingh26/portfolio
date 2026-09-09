"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ProjectCard } from "./project-card"
import { projects, projectTiers, type ProjectTier } from "@/data/projects"

const tierDescriptions: Record<ProjectTier, string> = {
  "Financial systems": "Research, models, and decision infrastructure for markets, portfolios, credit, and fraud.",
  "Intelligent systems": "Applied machine learning and agent systems designed around evidence, efficiency, and explanation.",
  "Applied products": "End-to-end products that turn complex workflows and datasets into usable experiences.",
  Archive: "Earlier machine-learning studies and foundational experiments.",
}

export function ProjectGrid() {
  const [archiveOpen, setArchiveOpen] = useState(false)

  const renderTier = (tier: ProjectTier) => {
    const tierProjects = projects.filter((project) => project.tier === tier)
    const sectionId = `tier-${tier.toLowerCase().replace(/\s+/g, "-")}`

    return (
      <section key={tier} aria-labelledby={sectionId}>
        <div className="mb-6 grid gap-4 border-b border-border-strong pb-5 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <div>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-accent">
              {String(projectTiers.indexOf(tier) + 1).padStart(2, "0")} · {tierProjects.length} projects
            </p>
            <h2 id={sectionId} className="mt-2 font-display text-4xl tracking-[-0.025em] text-foreground sm:text-5xl">
              {tier}
            </h2>
          </div>
          <p className="max-w-2xl leading-relaxed text-muted md:justify-self-end">{tierDescriptions[tier]}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tierProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} index={projects.indexOf(project) + 1} />
          ))}
        </div>
      </section>
    )
  }

  const primaryTiers = projectTiers.filter((tier) => tier !== "Archive")

  return (
    <section id="projects" className="container">
      <header className="max-w-4xl border-b border-border-strong pb-10">
        <p className="section-kicker">Portfolio</p>
        <h1 className="section-title">Selected work.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Systems for markets and risk, intelligent tooling, and applied products built end to end.
        </p>
      </header>

      <div className="mt-14 space-y-20">
        {primaryTiers.map(renderTier)}

        <section aria-labelledby="tier-archive">
          <button
            type="button"
            onClick={() => setArchiveOpen((open) => !open)}
            aria-expanded={archiveOpen}
            aria-controls="archive-projects"
            className="flex w-full items-center justify-between gap-4 border-y border-border-strong py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span>
              <span className="block font-mono text-[0.66rem] uppercase tracking-[0.14em] text-accent">04 · 4 projects</span>
              <span id="tier-archive" className="mt-2 block font-display text-4xl tracking-[-0.025em] sm:text-5xl">Archive</span>
            </span>
            <span className="flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted">
              {archiveOpen ? "Hide archive" : "Show archive"}
              <ChevronDown className={`h-4 w-4 transition-transform ${archiveOpen ? "rotate-180" : ""}`} aria-hidden />
            </span>
          </button>
          {archiveOpen ? (
            <div id="archive-projects" className="mt-6">
              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">{tierDescriptions.Archive}</p>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {projects.filter((project) => project.tier === "Archive").map((project) => (
                  <ProjectCard key={project.slug} project={project} index={projects.indexOf(project) + 1} />
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </section>
  )
}
