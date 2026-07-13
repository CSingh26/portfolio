import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { PageTransition } from "@/components/motion-primitives"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for fintech, data, backend, and security collaborations or roles.",
}

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="pt-28 pb-16">
        <ContactForm />
      </main>
    </PageTransition>
  )
}
