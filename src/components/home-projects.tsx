import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { SpotlightCard } from "@/components/motion-primitives"
import { featuredProjects } from "@/data/projects"

export function HomeProjects() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="chapter-label">Chapter 03 - Selected Work</p>
          <h2 className="text-balance mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            A few public builds that show how I structure problems.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <SpotlightCard key={project.slug} className="flex h-full flex-col p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-accent">{project.field}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
                {project.links?.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted transition hover:border-accent hover:text-accent"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
              <p className="mt-4 border-l border-accent/50 pl-4 text-sm leading-7 text-foreground">
                {project.thinking}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-accent transition hover:text-foreground"
              >
                Read project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </SpotlightCard>
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Browse all public projects
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
