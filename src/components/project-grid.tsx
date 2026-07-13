"use client"

import { useMemo, useState } from "react"
import { SlidersHorizontal } from "lucide-react"
import { SectionShell } from "./section-shell"
import { ProjectCard } from "./project-card"
import {
  projectFieldDescriptions,
  projectFields,
  projectFilters,
  projects,
  type ProjectField,
} from "@/data/projects"
import { cn } from "@/lib/utils"

type Filter = (typeof projectFilters)[number]

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("All")

  const groupedProjects = useMemo(() => {
    const visibleFields = filter === "All" ? projectFields : [filter as ProjectField]

    return visibleFields
      .map((field) => ({
        field,
        projects: projects.filter((project) => project.field === field),
      }))
      .filter((group) => group.projects.length > 0)
  }, [filter])

  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Projects organized by the field they contribute to."
      description="Each project has one primary field, so the collection is easy to scan without repeating the same build across several categories."
    >
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="mr-2 inline-flex items-center gap-2 text-sm font-semibold text-muted">
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </span>
        {projectFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              filter === item
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card text-muted hover:border-accent hover:text-foreground",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="space-y-14">
        {groupedProjects.map((group) => (
          <section key={group.field} aria-labelledby={`field-${group.field.replaceAll(" ", "-").toLowerCase()}`}>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
              <div>
                <h2
                  id={`field-${group.field.replaceAll(" ", "-").toLowerCase()}`}
                  className="font-display text-2xl font-semibold text-foreground sm:text-3xl"
                >
                  {group.field}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                  {projectFieldDescriptions[group.field]}
                </p>
              </div>
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted">
                {group.projects.length} {group.projects.length === 1 ? "project" : "projects"}
              </span>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {group.projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </SectionShell>
  )
}
