"use client"

import { useState, type FormEvent } from "react"
import { Mail, MapPin, Send } from "lucide-react"

const contactItems = [
  {
    label: "Email",
    value: "singh.chaittanya@gmail.com",
    href: "mailto:singh.chaittanya@gmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Tempe, AZ",
    icon: MapPin,
  },
]

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatusMessage("")

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error")
      setStatusMessage("Please fill in all fields.")
      return
    }

    try {
      setStatus("sending")
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const payload = await response.json().catch(() => ({}))

      if (!response.ok) {
        setStatus("error")
        setStatusMessage(payload?.error || "Something went wrong. Please try again.")
        return
      }

      setStatus("success")
      setStatusMessage("Thanks! I will reply shortly.")
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch {
      setStatus("error")
      setStatusMessage("Unable to send right now. Please try again soon.")
    }
  }

  return (
    <section id="contact" className="container">
      <div className="max-w-4xl border-b border-border-strong pb-10">
        <p className="section-kicker">Contact</p>
        <h1 className="section-title">Get in touch.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
          I am interested in conversations with researchers, professors, founders, and finance professionals working on markets, risk, and decision tools.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border border-border bg-card p-6">
          <h2 className="font-display text-3xl text-foreground">Contact information</h2>
          <p className="mt-2 text-sm text-muted">Email or write from the form.</p>
          <div className="mt-6 space-y-4">
            {contactItems.map((item) => (
              <ContactItem key={item.label} {...item} />
            ))}
          </div>
        </div>

        <div className="border border-border bg-card p-6">
          <h2 className="font-display text-3xl text-foreground">Send a message</h2>
          <p className="mt-2 text-sm text-muted">Tell me what you are working on.</p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-foreground" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
                autoComplete="name"
                required
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
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="What is this regarding?"
                required
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
                className="mt-2 h-32 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-inner focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your message"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "sending"}
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {statusMessage ? (
              <p
                className={
                  status === "success"
                    ? "text-sm font-semibold text-accent"
                    : "text-sm font-semibold text-foreground"
                }
                aria-live="polite"
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}

type ContactItemProps = {
  label: string
  value: string
  href?: string
  icon: typeof Mail
}

function ContactItem({ label, value, href, icon: Icon }: ContactItemProps) {
  const content = (
    <>
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-sm text-muted">{value}</p>
      </div>
    </>
  )

  if (!href) {
    return <div className="flex items-center gap-4">{content}</div>
  }

  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-xl border border-transparent p-2 transition hover:border-border hover:bg-background/40"
    >
      {content}
    </a>
  )
}
