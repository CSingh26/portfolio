"use client"

import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react"

const socials = [
  { href: "https://github.com/CSingh26", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/chaitanya-singh-10065a213/", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com/csingh04", label: "X", icon: Twitter },
  { href: "mailto:singh.chaittanya@gmail.com", label: "Email", icon: Mail },
]

export function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
  }

  return (
    <footer className="relative z-10 border-t border-border bg-background">
      <div className="container grid gap-6 py-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="max-w-xl text-sm text-foreground">
            Building intelligent systems at the intersection of finance, data, and technology.
          </p>
          <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
            © {year} Chaitanya Singh
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <button
            onClick={scrollTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
