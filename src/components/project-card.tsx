"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { useRouter } from "next/navigation"
import type { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const reduceMotion = useReducedMotion()
  const router = useRouter()

  const handleNavigate = () => {
    router.push(`/projects/${project.slug}`)
  }

  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/80 p-5 shadow-soft backdrop-blur-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      whileHover={reduceMotion ? undefined : { y: -6, rotate: 0.3, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) return
        handleNavigate()
      }}
      onKeyDown={(event) => {
        if ((event.target as HTMLElement).closest("a")) return
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          handleNavigate()
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`View ${project.title} details`}
    >
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-foreground/10" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-muted">{project.slug}</p>
          <h3 className="font-display text-xl text-foreground">{project.title}</h3>
        </div>
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold",
            project.status === "Live"
              ? "bg-foreground text-background"
              : project.status === "In Progress"
                ? "border border-accent/60 text-accent"
                : project.status === "Completed"
                  ? "border border-border text-foreground"
                  : "border border-border text-muted",
          )}
        >
          {project.status}
        </span>
      </div>
      <p className="mt-3 text-sm text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-background px-3 py-1 font-semibold text-muted transition group-hover:border-accent group-hover:text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between gap-2 pt-4 text-sm font-semibold">
        {project.links?.github ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} on GitHub`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted transition hover:border-accent hover:text-accent"
          >
            <Github className="h-5 w-5" />
          </a>
        ) : (
          <span />
        )}
        {project.links?.live ? (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-foreground px-3 py-2 text-background transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            Live
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
        {project.links?.caseStudy ? (
          <a
            href={project.links.caseStudy}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-2 transition hover:border-accent hover:text-accent"
          >
            Case Study
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </motion.article>
  )
}
