"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="spotlight-card group flex h-full flex-col rounded-xl border border-border p-5 shadow-soft"
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-accent">{project.field}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
            {project.title}
          </h3>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full border px-3 py-1 text-xs font-semibold",
            project.status === "Live"
              ? "border-foreground bg-foreground text-background"
              : "border-border bg-background/60 text-muted",
          )}
        >
          {project.status}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
      <p className="mt-4 border-l border-accent/50 pl-4 text-sm leading-7 text-foreground">
        {project.thinking}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 6).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
        >
          Details
          <ArrowUpRight className="h-4 w-4" />
        </Link>
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
        ) : null}
        {project.links?.live ? (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
          >
            Live
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </motion.article>
  )
}
