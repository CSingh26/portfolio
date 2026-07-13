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
  if (!project) return { title: "Projects" }

  return {
    title: project.title,
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
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent"
        >
          Back to projects
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted">
            {project.confidence} confidence
          </span>
          {project.links?.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent"
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
              className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-3 py-2 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Live
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_0.55fr] lg:items-start">
        <section>
          <p className="chapter-label">{project.field}</p>
          <h1 className="text-balance mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{project.description}</p>
          <p className="mt-6 max-w-3xl border-l border-accent/50 pl-5 text-base leading-8 text-foreground">
            {project.thinking}
          </p>
        </section>

        <aside className="surface rounded-xl p-5">
          <p className="text-sm font-semibold text-accent">Stack</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold text-muted"
              >
                {item}
              </span>
            ))}
          </div>
          <dl className="mt-6 space-y-3">
            <Fact label="Status" value={project.status} />
            <Fact label="Topics" value={project.categories.join(" / ")} />
            {project.language ? <Fact label="Primary language" value={project.language} /> : null}
            {project.updatedAt ? <Fact label="Updated" value={project.updatedAt} /> : null}
            {facts.map((fact) => (
              <Fact key={fact.label} label={fact.label} value={fact.value} />
            ))}
          </dl>
        </aside>
      </div>

      {media ? (
        <figure className="surface mt-10 overflow-hidden rounded-xl p-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border">
            <Image src={media.src} alt={media.alt} fill sizes="100vw" className="object-cover" />
          </div>
          {media.caption ? <figcaption className="px-2 pt-3 text-sm text-muted">{media.caption}</figcaption> : null}
        </figure>
      ) : null}

      {highlights.length ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">Highlights</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="surface rounded-xl p-5 text-sm leading-7 text-muted">
                {highlight}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {sections.length ? (
        <section className="mt-12 space-y-5">
          {sections.map((section) => (
            <article key={section.title} className="surface rounded-xl p-5">
              <h2 className="font-display text-2xl font-semibold text-foreground">{section.title}</h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-8 text-muted">
                  {paragraph}
                </p>
              ))}
              {section.bullets?.length ? (
                <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>
      ) : null}

      {contributors.length ? (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">Contributors</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {contributors.map((contributor) => (
              <a
                key={contributor.github}
                href={contributor.github}
                target="_blank"
                rel="noreferrer"
                className="surface rounded-xl p-4 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent"
              >
                {contributor.name}
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-border pt-3 text-sm">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-semibold text-foreground">{value}</dd>
    </div>
  )
}
