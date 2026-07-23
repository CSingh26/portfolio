import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { additionalResearch, writing } from "@/data/writing"

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
  const paragraphs = [...post.content, ...(additionalResearch[post.slug] ?? [])]
  const imageSource = post.hero.includes("apex")
    ? { label: "Apex Arena repository", href: "https://github.com/CSingh26/Apex-Arena" }
    : post.hero.includes("hybrid")
      ? { label: "Hybrid Token-Efficient Routing Agent repository", href: "https://github.com/aroramrinaal/hybrid-token-efficient-routing-agent" }
      : { label: "Unsplash research photography", href: "https://unsplash.com/" }
  const architectureCaption = post.architecture.includes("hybrid-token")
    ? "Token-versus-accuracy experiment animation from the Hybrid Token-Efficient Routing Agent repository."
    : "Animated architecture flow. The highlighted stage advances through the controlled decision path."

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
          Research image source: {" "}
          <a href={imageSource.href} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-accent">
            {imageSource.label}
          </a>. Charts and diagrams below are generated from cited or project-provided data.
        </figcaption>
      </figure>
      <div className="mt-8 space-y-4 text-base leading-8 text-muted">
        {paragraphs.length ? (
          paragraphs.map((paragraph, index) => <p key={`${post.slug}-p-${index}`}>{paragraph}</p>)
        ) : (
          <p>
            Full post coming soon. Expect architecture diagrams, code snippets, and operational checklists that
            mirror how I actually ship these systems.
          </p>
        )}
      </div>
      {post.figures?.map((figure) => (
        <figure key={figure.src} className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <Image src={figure.src} alt={figure.alt} width={1600} height={900} className="h-auto w-full object-contain" />
          <figcaption className="border-t border-border px-4 py-3 text-xs text-muted">{figure.caption}</figcaption>
        </figure>
      ))}
      <figure className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        {/* GIFs provide a compact, accessible view of the controlled workflow described in each post. */}
        <Image
          src={post.architecture}
          alt={`Animated architecture flow for ${post.title}`}
          width={900}
          height={260}
          unoptimized
          className="h-auto w-full"
        />
        <figcaption className="border-t border-border px-4 py-3 text-xs text-muted">
          {architectureCaption}
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
