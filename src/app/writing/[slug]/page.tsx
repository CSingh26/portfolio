import type { Metadata } from "next"
import Image from "next/image"
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

  const dateStamp = post.date ? `${post.date} · ${post.readingTime}` : post.readingTime

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
          {dateStamp}
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
      <figure className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        <Image
          src={post.hero}
          alt={post.visualAlt}
          width={1600}
          height={900}
          priority
          className="h-auto w-full object-cover"
        />
        <figcaption className="border-t border-border px-4 py-3 text-xs text-muted">
          Original editorial visual for this article.
        </figcaption>
      </figure>
      <div className="mt-8 space-y-4 text-base leading-8 text-muted">
        {post.content?.length ? (
          post.content.map((paragraph, index) => <p key={`${post.slug}-p-${index}`}>{paragraph}</p>)
        ) : (
          <p>
            Full post coming soon. Expect architecture diagrams, code snippets, and operational checklists that
            mirror how I actually ship these systems.
          </p>
        )}
      </div>
      <figure className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        {/* GIFs provide a compact, accessible view of the controlled workflow described in each post. */}
        <img src={post.architecture} alt={`Animated architecture flow for ${post.title}`} className="h-auto w-full" />
        <figcaption className="border-t border-border px-4 py-3 text-xs text-muted">
          Animated architecture flow. The highlighted stage advances through the controlled decision path.
        </figcaption>
      </figure>
      <section className="mt-10 border-t border-border pt-8" aria-labelledby="works-cited">
        <h2 id="works-cited" className="font-display text-2xl text-foreground">Works Cited</h2>
        <ol className="mt-4 space-y-3 text-sm leading-6 text-muted">
          {post.citations.map((citation) => (
            <li key={citation.href} className="pl-6 -indent-6">
              <a
                href={citation.href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-accent/60 underline-offset-4 transition hover:text-accent"
              >
                {citation.label}
              </a>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
