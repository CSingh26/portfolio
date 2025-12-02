"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SectionShell } from "./section-shell"
import { writing } from "@/data/writing"

export function WritingSection() {
  return (
    <SectionShell
      id="writing"
      eyebrow="Writing"
      title="Notes on building resilient, secure systems."
      description="Drafts and published pieces on fintech, data pipelines, and security lessons from the field."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {writing.map((post) => (
          <motion.article
            key={post.slug}
            className="glass h-full rounded-2xl border border-border p-5 shadow-soft"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
          >
            <p className="text-sm uppercase tracking-[0.16em] text-muted">{post.readingTime}</p>
            <h3 className="mt-1 font-display text-xl text-foreground">{post.title}</h3>
            <p className="mt-2 text-sm text-muted">{post.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background px-3 py-1 font-semibold text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/writing/${post.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-foreground"
            >
              Read more →
            </Link>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
