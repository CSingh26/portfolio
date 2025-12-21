import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionShell } from "./section-shell"
import { projects } from "@/data/projects"

export function HomeProjects() {
  const featured = projects.slice(0, 3)

  return (
    <SectionShell
      eyebrow="Featured"
      title="Recent projects at a glance."
      description="Recent web projects ranging from quiz platforms to journaling and design sites."
      className="pb-24"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <div
            key={project.slug}
            className="group flex h-full flex-col rounded-2xl border border-border bg-card/80 p-5 shadow-soft backdrop-blur-md transition hover:-translate-y-1 hover:border-accent"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl text-foreground">{project.title}</h3>
              <span className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                {project.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted">{project.description}</p>
            <Link
              href="/projects"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:text-foreground"
            >
              View details
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between rounded-2xl border border-dashed border-border/70 bg-card px-5 py-4 text-sm text-muted">
        <p className="text-base text-foreground">Want the full breakdown?</p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
        >
          Browse all projects
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </SectionShell>
  )
}
