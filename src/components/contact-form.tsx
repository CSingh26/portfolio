"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import Link from "next/link"
import { profile } from "@/data/profile"

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: profile.links.email,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: "tel:+14807428613",
    icon: Phone,
  },
  {
    label: "Location",
    value: profile.location,
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
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
      setStatusMessage("Thanks. I will reply shortly.")
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch {
      setStatus("error")
      setStatusMessage("Unable to send right now. Email works too.")
    }
  }

  return (
    <section id="contact" className="container">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="chapter-label">Contact</p>
          <h1 className="text-balance mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s talk about systems, finance, backend work, or thoughtful product ideas.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted">
            I am especially interested in roles and collaborations around backend systems, cloud,
            data, AI, fintech, security, and infrastructure-heavy product work.
          </p>
          <div className="mt-8 grid gap-3">
            {contactItems.map((item) => (
              <ContactItem key={item.label} {...item} />
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <Link
              href={profile.resumePath}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" />
              Resume
            </Link>
          </div>
        </div>

        <div className="surface rounded-xl p-5 sm:p-6">
          <h2 className="font-display text-2xl font-semibold text-foreground">Send a message</h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                id="name"
                value={form.name}
                onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
                autoComplete="name"
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
                autoComplete="email"
              />
            </div>
            <Field
              label="Subject"
              id="subject"
              value={form.subject}
              onChange={(value) => setForm((prev) => ({ ...prev, subject: value }))}
            />
            <div>
              <label className="block text-sm font-semibold text-foreground" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                className="mt-2 h-36 w-full resize-none rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground shadow-inner outline-none transition focus:border-accent focus:ring-2 focus:ring-ring"
                placeholder="What are you building?"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={status === "sending" ? undefined : { y: -2 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-soft transition hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "sending"}
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
            {statusMessage ? (
              <p className="text-sm font-semibold text-muted" aria-live="polite">
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  id: keyof FormState
  value: string
  onChange: (value: string) => void
  type?: string
  autoComplete?: string
}

function Field({ label, id, value, onChange, type = "text", autoComplete }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground shadow-inner outline-none transition focus:border-accent focus:ring-2 focus:ring-ring"
        autoComplete={autoComplete}
        required
      />
    </div>
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
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-foreground">{label}</span>
        <span className="block text-sm text-muted">{value}</span>
      </span>
    </>
  )

  if (!href) {
    return <div className="surface flex items-center gap-4 rounded-xl p-3">{content}</div>
  }

  return (
    <a
      href={href}
      className="surface flex items-center gap-4 rounded-xl p-3 transition hover:border-accent"
    >
      {content}
    </a>
  )
}
