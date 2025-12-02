import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | Chaitanya Singh",
  description: "Get in touch for fintech, data, backend, and security collaborations or roles.",
}

export default function ContactPage() {
  return (
    <main className="pt-28 pb-16">
      <ContactForm />
    </main>
  )
}
