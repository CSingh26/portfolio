"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionShell } from "./section-shell"
import { writing } from "@/data/writing"

export function WritingSection() {
  return (
    <SectionShell
      id="thinking"
      eyebrow="Thinking / Blog"
      title="A notebook for the ideas behind the work."
      description="Short, local essays on finance, backend systems, AI agents, and the product discipline that connects them."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {writing.map((post, index) => (
          <motion.article
            key={post.slug}
            className="surface flex h-full flex-col rounded-xl p-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.04 }}
          >
            <p className="text-sm font-semibold text-accent">
              {post.date} - {post.readingTime}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
              {post.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">{post.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/thinking/${post.slug}`}
              className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-accent transition hover:text-foreground"
            >
              Read note
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
