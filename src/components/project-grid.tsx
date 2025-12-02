"use client"

import { SectionShell } from "./section-shell"
import { ProjectCard } from "./project-card"
import { projects } from "@/data/projects"

export function ProjectGrid() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Shipping products that connect data, security, and thoughtful UX."
      description="A mix of fintech, analytics, and systems explorations. Most are open source and actively evolving."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionShell>
  )
}
