import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, Github } from "lucide-react"
import { projects } from "@/data/projects"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) return { title: "Projects | Chaitanya" }

  return {
    title: `${project.title} | Chaitanya`,
    description: project.description,
  }
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()

  const details = project.details
  const highlights = details?.highlights ?? []
  const stack = details?.stack ?? project.tags

  return (
    <div className="container min-h-screen pt-28 pb-16">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent"
        >
          ← Back to projects
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={
              project.status === "Live"
                ? "rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background"
                : project.status === "In Progress"
                  ? "rounded-full border border-accent/60 px-3 py-1 text-xs font-semibold text-accent"
                  : project.status === "Completed"
                    ? "rounded-full border border-border px-3 py-1 text-xs font-semibold text-foreground"
                    : "rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted"
            }
          >
            {project.status}
          </span>
          {project.links?.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
          {project.links?.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground px-3 py-2 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>

      <h1 className="font-display text-3xl sm:text-4xl">{project.title}</h1>
      <p className="mt-3 max-w-3xl text-lg text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-card px-3 py-1 font-semibold text-muted">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Overview</h2>
            <p className="mt-2 text-base text-muted">
              {details?.overview ?? "Project details are being finalized. Check back soon."}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Highlights</h2>
            {highlights.length ? (
              <ul className="mt-3 space-y-2 text-base text-muted">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-base text-muted">Highlights coming soon.</p>
            )}
          </div>
        </div>

        <div className="glass h-fit rounded-2xl border border-border p-5 shadow-soft">
          <p className="text-sm uppercase tracking-[0.16em] text-muted">Stack</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-card px-3 py-1 font-semibold text-muted"
              >
                {item}
              </span>
            ))}
          </div>
          {project.links?.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent"
            >
              View repository
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}
