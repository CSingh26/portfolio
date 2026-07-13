import type { Metadata } from "next"
import Image from "next/image"
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
  const sections = details?.sections ?? []
  const facts = details?.facts ?? []
  const contributors = details?.contributors ?? []
  const media = details?.media

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

      <h1 className="break-words font-display text-3xl sm:text-4xl">{project.title}</h1>
      <p className="mt-3 max-w-3xl text-lg text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-card px-3 py-1 font-semibold text-muted">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <div className="space-y-6">
          {media ? (
            <figure className="glass overflow-hidden rounded-[1.75rem] border border-border shadow-soft">
              <div className="relative aspect-[3/2] w-full bg-background/60">
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              {media.caption ? <figcaption className="px-5 py-4 text-sm text-muted">{media.caption}</figcaption> : null}
            </figure>
          ) : null}
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
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
              {section.body?.length ? (
                <div className="mt-2 space-y-3 text-base text-muted">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {section.bullets?.length ? (
                <ul className="mt-3 space-y-2 text-base text-muted">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <aside className="space-y-4 lg:sticky lg:top-28 lg:h-fit">
          {facts.length ? (
            <div className="glass rounded-2xl border border-border p-5 shadow-soft">
              <p className="text-sm uppercase tracking-[0.16em] text-muted">Project Facts</p>
              <dl className="mt-4 space-y-3">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-start justify-between gap-4 border-b border-border/70 pb-3 last:border-b-0 last:pb-0">
                    <dt className="text-sm text-muted">{fact.label}</dt>
                    <dd className="text-right text-sm font-semibold text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}

          <div className="glass rounded-2xl border border-border p-5 shadow-soft">
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

          {contributors.length ? (
            <div className="glass rounded-2xl border border-border p-5 shadow-soft">
              <p className="text-sm uppercase tracking-[0.16em] text-muted">Contributors</p>
              <div className="mt-4 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-background/70 text-muted">
                    <tr>
                      <th className="px-4 py-3 font-medium">Name</th>
                      <th className="px-4 py-3 font-medium">GitHub</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contributors.map((contributor) => {
                      const handle = contributor.github.replace("https://github.com/", "@")

                      return (
                        <tr key={contributor.github} className="border-t border-border/70">
                          <td className="px-4 py-3 font-medium text-foreground">{contributor.name}</td>
                          <td className="px-4 py-3">
                            <a
                              href={contributor.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 text-muted transition hover:text-accent"
                            >
                              {handle}
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  )
}
