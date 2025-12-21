"use client"

import { SectionShell } from "./section-shell"
import { ProjectCard } from "./project-card"
import { projects } from "@/data/projects"

export function ProjectGrid() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Projects across web platforms and thoughtful UX."
      description="Quiz, journaling, and design-centric builds focused on clean interfaces and reliable backends."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionShell>
  )
}
