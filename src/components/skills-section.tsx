import { skills } from "@/data/skills"

export function SkillsSection() {
  return (
    <section id="capabilities" className="container">
      <header className="max-w-4xl border-b border-border-strong pb-10">
        <p className="section-kicker">Working knowledge</p>
        <h1 className="section-title">Capabilities.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          A practical matrix spanning financial reasoning, quantitative methods, engineering, and product judgment.
        </p>
      </header>

      <div className="mt-14 grid border-l border-t border-border md:grid-cols-2 xl:grid-cols-4">
        {skills.map((category, index) => (
          <article key={category.category} className="flex min-h-[27rem] flex-col border-b border-r border-border p-6">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-accent">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-6 font-display text-3xl tracking-[-0.025em]">{category.category}</h2>
            <ul className="mt-8 space-y-0 text-sm text-muted">
              {category.items.map((item) => <li key={item} className="border-t border-border py-2.5">{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
