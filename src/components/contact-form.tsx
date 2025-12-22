"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"

const contactItems = [
  {
    label: "Email",
    value: "singh.chaittanya@gmail.com",
    href: "mailto:singh.chaittanya@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+1 (480)-742-8613",
    href: "tel:+14807428613",
    icon: Phone,
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
    } catch (error) {
      setStatus("error")
      setStatusMessage("Unable to send right now. Please try again soon.")
    }
  }

  return (
    <section id="contact" className="container">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Contact</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Contact Me</h1>
        <p className="mt-3 text-base text-muted">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass rounded-2xl border border-border p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-foreground">Contact Information</h2>
          <p className="mt-1 text-sm text-muted">Here is how you can reach me</p>
          <div className="mt-6 space-y-4">
            {contactItems.map((item) => (
              <ContactItem key={item.label} {...item} />
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl border border-border p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-foreground">Send a Message</h2>
          <p className="mt-1 text-sm text-muted">Fill out the form below to get in touch</p>
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
            <motion.button
              type="submit"
              whileHover={status === "sending" ? undefined : { y: -2, scale: 1.01 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-soft transition hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "sending"}
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
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
