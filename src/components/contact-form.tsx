"use client"

import { useState, type FormEvent, type ReactNode } from "react"
import { motion } from "framer-motion"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { SectionShell } from "./section-shell"
import { cn } from "@/lib/utils"

type FormState = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus("error")
      return
    }
    setStatus("success")
  }

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Let’s build something bold."
      description="Open to fintech, data, backend, and security roles or collaborations. Reach out for internships, part-time work, or consulting."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass rounded-2xl border border-border p-6 shadow-soft">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-foreground" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className="mt-2 h-32 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tell me about your project, role, or idea."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ y: -2, scale: 1.01 }}
              className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 font-semibold text-background shadow-soft transition hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Send message
            </motion.button>
            {status === "success" ? (
              <p className="text-sm font-semibold text-accent">Thanks! I&apos;ll reply shortly.</p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm font-semibold text-foreground">Please fill in all fields.</p>
            ) : null}
          </form>
        </div>
        <div className="space-y-4">
          <p className="text-lg text-muted">
            Prefer async? Tap an icon to email, connect, or grab the resume. I reply within a day,
            usually with a quick architecture sketch.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <ContactIcon
              href="mailto:csingh.tech@asu.edu"
              label="Email"
              icon={<Mail className="h-4 w-4" />}
            />
            <ContactIcon
              href="https://www.linkedin.com/in/chaitanya-singh-tech"
              label="LinkedIn"
              icon={<Linkedin className="h-4 w-4" />}
            />
            <ContactIcon
              href="https://github.com/chaitanyasingh"
              label="GitHub"
              icon={<Github className="h-4 w-4" />}
            />
            <ContactIcon
              href="/Chaitanya_Singh_Resume.pdf"
              label="Resume"
              icon={<Download className="h-4 w-4" />}
            />
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

function ContactIcon({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  const external = href.startsWith("http")
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/70 text-foreground shadow-soft transition",
        "hover:-translate-y-1 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      )}
      aria-label={label}
    >
      {icon}
      <span className="pointer-events-none absolute -bottom-6 origin-top scale-95 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted transition group-hover:scale-100 group-hover:text-foreground">
        {label}
      </span>
    </a>
  )
}
