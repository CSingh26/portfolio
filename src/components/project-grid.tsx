"use client"

import { SectionShell } from "./section-shell"
import { ProjectCard } from "./project-card"
import { projects } from "@/data/projects"

export function ProjectGrid() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Projects across web, AI, and data science."
      description="A mix of UI-driven apps and ML experiments, with each repo documented and linked."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionShell>
  )
}
