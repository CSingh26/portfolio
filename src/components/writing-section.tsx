import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getLatestWriting, writing } from "@/data/writing"

export function WritingSection() {
  const posts = getLatestWriting(writing.length)

  return (
    <section id="writing" className="container">
      <header className="max-w-4xl border-b border-border-strong pb-10">
        <p className="section-kicker">Research notes</p>
        <h1 className="section-title">Writing.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
          Notes on financial machine learning, quantitative methods, and building intelligent systems that people can trust.
        </p>
      </header>

      <div className="mt-10 border-t border-border-strong">
        {posts.map((post) => (
          <article key={post.slug} className="grid gap-4 border-b border-border-strong py-6 lg:grid-cols-[9rem_1fr_auto] lg:items-center">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">{post.date}</p>
            <div>
              <h2 className="font-display text-2xl tracking-[-0.02em] sm:text-3xl">{post.title}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{post.description}</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted">
                {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <Link href={`/writing/${post.slug}`} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-accent transition hover:text-foreground">
              Read note <ArrowUpRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
