"use client"

import { SectionShell } from "./section-shell"
import { ProjectCard } from "./project-card"
import { projectFields, projects, type ProjectField } from "@/data/projects"

const fieldDescriptions: Record<ProjectField, string> = {
  "AI & Intelligent Systems": "Agents, language systems, recommendation engines, and applied machine learning.",
  "Data Science & Analytics": "Data modeling, predictive analysis, visualization, and evidence-driven exploration.",
  "Web & Full-Stack": "End-to-end browser products, APIs, and production websites.",
  "Mobile Applications": "Native and cross-platform products designed around mobile workflows.",
  "Finance & Fintech": "Financial decision tools, risk systems, and money-management products.",
  "Cloud & Infrastructure": "Operational systems, deployment architecture, and cloud-native platforms.",
  "Developer Tools & Security": "Engineering tools, code intelligence, visualization, and safer systems.",
}

export function ProjectGrid() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Projects organized by their primary field."
      description="Each project appears once under the topic that best describes its central problem and contribution."
    >
      <div className="space-y-14">
        {projectFields.map((field) => {
          const fieldProjects = projects.filter((project) => project.field === field)
          if (!fieldProjects.length) return null

          return (
            <section key={field} aria-labelledby={`field-${field.replaceAll(" ", "-").toLowerCase()}`}>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
                <div>
                  <h2
                    id={`field-${field.replaceAll(" ", "-").toLowerCase()}`}
                    className="font-display text-2xl text-foreground sm:text-3xl"
                  >
                    {field}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted">{fieldDescriptions[field]}</p>
                </div>
                <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted">
                  {fieldProjects.length} {fieldProjects.length === 1 ? "project" : "projects"}
                </span>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {fieldProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </SectionShell>
  )
}
