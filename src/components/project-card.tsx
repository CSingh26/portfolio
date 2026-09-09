import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import type { Project } from "@/data/projects"

type Props = {
  index: number
  project: Project
}

export function ProjectCard({ index, project }: Props) {
  return (
    <article className="group flex min-w-0 h-full flex-col border border-border bg-card p-5 transition hover:border-accent sm:p-6">
      <div className="flex items-center justify-between gap-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
        <span>{String(index).padStart(2, "0")}</span>
        <span>{project.status}</span>
      </div>

      <h3 className="mt-7 break-words font-display text-3xl leading-none tracking-[-0.025em] text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 truncate text-sm text-muted" title={project.description}>{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.1em] text-muted">
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-border pt-5 font-mono text-[0.66rem] uppercase tracking-[0.1em]">
        <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5 text-accent transition hover:text-foreground">
          Details <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
        {project.links?.github ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition hover:text-accent"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
        ) : null}
        {project.links?.live ? (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition hover:text-accent"
          >
            Live <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </article>
  )
}
