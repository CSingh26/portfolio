import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { profile } from "@/data/profile"

export function CurrentSignal() {
  return (
    <section className="pb-24 pt-16 sm:pt-20">
      <div className="container">
        <div className="surface grid gap-8 rounded-xl p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="chapter-label">Chapter 04 - Current Signal</p>
            <h2 className="text-balance mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              What I am learning and building now.
            </h2>
          </div>
          <div className="space-y-4">
            {profile.currentSignal.map((item) => (
              <p key={item} className="border-l border-accent/50 pl-4 leading-7 text-muted">
                {item}
              </p>
            ))}
            <Link
              href="/thinking"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Open notebook
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
