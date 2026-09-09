import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { education, journeyNarrative } from "@/data/journey"
import { experience } from "@/data/experience"

export function ExperienceSection() {
  return (
    <section id="journey" className="container">
      <header className="max-w-4xl border-b border-border-strong pb-10">
        <p className="section-kicker">About the work</p>
        <h1 className="section-title">Journey.</h1>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <figure className="lg:sticky lg:top-28">
          <div className="portrait-frame">
            <Image
              src="/profile.png"
              alt="Portrait of Chaitanya Singh"
              fill
              priority
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="portrait-caption">
            <span>Chaitanya Singh</span>
            <span>Tempe, Arizona</span>
          </figcaption>
        </figure>

        <div>
          <div className="space-y-6 text-lg leading-relaxed text-muted sm:text-xl">
            {journeyNarrative.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <section className="mt-16" aria-labelledby="education-heading">
            <p className="section-kicker">Academic foundation</p>
            <h2 id="education-heading" className="font-display text-4xl tracking-[-0.025em] sm:text-5xl">Education</h2>
            <div className="mt-6 border-t border-border-strong">
              {education.map((item) => (
                <div key={item.degree} className="grid gap-3 border-b border-border-strong py-5 sm:grid-cols-[10rem_1fr]">
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">{item.period}</p>
                  <div>
                    <h3 className="font-display text-2xl tracking-[-0.02em]">{item.degree}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16" aria-labelledby="experience-heading">
            <p className="section-kicker">2024</p>
            <h2 id="experience-heading" className="font-display text-4xl tracking-[-0.025em] sm:text-5xl">Earlier experience</h2>
            <div className="mt-6 border-t border-border-strong">
              {experience.map((item) => (
                <article key={`${item.role}-${item.org}`} className="grid gap-3 border-b border-border-strong py-5 sm:grid-cols-[10rem_1fr]">
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">{item.period}</p>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{item.role} · {item.org}</h3>
                    <ul className="mt-2 text-sm leading-relaxed text-muted">
                      <li className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>{item.summary}</span>
                      </li>
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-10">
            <Link href="/skills" className="button-quiet">View capabilities <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
