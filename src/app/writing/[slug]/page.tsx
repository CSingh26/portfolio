import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { writing } from "@/data/writing"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return writing.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = writing.find((item) => item.slug === slug)
  if (!post) return { title: "Writing | Chaitanya" }

  return {
    title: `${post.title} | Chaitanya`,
    description: post.description,
  }
}

export default async function WritingDetail({ params }: Props) {
  const { slug } = await params
  const post = writing.find((item) => item.slug === slug)
  if (!post) notFound()

  return (
    <div className="container min-h-screen pt-28 pb-16">
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent"
        >
          ← Back to writing
        </Link>
        <span className="rounded-full bg-card px-3 py-1 text-xs font-semibold text-muted">
          {post.readingTime}
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl">{post.title}</h1>
      <p className="mt-3 max-w-3xl text-lg text-muted">{post.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-card px-3 py-1 font-semibold text-muted">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-8 space-y-4 text-base text-muted">
        <p>
          Full post coming soon. Expect architecture diagrams, code snippets, and operational checklists that
          mirror how I actually ship these systems.
        </p>
        <p>
          Want an early preview or have feedback? Reach out at{" "}
          <a href="mailto:csingh.tech@asu.edu" className="font-semibold text-accent underline-offset-4 hover:underline">
            csingh.tech@asu.edu
          </a>
          .
        </p>
      </div>
    </div>
  )
}
